import { Decimal } from "@prisma/client/runtime/library";
import { prisma } from "../../prisma";
import { AppError } from "../../errors/AppError";

interface CreateSettlementInput {
  toUserId: string;
  fromUserId: string;
  amount: number;
  paymentMethod?: string;
  note?: string;
  idempotencyKey?: string;
}

export class SettlementService {
  public static async recordSettlement(
    groupId: string,
    data: CreateSettlementInput,
    callerUserId: string
  ) {
    const group = await prisma.expenseGroup.findFirst({
      where: { id: groupId, archivedAt: null },
    });

    if (!group) {
      throw new AppError(404, "Group not found");
    }

    await this.verifyActiveMember(groupId, callerUserId);

    if (data.fromUserId === data.toUserId) {
      throw new AppError(400, "Self transfers are not allowed");
    }

    if (data.amount <= 0) {
      throw new AppError(400, "Settlement amount must be greater than zero");
    }

    await this.verifyActiveMember(groupId, data.fromUserId);
    await this.verifyActiveMember(groupId, data.toUserId);

    const isPayer = callerUserId === data.fromUserId;
    if (!isPayer) {
      const callerMember = await prisma.groupMember.findFirst({
        where: { groupId, userId: callerUserId, status: "ACTIVE" },
      });
      if (!callerMember || callerMember.role !== "ADMIN") {
        throw new AppError(403, "Only the payer or a group admin can record this settlement");
      }
    }

    if (data.idempotencyKey && data.idempotencyKey.trim()) {
      const existing = await prisma.settlement.findFirst({
        where: {
          groupId,
          idempotencyKey: data.idempotencyKey.trim(),
        },
        include: {
          fromUser: true,
          toUser: true,
        },
      });

      if (existing) {
        return this.toSettlementResponse(existing);
      }
    }

    const fromUser = await prisma.user.findUnique({
      where: { id: data.fromUserId },
    });
    if (!fromUser) {
      throw new AppError(404, "Payer user not found");
    }

    const toUser = await prisma.user.findUnique({
      where: { id: data.toUserId },
    });
    if (!toUser) {
      throw new AppError(404, "Recipient user not found");
    }

    const paymentMethod = data.paymentMethod || "CASH";

    const settlement = await prisma.settlement.create({
      data: {
        groupId,
        fromUserId: data.fromUserId,
        toUserId: data.toUserId,
        amount: new Decimal(data.amount.toFixed(2)),
        currency: group.currency,
        paymentMethod,
        status: "PENDING",
        note: data.note ? data.note.trim() : null,
        idempotencyKey: data.idempotencyKey ? data.idempotencyKey.trim() : null,
      },
      include: {
        fromUser: true,
        toUser: true,
      },
    });

    return this.toSettlementResponse(settlement);
  }

  public static async getGroupSettlements(
    groupId: string,
    page: number = 0,
    size: number = 20,
    callerUserId: string
  ) {
    await this.verifyActiveMember(groupId, callerUserId);

    const totalElements = await prisma.settlement.count({
      where: { groupId },
    });

    const settlements = await prisma.settlement.findMany({
      where: { groupId },
      include: {
        fromUser: true,
        toUser: true,
      },
      orderBy: { createdAt: "desc" },
      skip: page * size,
      take: size,
    });

    const totalPages = Math.ceil(totalElements / size);

    const content = settlements.map((s: any) => this.toSettlementResponse(s));

    return {
      content,
      pageable: {
        pageNumber: page,
        pageSize: size,
        sort: { empty: false, sorted: true, unsorted: false },
        offset: page * size,
        paged: true,
        unpaged: false,
      },
      last: page >= totalPages - 1,
      totalElements,
      totalPages,
      size,
      number: page,
      sort: { empty: false, sorted: true, unsorted: false },
      first: page === 0,
      numberOfElements: content.length,
      empty: content.length === 0,
    };
  }

  public static async confirmSettlement(
    groupId: string,
    settlementId: string,
    callerUserId: string
  ) {
    await this.verifyActiveMember(groupId, callerUserId);

    const settlement = await prisma.settlement.findFirst({
      where: { id: settlementId, groupId },
      include: {
        fromUser: true,
        toUser: true,
      },
    });

    if (!settlement) {
      throw new AppError(404, "Settlement not found in this group");
    }

    if (settlement.status !== "PENDING") {
      throw new AppError(400, `Cannot confirm a settlement with status ${settlement.status}`);
    }

    if (settlement.toUserId !== callerUserId) {
      throw new AppError(403, "Only the recipient can confirm this settlement");
    }

    const updated = await prisma.settlement.update({
      where: { id: settlementId },
      data: {
        status: "CONFIRMED",
        confirmedAt: new Date(),
      },
      include: {
        fromUser: true,
        toUser: true,
      },
    });

    return this.toSettlementResponse(updated);
  }

  public static async rejectSettlement(
    groupId: string,
    settlementId: string,
    callerUserId: string
  ) {
    await this.verifyActiveMember(groupId, callerUserId);

    const settlement = await prisma.settlement.findFirst({
      where: { id: settlementId, groupId },
      include: {
        fromUser: true,
        toUser: true,
      },
    });

    if (!settlement) {
      throw new AppError(404, "Settlement not found in this group");
    }

    if (settlement.status !== "PENDING") {
      throw new AppError(400, `Cannot reject a settlement with status ${settlement.status}`);
    }

    if (settlement.toUserId !== callerUserId) {
      throw new AppError(403, "Only the recipient can reject this settlement");
    }

    const updated = await prisma.settlement.update({
      where: { id: settlementId },
      data: {
        status: "REJECTED",
      },
      include: {
        fromUser: true,
        toUser: true,
      },
    });

    return this.toSettlementResponse(updated);
  }

  private static toSettlementResponse(settlement: any) {
    return {
      id: settlement.id,
      groupId: settlement.groupId,
      fromUser: {
        id: settlement.fromUser.id,
        name: settlement.fromUser.name,
        email: settlement.fromUser.email,
        phoneNumber: settlement.fromUser.phoneNumber,
        profileImageUrl: settlement.fromUser.profileImageUrl,
      },
      toUser: {
        id: settlement.toUser.id,
        name: settlement.toUser.name,
        email: settlement.toUser.email,
        phoneNumber: settlement.toUser.phoneNumber,
        profileImageUrl: settlement.toUser.profileImageUrl,
      },
      amount: Number(settlement.amount),
      currency: settlement.currency,
      paymentMethod: settlement.paymentMethod,
      status: settlement.status,
      note: settlement.note,
      idempotencyKey: settlement.idempotencyKey,
      createdAt: settlement.createdAt,
      confirmedAt: settlement.confirmedAt,
    };
  }

  private static async verifyActiveMember(groupId: string, userId: string) {
    const member = await prisma.groupMember.findFirst({
      where: { groupId, userId, status: "ACTIVE" },
    });
    if (!member) {
      throw new AppError(403, `User ${userId} is not an active member of this group`);
    }
  }
}
