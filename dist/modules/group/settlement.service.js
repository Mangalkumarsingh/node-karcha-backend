"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettlementService = void 0;
const library_1 = require("@prisma/client/runtime/library");
const prisma_1 = require("../../prisma");
const AppError_1 = require("../../errors/AppError");
class SettlementService {
    static async recordSettlement(groupId, data, callerUserId) {
        const group = await prisma_1.prisma.expenseGroup.findFirst({
            where: { id: groupId, archivedAt: null },
        });
        if (!group) {
            throw new AppError_1.AppError(404, "Group not found");
        }
        await this.verifyActiveMember(groupId, callerUserId);
        if (data.fromUserId === data.toUserId) {
            throw new AppError_1.AppError(400, "Self transfers are not allowed");
        }
        if (data.amount <= 0) {
            throw new AppError_1.AppError(400, "Settlement amount must be greater than zero");
        }
        await this.verifyActiveMember(groupId, data.fromUserId);
        await this.verifyActiveMember(groupId, data.toUserId);
        const isPayer = callerUserId === data.fromUserId;
        if (!isPayer) {
            const callerMember = await prisma_1.prisma.groupMember.findFirst({
                where: { groupId, userId: callerUserId, status: "ACTIVE" },
            });
            if (!callerMember || callerMember.role !== "ADMIN") {
                throw new AppError_1.AppError(403, "Only the payer or a group admin can record this settlement");
            }
        }
        if (data.idempotencyKey && data.idempotencyKey.trim()) {
            const existing = await prisma_1.prisma.settlement.findFirst({
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
        const fromUser = await prisma_1.prisma.user.findUnique({
            where: { id: data.fromUserId },
        });
        if (!fromUser) {
            throw new AppError_1.AppError(404, "Payer user not found");
        }
        const toUser = await prisma_1.prisma.user.findUnique({
            where: { id: data.toUserId },
        });
        if (!toUser) {
            throw new AppError_1.AppError(404, "Recipient user not found");
        }
        const paymentMethod = data.paymentMethod || "CASH";
        const settlement = await prisma_1.prisma.settlement.create({
            data: {
                groupId,
                fromUserId: data.fromUserId,
                toUserId: data.toUserId,
                amount: new library_1.Decimal(data.amount.toFixed(2)),
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
    static async getGroupSettlements(groupId, page = 0, size = 20, callerUserId) {
        await this.verifyActiveMember(groupId, callerUserId);
        const totalElements = await prisma_1.prisma.settlement.count({
            where: { groupId },
        });
        const settlements = await prisma_1.prisma.settlement.findMany({
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
        const content = settlements.map((s) => this.toSettlementResponse(s));
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
    static async confirmSettlement(groupId, settlementId, callerUserId) {
        await this.verifyActiveMember(groupId, callerUserId);
        const settlement = await prisma_1.prisma.settlement.findFirst({
            where: { id: settlementId, groupId },
            include: {
                fromUser: true,
                toUser: true,
            },
        });
        if (!settlement) {
            throw new AppError_1.AppError(404, "Settlement not found in this group");
        }
        if (settlement.status !== "PENDING") {
            throw new AppError_1.AppError(400, `Cannot confirm a settlement with status ${settlement.status}`);
        }
        if (settlement.toUserId !== callerUserId) {
            throw new AppError_1.AppError(403, "Only the recipient can confirm this settlement");
        }
        const updated = await prisma_1.prisma.settlement.update({
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
    static async rejectSettlement(groupId, settlementId, callerUserId) {
        await this.verifyActiveMember(groupId, callerUserId);
        const settlement = await prisma_1.prisma.settlement.findFirst({
            where: { id: settlementId, groupId },
            include: {
                fromUser: true,
                toUser: true,
            },
        });
        if (!settlement) {
            throw new AppError_1.AppError(404, "Settlement not found in this group");
        }
        if (settlement.status !== "PENDING") {
            throw new AppError_1.AppError(400, `Cannot reject a settlement with status ${settlement.status}`);
        }
        if (settlement.toUserId !== callerUserId) {
            throw new AppError_1.AppError(403, "Only the recipient can reject this settlement");
        }
        const updated = await prisma_1.prisma.settlement.update({
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
    static toSettlementResponse(settlement) {
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
    static async verifyActiveMember(groupId, userId) {
        const member = await prisma_1.prisma.groupMember.findFirst({
            where: { groupId, userId, status: "ACTIVE" },
        });
        if (!member) {
            throw new AppError_1.AppError(403, `User ${userId} is not an active member of this group`);
        }
    }
}
exports.SettlementService = SettlementService;
