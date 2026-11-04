"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseService = void 0;
const library_1 = require("@prisma/client/runtime/library");
const prisma_1 = require("../../prisma");
const AppError_1 = require("../../errors/AppError");
class ExpenseService {
    static async createExpense(userId, data) {
        if (data.amount <= 0) {
            throw new AppError_1.AppError(400, "Expense amount must be greater than zero");
        }
        const expense = await prisma_1.prisma.expense.create({
            data: {
                title: data.title.trim(),
                amount: new library_1.Decimal(data.amount.toFixed(2)),
                userId,
            },
        });
        return expense;
    }
    static async getAllExpenses(userId) {
        return prisma_1.prisma.expense.findMany({
            where: {
                userId,
                groupId: null,
                deletedAt: null,
            },
            orderBy: { createdAt: "desc" },
        });
    }
    static async getExpenseById(id, userId) {
        const expense = await prisma_1.prisma.expense.findFirst({
            where: {
                id,
                userId,
                groupId: null,
                deletedAt: null,
            },
        });
        if (!expense) {
            throw new AppError_1.AppError(404, "Expense not found");
        }
        return expense;
    }
    static async updateExpense(id, userId, data) {
        const existing = await prisma_1.prisma.expense.findFirst({
            where: {
                id,
                userId,
                groupId: null,
                deletedAt: null,
            },
        });
        if (!existing) {
            throw new AppError_1.AppError(404, "Expense not found");
        }
        if (data.amount <= 0) {
            throw new AppError_1.AppError(400, "Expense amount must be greater than zero");
        }
        const updated = await prisma_1.prisma.expense.update({
            where: { id },
            data: {
                title: data.title.trim(),
                amount: new library_1.Decimal(data.amount.toFixed(2)),
                updatedAt: new Date(),
            },
        });
        return updated;
    }
    static async deleteExpense(id, userId) {
        const existing = await prisma_1.prisma.expense.findFirst({
            where: {
                id,
                userId,
                groupId: null,
                deletedAt: null,
            },
        });
        if (!existing) {
            throw new AppError_1.AppError(404, "Expense not found");
        }
        await prisma_1.prisma.expense.update({
            where: { id },
            data: { deletedAt: new Date() },
        });
    }
}
exports.ExpenseService = ExpenseService;
