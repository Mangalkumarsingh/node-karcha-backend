import { prisma } from "../../prisma";
import { AppError } from "../../errors/AppError";

export class UserService {
  public static async getProfile(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new AppError(404, "User not found");
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

  public static async updateProfile(
    userId: string,
    data: { name?: string; profileImageUrl?: string }
  ) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new AppError(404, "User not found");
    }

    const updated = await prisma.user.update({
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
