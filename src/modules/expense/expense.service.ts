import { Decimal } from "@prisma/client/runtime/library";
import { prisma } from "../../prisma";
import { AppError } from "../../errors/AppError";

export class ExpenseService {
  public static async createExpense(
    userId: string,
    data: { title: string; amount: number }
  ) {
    if (data.amount <= 0) {
      throw new AppError(400, "Expense amount must be greater than zero");
    }

    const expense = await prisma.expense.create({
      data: {
        title: data.title.trim(),
        amount: new Decimal(data.amount.toFixed(2)),
        userId,
      },
    });

    return expense;
  }

  public static async getAllExpenses(userId: string) {
    return prisma.expense.findMany({
      where: {
        userId,
        groupId: null,
        deletedAt: null,
      },
      orderBy: { createdAt: "desc" },
    });
  }

  public static async getExpenseById(id: string, userId: string) {
    const expense = await prisma.expense.findFirst({
      where: {
        id,
        userId,
        groupId: null,
        deletedAt: null,
      },
    });

    if (!expense) {
      throw new AppError(404, "Expense not found");
    }

    return expense;
  }

  public static async updateExpense(
    id: string,
    userId: string,
    data: { title: string; amount: number }
  ) {
    const existing = await prisma.expense.findFirst({
      where: {
        id,
        userId,
        groupId: null,
        deletedAt: null,
      },
    });

    if (!existing) {
      throw new AppError(404, "Expense not found");
    }

    if (data.amount <= 0) {
      throw new AppError(400, "Expense amount must be greater than zero");
    }

    const updated = await prisma.expense.update({
      where: { id },
      data: {
        title: data.title.trim(),
        amount: new Decimal(data.amount.toFixed(2)),
        updatedAt: new Date(),
      },
    });

    return updated;
  }

  public static async deleteExpense(id: string, userId: string) {
    const existing = await prisma.expense.findFirst({
      where: {
        id,
        userId,
        groupId: null,
        deletedAt: null,
      },
    });

    if (!existing) {
      throw new AppError(404, "Expense not found");
    }

    await prisma.expense.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
