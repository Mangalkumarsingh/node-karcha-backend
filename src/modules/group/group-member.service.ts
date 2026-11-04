import { prisma } from "../../prisma";
import { PhoneUtil } from "../../utils/phone.util";
import { BalanceService } from "./balance.service";
import { AppError } from "../../errors/AppError";

export class GroupMemberService {
  public static async inviteMember(
    groupId: string,
    phoneNumber: string,
    inviterUserId: string
  ) {
    const group = await prisma.expenseGroup.findFirst({
      where: { id: groupId, archivedAt: null },
    });

    if (!group) {
      throw new AppError(404, "Group not found");
    }

    const isMember = await prisma.groupMember.findFirst({
      where: { groupId, userId: inviterUserId, status: "ACTIVE" },
    });

    if (!isMember) {
      throw new AppError(403, "You must be an active member to invite others");
    }

    const normalizedPhone = PhoneUtil.normalizePhoneNumber(phoneNumber);

    // Check if user is already an active member
    const alreadyActive = await prisma.groupMember.findFirst({
      where: {
        groupId,
        status: "ACTIVE",
        user: { phoneNumber: normalizedPhone },
      },
    });

    if (alreadyActive) {
      throw new AppError(409, "User is already an active member of this group");
    }

    const now = new Date();
    // Check pending, unexpired invitation
    const pendingInvitation = await prisma.groupInvitation.findFirst({
      where: {
        groupId,
        invitedPhoneNumber: normalizedPhone,
        status: "PENDING",
        expiresAt: { gt: now },
      },
    });

    if (pendingInvitation) {
      throw new AppError(409, "A pending invitation already exists for this phone number");
    }

    const invitedUser = await prisma.user.findUnique({
      where: { phoneNumber: normalizedPhone },
    });

    const inviter = await prisma.user.findUnique({
      where: { id: inviterUserId },
    });

    if (!inviter) {
      throw new AppError(404, "User not found");
    }

    const expiresAt = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days

    const invitation = await prisma.groupInvitation.create({
      data: {
        groupId,
        invitedPhoneNumber: normalizedPhone,
        invitedUserId: invitedUser ? invitedUser.id : null,
        invitedById: inviterUserId,
        status: "PENDING",
        expiresAt,
      },
      include: {
        group: true,
        invitedUser: true,
        invitedBy: true,
      },
    });

    return {
      id: invitation.id,
      groupId: invitation.groupId,
      groupName: invitation.group.name,
      invitedPhoneNumber: invitation.invitedPhoneNumber,
      invitedUser: invitation.invitedUser
        ? {
            id: invitation.invitedUser.id,
            name: invitation.invitedUser.name,
            email: invitation.invitedUser.email,
            phoneNumber: invitation.invitedUser.phoneNumber,
            profileImageUrl: invitation.invitedUser.profileImageUrl,
          }
        : null,
      invitedBy: {
        id: invitation.invitedBy.id,
        name: invitation.invitedBy.name,
        email: invitation.invitedBy.email,
        phoneNumber: invitation.invitedBy.phoneNumber,
        profileImageUrl: invitation.invitedBy.profileImageUrl,
      },
      status: invitation.status,
      createdAt: invitation.createdAt,
      expiresAt: invitation.expiresAt,
    };
  }

  public static async getGroupMembers(groupId: string, callerUserId: string) {
    const isMember = await prisma.groupMember.findFirst({
      where: { groupId, userId: callerUserId, status: "ACTIVE" },
    });

    if (!isMember) {
      throw new AppError(403, "You do not have access to this group");
    }

    const members = await prisma.groupMember.findMany({
      where: { groupId, status: "ACTIVE" },
      include: { user: true },
    });

    return members.map((m: any) => ({
      id: m.id,
      groupId: m.groupId,
      userId: m.userId,
      role: m.role,
      status: m.status,
      joinedAt: m.joinedAt,
      user: {
        id: m.user.id,
        name: m.user.name,
        email: m.user.email,
        phoneNumber: m.user.phoneNumber,
        profileImageUrl: m.user.profileImageUrl,
      },
    }));
  }

