import { Decimal } from "@prisma/client/runtime/library";
import { prisma } from "../../prisma";
import { AppError } from "../../errors/AppError";

interface CreateExpenseInput {
  title: string;
  description?: string;
  amount: number;
  paidByUserId: string;
  splitType?: string;
  participantIds: string[];
}

export class SharedExpenseService {
  public static async createExpense(
    groupId: string,
    data: CreateExpenseInput,
    callerUserId: string
  ) {
    const group = await prisma.expenseGroup.findFirst({
      where: { id: groupId, archivedAt: null },
    });

    if (!group) {
      throw new AppError(404, "Group not found");
    }

    await this.verifyActiveMember(groupId, callerUserId);

    if (data.amount <= 0) {
      throw new AppError(400, "Expense amount must be greater than zero");
    }

    const payer = await prisma.user.findUnique({
      where: { id: data.paidByUserId },
    });
    if (!payer) {
      throw new AppError(404, "Payer not found");
    }
    await this.verifyActiveMember(groupId, payer.id);

    const participantIds = data.participantIds;
    const uniqueIds = Array.from(new Set(participantIds));
    if (uniqueIds.length !== participantIds.length) {
      throw new AppError(400, "Duplicate participants are not allowed");
    }

    if (uniqueIds.length === 0) {
      throw new AppError(400, "Participants list cannot be empty");
    }

    for (const pid of uniqueIds) {
      await this.verifyActiveMember(groupId, pid);
    }

    const splitType = data.splitType || "EQUAL";
    const amountDecimal = new Decimal(data.amount.toFixed(2));

    const splitsData = this.calculateEqualSplits(uniqueIds, amountDecimal);

    const expense = await prisma.$transaction(async (tx: any) => {
      const created = await tx.expense.create({
        data: {
          title: data.title.trim(),
          description: data.description ? data.description.trim() : null,
          amount: amountDecimal,
          currency: group.currency,
          userId: callerUserId,
          paidById: data.paidByUserId,
          groupId: group.id,
          splitType,
        },
      });

      await tx.expenseSplit.createMany({
        data: splitsData.map((s) => ({
          expenseId: created.id,
          userId: s.userId,
          shareAmount: s.shareAmount,
        })),
      });

      return created;
    });

    return this.getExpenseDetails(groupId, expense.id, callerUserId);
  }

