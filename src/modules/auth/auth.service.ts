import bcrypt from "bcryptjs";
import { OAuth2Client } from "google-auth-library";
import { prisma } from "../../prisma";
import { PhoneUtil } from "../../utils/phone.util";
import { TokenService } from "../../utils/token.service";
import { AppError } from "../../errors/AppError";

const DUMMY_PHONE_NUMBER = "+916207210408";
const DUMMY_OTP = "123456";

const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID || "dummy-google-client-id");

export class AuthService {
  public static async requestOtp(phoneNumber: string) {
    const phone = PhoneUtil.normalizePhoneNumber(phoneNumber);

    let user = await prisma.user.findUnique({
      where: { phoneNumber: phone },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          phoneNumber: phone,
          phoneVerified: false,
        },
      });
    }

    const now = new Date();

    // Check dummy test phone
    if (phone === DUMMY_PHONE_NUMBER) {
      const hashedOtp = await bcrypt.hash(DUMMY_OTP, 10);
      const expiry = new Date(now.getTime() + 24 * 60 * 60 * 1000); // 1 day
      await prisma.user.update({
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
      throw new AppError(429, "Please try again later");
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpHash = await bcrypt.hash(otp, 10);
    const otpExpiryTime = new Date(now.getTime() + 5 * 60 * 1000); // 5 mins

    await prisma.user.update({
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

  public static async verifyOtp(phoneNumber: string, otp: string) {
    const phone = PhoneUtil.normalizePhoneNumber(phoneNumber);

    if (phone === DUMMY_PHONE_NUMBER && otp === DUMMY_OTP) {
      let user = await prisma.user.findUnique({
        where: { phoneNumber: phone },
      });

      if (!user) {
        user = await prisma.user.create({
          data: {
            phoneNumber: phone,
            phoneVerified: true,
          },
        });
      }

      const isNewUser = !user.phoneVerified;
      user = await prisma.user.update({
        where: { id: user.id },
        data: {
          phoneVerified: true,
          otpHash: null,
          otpExpiryTime: null,
          otpAttempts: 0,
        },
      });

      const { accessToken, expiresIn } = TokenService.generateAccessToken(user.id);
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

    const user = await prisma.user.findUnique({
      where: { phoneNumber: phone },
    });

    if (!user) {
      throw new AppError(401, "Invalid or expired OTP");
    }

    const now = new Date();
    if (!user.otpHash || !user.otpExpiryTime || now.getTime() > user.otpExpiryTime.getTime()) {
      throw new AppError(401, "Invalid or expired OTP");
    }

    if ((user.otpAttempts ?? 0) >= 5) {
      throw new AppError(429, "Too many attempts");
    }

    const isMatch = await bcrypt.compare(otp, user.otpHash);
    if (!isMatch) {
      await prisma.user.update({
        where: { id: user.id },
        data: { otpAttempts: (user.otpAttempts ?? 0) + 1 },
      });
      throw new AppError(401, "Invalid or expired OTP");
    }

    const isNewUser = !user.phoneVerified;
    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: {
        phoneVerified: true,
        otpHash: null,
        otpExpiryTime: null,
        otpAttempts: 0,
      },
    });

    const { accessToken, expiresIn } = TokenService.generateAccessToken(updatedUser.id);
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

  public static async loginWithGoogle(googleToken: string) {
    if (!googleToken || !googleToken.trim()) {
      throw new AppError(400, "Google ID token required");
    }

    let payload;
    try {
      const ticket = await googleClient.verifyIdToken({
        idToken: googleToken,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
      payload = ticket.getPayload();
    } catch (e) {
      throw new AppError(401, "Invalid Google token");
    }

    if (!payload || !payload.sub || !payload.email || !payload.email_verified) {
      throw new AppError(401, "Google account not verified");
    }

    let user = await prisma.user.findUnique({
      where: { googleSubject: payload.sub },
    });

    let isNewUser = false;
    if (!user) {
      const existingEmail = await prisma.user.findUnique({
        where: { email: payload.email },
      });
      if (existingEmail) {
        throw new AppError(409, "Account linking requires verification");
      }

      user = await prisma.user.create({
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

    const { accessToken, expiresIn } = TokenService.generateAccessToken(user.id);
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
