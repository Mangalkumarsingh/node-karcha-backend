"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseGroupService = void 0;
const prisma_1 = require("../../prisma");
const balance_service_1 = require("./balance.service");
const AppError_1 = require("../../errors/AppError");
class ExpenseGroupService {
    static async createGroup(creatorUserId, data) {
        const creator = await prisma_1.prisma.user.findUnique({
            where: { id: creatorUserId },
        });
        if (!creator) {
            throw new AppError_1.AppError(404, "User not found");
        }
        const currency = data.currency && data.currency.trim() ? data.currency.trim().toUpperCase() : "INR";
        const group = await prisma_1.prisma.expenseGroup.create({
            data: {
                name: data.name.trim(),
                description: data.description ? data.description.trim() : null,
                currency,
                createdById: creatorUserId,
            },
        });
        await prisma_1.prisma.groupMember.create({
            data: {
                groupId: group.id,
                userId: creatorUserId,
                role: "ADMIN",
                status: "ACTIVE",
            },
        });
        return {
            id: group.id,
            name: group.name,
            description: group.description,
            currency: group.currency,
            memberCount: 1,
            totalExpenses: 0.0,
            myNetBalance: 0.0,
            createdAt: group.createdAt,
        };
    }
    static async getMyGroups(userId) {
        const memberships = await prisma_1.prisma.groupMember.findMany({
            where: {
                userId,
                status: "ACTIVE",
                group: {
                    archivedAt: null,
                },
            },
            include: {
                group: true,
            },
        });
        const groups = memberships.map((m) => m.group);
        const result = [];
        for (const group of groups) {
            const memberCount = await prisma_1.prisma.groupMember.count({
                where: { groupId: group.id, status: "ACTIVE" },
            });
            const expenses = await prisma_1.prisma.expense.findMany({
                where: { groupId: group.id, deletedAt: null },
                select: { amount: true },
            });
            const totalExpenses = expenses.reduce((sum, e) => sum + Number(e.amount), 0);
            const myNetBalance = await balance_service_1.BalanceService.calculateUserNetBalance(group.id, userId);
            result.push({
                id: group.id,
                name: group.name,
                description: group.description,
                currency: group.currency,
                memberCount,
                totalExpenses: Number(totalExpenses.toFixed(2)),
                myNetBalance,
                createdAt: group.createdAt,
            });
        }
        return result;
    }
    static async getGroupDetails(groupId, userId) {
        const group = await prisma_1.prisma.expenseGroup.findFirst({
            where: { id: groupId, archivedAt: null },
        });
        if (!group) {
            throw new AppError_1.AppError(404, "Group not found");
        }
        const isMember = await prisma_1.prisma.groupMember.findFirst({
            where: { groupId, userId, status: "ACTIVE" },
        });
        if (!isMember) {
            throw new AppError_1.AppError(403, "You do not have access to this group");
        }
        const members = await prisma_1.prisma.groupMember.findMany({
            where: { groupId, status: "ACTIVE" },
            include: { user: true },
        });
        const expenses = await prisma_1.prisma.expense.findMany({
            where: { groupId, deletedAt: null },
            select: { amount: true },
        });
        const totalExpenses = expenses.reduce((sum, e) => sum + Number(e.amount), 0);
        const myNetBalance = await balance_service_1.BalanceService.calculateUserNetBalance(group.id, userId);
        const memberDtos = members.map((m) => ({
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
        return {
            id: group.id,
            name: group.name,
            description: group.description,
            currency: group.currency,
            createdById: group.createdById,
            createdAt: group.createdAt,
            updatedAt: group.updatedAt,
            members: memberDtos,
            totalExpenses: Number(totalExpenses.toFixed(2)),
            myNetBalance,
        };
    }
    static async updateGroup(groupId, callerUserId, data) {
        const group = await prisma_1.prisma.expenseGroup.findFirst({
            where: { id: groupId, archivedAt: null },
        });
        if (!group) {
            throw new AppError_1.AppError(404, "Group not found");
        }
        const callerMember = await prisma_1.prisma.groupMember.findFirst({
            where: { groupId, userId: callerUserId, status: "ACTIVE" },
        });
        if (!callerMember || callerMember.role !== "ADMIN") {
            throw new AppError_1.AppError(403, "Only group admins can update group details");
        }
        const currency = data.currency && data.currency.trim() ? data.currency.trim().toUpperCase() : group.currency;
        const updated = await prisma_1.prisma.expenseGroup.update({
            where: { id: groupId },
            data: {
                ...(data.name ? { name: data.name.trim() } : {}),
                ...(data.description !== undefined ? { description: data.description ? data.description.trim() : null } : {}),
                currency,
                updatedAt: new Date(),
            },
        });
        const memberCount = await prisma_1.prisma.groupMember.count({
            where: { groupId, status: "ACTIVE" },
        });
        const expenses = await prisma_1.prisma.expense.findMany({
            where: { groupId, deletedAt: null },
            select: { amount: true },
        });
        const totalExpenses = expenses.reduce((sum, e) => sum + Number(e.amount), 0);
        const myNetBalance = await balance_service_1.BalanceService.calculateUserNetBalance(group.id, callerUserId);
        return {
            id: updated.id,
            name: updated.name,
            description: updated.description,
            currency: updated.currency,
            memberCount,
            totalExpenses: Number(totalExpenses.toFixed(2)),
            myNetBalance,
            createdAt: updated.createdAt,
        };
    }
    static async archiveGroup(groupId, callerUserId) {
        const group = await prisma_1.prisma.expenseGroup.findFirst({
            where: { id: groupId, archivedAt: null },
        });
        if (!group) {
            throw new AppError_1.AppError(404, "Group not found");
        }
        const callerMember = await prisma_1.prisma.groupMember.findFirst({
            where: { groupId, userId: callerUserId, status: "ACTIVE" },
        });
        if (!callerMember || callerMember.role !== "ADMIN") {
            throw new AppError_1.AppError(403, "Only group admins can archive this group");
        }
        await prisma_1.prisma.expenseGroup.update({
            where: { id: groupId },
            data: { archivedAt: new Date() },
        });
    }
}
exports.ExpenseGroupService = ExpenseGroupService;
