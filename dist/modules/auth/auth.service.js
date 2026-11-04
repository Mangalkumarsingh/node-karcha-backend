"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const google_auth_library_1 = require("google-auth-library");
const prisma_1 = require("../../prisma");
const phone_util_1 = require("../../utils/phone.util");
const token_service_1 = require("../../utils/token.service");
const AppError_1 = require("../../errors/AppError");
const DUMMY_PHONE_NUMBER = "+916207210408";
const DUMMY_OTP = "123456";
const googleClient = new google_auth_library_1.OAuth2Client(process.env.GOOGLE_CLIENT_ID || "dummy-google-client-id");
class AuthService {
    static async requestOtp(phoneNumber) {
        const phone = phone_util_1.PhoneUtil.normalizePhoneNumber(phoneNumber);
        let user = await prisma_1.prisma.user.findUnique({
            where: { phoneNumber: phone },
        });
        if (!user) {
            user = await prisma_1.prisma.user.create({
                data: {
                    phoneNumber: phone,
                    phoneVerified: false,
                },
            });
        }
        const now = new Date();
        // Check dummy test phone
        if (phone === DUMMY_PHONE_NUMBER) {
            const hashedOtp = await bcryptjs_1.default.hash(DUMMY_OTP, 10);
            const expiry = new Date(now.getTime() + 24 * 60 * 60 * 1000); // 1 day
            await prisma_1.prisma.user.update({
                where: { id: user.id },
                data: {
                    otpHash: hashedOtp,
                    otpExpiryTime: expiry,
                    otpLastSentAt: now,
                    otpAttempts: 0,
                },
            });
            return {
                success: true,
                message: "If eligible, a verification code has been sent",
                expiresInSeconds: 300,
                resendAfterSeconds: 60,
            };
        }
        // Rate limit check: 60 seconds
        if (user.otpLastSentAt && now.getTime() < user.otpLastSentAt.getTime() + 60 * 1000) {
            throw new AppError_1.AppError(429, "Please try again later");
        }
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const otpHash = await bcryptjs_1.default.hash(otp, 10);
        const otpExpiryTime = new Date(now.getTime() + 5 * 60 * 1000); // 5 mins
        await prisma_1.prisma.user.update({
            where: { id: user.id },
            data: {
                otpHash,
                otpExpiryTime,
                otpLastSentAt: now,
                otpAttempts: 0,
            },
        });
        console.log(`[SMS-DEV] OTP for ${phone} is: ${otp}`);
        return {
            success: true,
            message: "If eligible, a verification code has been sent",
            expiresInSeconds: 300,
            resendAfterSeconds: 60,
        };
    }
    static async verifyOtp(phoneNumber, otp) {
        const phone = phone_util_1.PhoneUtil.normalizePhoneNumber(phoneNumber);
        if (phone === DUMMY_PHONE_NUMBER && otp === DUMMY_OTP) {
            let user = await prisma_1.prisma.user.findUnique({
                where: { phoneNumber: phone },
            });
            if (!user) {
                user = await prisma_1.prisma.user.create({
                    data: {
                        phoneNumber: phone,
                        phoneVerified: true,
                    },
                });
            }
            const isNewUser = !user.phoneVerified;
            user = await prisma_1.prisma.user.update({
                where: { id: user.id },
                data: {
                    phoneVerified: true,
                    otpHash: null,
                    otpExpiryTime: null,
                    otpAttempts: 0,
                },
            });
            const { accessToken, expiresIn } = token_service_1.TokenService.generateAccessToken(user.id);
            return {
                id: user.id,
                phoneNumber: user.phoneNumber,
                email: user.email,
                loginType: "PHONE",
                newUser: isNewUser,
                accessToken,
                tokenType: "Bearer",
                expiresIn,
                message: "Login successful",
            };
        }
        const user = await prisma_1.prisma.user.findUnique({
            where: { phoneNumber: phone },
        });
        if (!user) {
            throw new AppError_1.AppError(401, "Invalid or expired OTP");
        }
        const now = new Date();
        if (!user.otpHash || !user.otpExpiryTime || now.getTime() > user.otpExpiryTime.getTime()) {
            throw new AppError_1.AppError(401, "Invalid or expired OTP");
        }
        if ((user.otpAttempts ?? 0) >= 5) {
            throw new AppError_1.AppError(429, "Too many attempts");
        }
        const isMatch = await bcryptjs_1.default.compare(otp, user.otpHash);
        if (!isMatch) {
            await prisma_1.prisma.user.update({
                where: { id: user.id },
                data: { otpAttempts: (user.otpAttempts ?? 0) + 1 },
            });
            throw new AppError_1.AppError(401, "Invalid or expired OTP");
        }
        const isNewUser = !user.phoneVerified;
        const updatedUser = await prisma_1.prisma.user.update({
            where: { id: user.id },
            data: {
                phoneVerified: true,
                otpHash: null,
                otpExpiryTime: null,
                otpAttempts: 0,
            },
        });
        const { accessToken, expiresIn } = token_service_1.TokenService.generateAccessToken(updatedUser.id);
        return {
            id: updatedUser.id,
            phoneNumber: updatedUser.phoneNumber,
            email: updatedUser.email,
            loginType: "PHONE",
            newUser: isNewUser,
            accessToken,
            tokenType: "Bearer",
            expiresIn,
            message: "Login successful",
        };
    }
    static async loginWithGoogle(googleToken) {
        if (!googleToken || !googleToken.trim()) {
            throw new AppError_1.AppError(400, "Google ID token required");
        }
        let payload;
        try {
            const ticket = await googleClient.verifyIdToken({
                idToken: googleToken,
                audience: process.env.GOOGLE_CLIENT_ID,
            });
            payload = ticket.getPayload();
        }
        catch (e) {
            throw new AppError_1.AppError(401, "Invalid Google token");
        }
        if (!payload || !payload.sub || !payload.email || !payload.email_verified) {
            throw new AppError_1.AppError(401, "Google account not verified");
        }
        let user = await prisma_1.prisma.user.findUnique({
            where: { googleSubject: payload.sub },
        });
        let isNewUser = false;
        if (!user) {
            const existingEmail = await prisma_1.prisma.user.findUnique({
                where: { email: payload.email },
            });
            if (existingEmail) {
                throw new AppError_1.AppError(409, "Account linking requires verification");
            }
            user = await prisma_1.prisma.user.create({
                data: {
                    email: payload.email,
                    googleSubject: payload.sub,
                    name: payload.name || null,
                    profileImageUrl: payload.picture || null,
                    emailVerified: true,
                },
            });
            isNewUser = true;
        }
        const { accessToken, expiresIn } = token_service_1.TokenService.generateAccessToken(user.id);
        return {
            id: user.id,
            phoneNumber: user.phoneNumber,
            email: user.email,
            loginType: "GOOGLE",
            newUser: isNewUser,
            accessToken,
            tokenType: "Bearer",
            expiresIn,
            message: "Login successful",
        };
    }
}
exports.AuthService = AuthService;
