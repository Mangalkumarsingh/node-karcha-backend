"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const prisma_1 = require("../../prisma");
const AppError_1 = require("../../errors/AppError");
class UserService {
    static async getProfile(userId) {
        const user = await prisma_1.prisma.user.findUnique({
            where: { id: userId },
        });
        if (!user) {
            throw new AppError_1.AppError(404, "User not found");
        }
        return {
            id: user.id,
            phoneNumber: user.phoneNumber,
            email: user.email,
            name: user.name,
            profileImageUrl: user.profileImageUrl,
            phoneVerified: user.phoneVerified ?? false,
            emailVerified: user.emailVerified ?? false,
            createdAt: user.createdAt,
        };
    }
    static async updateProfile(userId, data) {
        const user = await prisma_1.prisma.user.findUnique({
            where: { id: userId },
        });
        if (!user) {
            throw new AppError_1.AppError(404, "User not found");
        }
        const updated = await prisma_1.prisma.user.update({
            where: { id: userId },
            data: {
                ...(data.name !== undefined ? { name: data.name ? data.name.trim() : null } : {}),
                ...(data.profileImageUrl !== undefined
                    ? { profileImageUrl: data.profileImageUrl ? data.profileImageUrl.trim() : null }
                    : {}),
            },
        });
        return {
            id: updated.id,
            phoneNumber: updated.phoneNumber,
            email: updated.email,
            name: updated.name,
            profileImageUrl: updated.profileImageUrl,
            phoneVerified: updated.phoneVerified ?? false,
            emailVerified: updated.emailVerified ?? false,
            createdAt: updated.createdAt,
        };
    }
}
exports.UserService = UserService;