  public static async getGroupExpenses(
    groupId: string,
    page: number = 0,
    size: number = 20,
    callerUserId: string
  ) {
    await this.verifyActiveMember(groupId, callerUserId);

    const totalElements = await prisma.expense.count({
      where: { groupId, deletedAt: null },
    });

    const expenses = await prisma.expense.findMany({
      where: { groupId, deletedAt: null },
      include: {
        user: true,
        paidBy: true,
        splits: true,
      },
      orderBy: { createdAt: "desc" },
      skip: page * size,
      take: size,
    });

    const totalPages = Math.ceil(totalElements / size);

    const content = expenses.map((e: any) => ({
      id: e.id,
      groupId: e.groupId,
      title: e.title,
      amount: Number(e.amount),
      currency: e.currency,
      paidBy: e.paidBy
        ? {
            id: e.paidBy.id,
            name: e.paidBy.name,
            email: e.paidBy.email,
            phoneNumber: e.paidBy.phoneNumber,
            profileImageUrl: e.paidBy.profileImageUrl,
          }
        : null,
      createdBy: {
        id: e.user.id,
        name: e.user.name,
        email: e.user.email,
        phoneNumber: e.user.phoneNumber,
        profileImageUrl: e.user.profileImageUrl,
      },
      participantCount: e.splits.length,
      splitType: e.splitType,
      createdAt: e.createdAt,
    }));

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

  public static async getExpenseDetails(
    groupId: string,
    expenseId: string,
    callerUserId: string
  ) {
    await this.verifyActiveMember(groupId, callerUserId);

    const expense = await prisma.expense.findFirst({
      where: { id: expenseId, groupId, deletedAt: null },
      include: {
        user: true,
        paidBy: true,
        splits: {
          include: { user: true },
        },
      },
    });

    if (!expense) {
      throw new AppError(404, "Expense not found in this group");
    }

    const splitDtos = expense.splits.map((s: any) => ({
      id: s.id,
      userId: s.userId,
      userName: s.user.name || s.user.phoneNumber || s.user.email || "Unknown",
      shareAmount: Number(s.shareAmount),
    }));

    return {
      id: expense.id,
      groupId: expense.groupId,
      title: expense.title,
      description: expense.description,
      amount: Number(expense.amount),
      currency: expense.currency,
      paidBy: expense.paidBy
        ? {
            id: expense.paidBy.id,
            name: expense.paidBy.name,
            email: expense.paidBy.email,
            phoneNumber: expense.paidBy.phoneNumber,
            profileImageUrl: expense.paidBy.profileImageUrl,
          }
        : null,
      createdBy: {
        id: expense.user.id,
        name: expense.user.name,
        email: expense.user.email,
        phoneNumber: expense.user.phoneNumber,
        profileImageUrl: expense.user.profileImageUrl,
      },
      participantCount: splitDtos.length,
      splitType: expense.splitType,
      createdAt: expense.createdAt,
      updatedAt: expense.updatedAt,
      splits: splitDtos,
    };
  }

  public static async updateExpense(
    groupId: string,
    expenseId: string,
    data: CreateExpenseInput,
    callerUserId: string
  ) {
    await this.verifyActiveMember(groupId, callerUserId);

    const expense = await prisma.expense.findFirst({
      where: { id: expenseId, groupId, deletedAt: null },
    });

    if (!expense) {
      throw new AppError(404, "Expense not found in this group");
    }

    await this.verifyEditPermission(groupId, expense, callerUserId);

    if (data.amount <= 0) {
      throw new AppError(400, "Expense amount must be greater than zero");
    }

    const payer = await prisma.user.findUnique({
      where: { id: data.paidByUserId },
    });
    if (!payer) {
      throw new AppError(404, "Payer not found");
    }
    await this.verifyActiveMember(groupId, payer.id);

    const participantIds = data.participantIds;
    const uniqueIds = Array.from(new Set(participantIds));
    if (uniqueIds.length !== participantIds.length) {
      throw new AppError(400, "Duplicate participants are not allowed");
    }
    if (uniqueIds.length === 0) {
      throw new AppError(400, "Participants list cannot be empty");
    }

    for (const pid of uniqueIds) {
      await this.verifyActiveMember(groupId, pid);
    }

    const splitType = data.splitType || "EQUAL";
    const amountDecimal = new Decimal(data.amount.toFixed(2));
    const splitsData = this.calculateEqualSplits(uniqueIds, amountDecimal);

    await prisma.$transaction(async (tx: any) => {
      await tx.expense.update({
        where: { id: expenseId },
        data: {
          title: data.title.trim(),
          description: data.description ? data.description.trim() : null,
          amount: amountDecimal,
          paidById: data.paidByUserId,
          splitType,
          updatedAt: new Date(),
        },
      });

      await tx.expenseSplit.deleteMany({
        where: { expenseId },
      });

      await tx.expenseSplit.createMany({
        data: splitsData.map((s) => ({
          expenseId,
          userId: s.userId,
          shareAmount: s.shareAmount,
        })),
      });
    });

    return this.getExpenseDetails(groupId, expenseId, callerUserId);
  }

  public static async deleteExpense(groupId: string, expenseId: string, callerUserId: string) {
    await this.verifyActiveMember(groupId, callerUserId);

    const expense = await prisma.expense.findFirst({
      where: { id: expenseId, groupId, deletedAt: null },
    });

    if (!expense) {
      throw new AppError(404, "Expense not found in this group");
    }

    await this.verifyEditPermission(groupId, expense, callerUserId);

    await prisma.expense.update({
      where: { id: expenseId },
      data: { deletedAt: new Date() },
    });
  }

  private static calculateEqualSplits(participantIds: string[], totalAmount: Decimal): { userId: string; shareAmount: Decimal }[] {
    const n = participantIds.length;
    const totalMinorUnits = Math.round(Number(totalAmount) * 100);
    const baseShareMinor = Math.floor(totalMinorUnits / n);
    const remainderMinor = totalMinorUnits % n;

    const splits = [];
    for (let i = 0; i < n; i++) {
      const currentMinor = baseShareMinor + (i < remainderMinor ? 1 : 0);
      const share = new Decimal((currentMinor / 100).toFixed(2));
      splits.push({
        userId: participantIds[i],
        shareAmount: share,
      });
    }

    return splits;
  }

  private static async verifyActiveMember(groupId: string, userId: string) {
    const member = await prisma.groupMember.findFirst({
      where: { groupId, userId, status: "ACTIVE" },
    });
    if (!member) {
      throw new AppError(403, `User ${userId} is not an active member of this group`);
    }
  }

  private static async verifyEditPermission(groupId: string, expense: { userId: string }, callerUserId: string) {
    if (expense.userId === callerUserId) {
      return;
    }

    const member = await prisma.groupMember.findFirst({
      where: { groupId, userId: callerUserId, status: "ACTIVE" },
    });

    if (!member || member.role !== "ADMIN") {
      throw new AppError(403, "Only the expense creator or group admins can edit or delete this expense");
    }
  }
}