  public static async removeMember(
    groupId: string,
    memberUserId: string,
    callerUserId: string
  ) {
    const isSelf = callerUserId === memberUserId;

    if (!isSelf) {
      const callerMember = await prisma.groupMember.findFirst({
        where: { groupId, userId: callerUserId, status: "ACTIVE" },
      });
      if (!callerMember || callerMember.role !== "ADMIN") {
        throw new AppError(403, "Only group admins can remove other members");
      }
    }

    const targetMember = await prisma.groupMember.findFirst({
      where: { groupId, userId: memberUserId, status: "ACTIVE" },
    });

    if (!targetMember) {
      throw new AppError(404, "Member not found in this group");
    }

    const netBalance = await BalanceService.calculateUserNetBalance(groupId, memberUserId);
    if (Math.abs(netBalance) > 0.01) {
      throw new AppError(
        400,
        `Cannot leave or remove member with non-zero balance (${netBalance}). Settle all debts first.`
      );
    }

    await prisma.groupMember.update({
      where: { id: targetMember.id },
      data: { status: isSelf ? "INACTIVE" : "REMOVED" },
    });
  }

  public static async acceptInvitation(invitationId: string, callerUserId: string) {
    const user = await prisma.user.findUnique({
      where: { id: callerUserId },
    });

    if (!user) {
      throw new AppError(404, "User not found");
    }

    const invitation = await prisma.groupInvitation.findUnique({
      where: { id: invitationId },
    });

    if (!invitation) {
      throw new AppError(404, "Invitation not found");
    }

    if (invitation.status !== "PENDING") {
      throw new AppError(400, `Invitation is already ${invitation.status.toLowerCase()}`);
    }

    if (new Date().getTime() > invitation.expiresAt.getTime()) {
      await prisma.groupInvitation.update({
        where: { id: invitationId },
        data: { status: "EXPIRED" },
      });
      throw new AppError(400, "Invitation has expired");
    }

    const phoneMatches = user.phoneNumber && user.phoneNumber === invitation.invitedPhoneNumber;
    const userMatches = invitation.invitedUserId === callerUserId;

    if (!phoneMatches && !userMatches) {
      throw new AppError(403, "This invitation was sent to a different user/phone number");
    }

    await prisma.groupInvitation.update({
      where: { id: invitationId },
      data: {
        status: "ACCEPTED",
        invitedUserId: callerUserId,
      },
    });

    const existingMember = await prisma.groupMember.findFirst({
      where: { groupId: invitation.groupId, userId: callerUserId },
    });

    if (existingMember) {
      await prisma.groupMember.update({
        where: { id: existingMember.id },
        data: { status: "ACTIVE", joinedAt: new Date() },
      });
    } else {
      await prisma.groupMember.create({
        data: {
          groupId: invitation.groupId,
          userId: callerUserId,
          role: "MEMBER",
          status: "ACTIVE",
        },
      });
    }
  }

  public static async rejectInvitation(invitationId: string, callerUserId: string) {
    const user = await prisma.user.findUnique({
      where: { id: callerUserId },
    });

    if (!user) {
      throw new AppError(404, "User not found");
    }

    const invitation = await prisma.groupInvitation.findUnique({
      where: { id: invitationId },
    });

    if (!invitation) {
      throw new AppError(404, "Invitation not found");
    }

    const phoneMatches = user.phoneNumber && user.phoneNumber === invitation.invitedPhoneNumber;
    const userMatches = invitation.invitedUserId === callerUserId;

    if (!phoneMatches && !userMatches) {
      throw new AppError(403, "This invitation was sent to a different user/phone number");
    }

    await prisma.groupInvitation.update({
      where: { id: invitationId },
      data: { status: "REJECTED" },
    });
  }

  public static async getMyPendingInvitations(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new AppError(404, "User not found");
    }

    const now = new Date();

    const invitations = await prisma.groupInvitation.findMany({
      where: {
        status: "PENDING",
        expiresAt: { gt: now },
        OR: [
          { invitedUserId: userId },
          ...(user.phoneNumber ? [{ invitedPhoneNumber: user.phoneNumber }] : []),
        ],
      },
      include: {
        group: true,
        invitedUser: true,
        invitedBy: true,
      },
      orderBy: { createdAt: "desc" },
    });

    return invitations.map((inv: any) => ({
      id: inv.id,
      groupId: inv.groupId,
      groupName: inv.group.name,
      invitedPhoneNumber: inv.invitedPhoneNumber,
      invitedUser: inv.invitedUser
        ? {
            id: inv.invitedUser.id,
            name: inv.invitedUser.name,
            email: inv.invitedUser.email,
            phoneNumber: inv.invitedUser.phoneNumber,
            profileImageUrl: inv.invitedUser.profileImageUrl,
          }
        : null,
      invitedBy: {
        id: inv.invitedBy.id,
        name: inv.invitedBy.name,
        email: inv.invitedBy.email,
        phoneNumber: inv.invitedBy.phoneNumber,
        profileImageUrl: inv.invitedBy.profileImageUrl,
      },
      status: inv.status,
      createdAt: inv.createdAt,
      expiresAt: inv.expiresAt,
    }));
  }
}
