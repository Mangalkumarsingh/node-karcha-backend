import crypto from "crypto";
import bcrypt from "bcryptjs";
import { OAuth2Client } from "google-auth-library";
import { prisma } from "../../prisma";
import { EmailUtil } from "../../utils/email.util";
import { EmailService } from "../../utils/email.service";
import { PhoneUtil } from "../../utils/phone.util";
import { TokenService } from "../../utils/token.service";
import { AppError } from "../../errors/AppError";

const DUMMY_PHONE_NUMBER = "+916207210408";
const DUMMY_EMAIL = "test@example.com";
const DUMMY_OTP = "123456";

const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID || "dummy-google-client-id");

export class AuthService {
  // ==========================================
  // Method 1: Email OTP Login
  // ==========================================

  public static async requestEmailOtp(emailInput: string, clientIp?: string) {
    const email = EmailUtil.normalizeEmail(emailInput);
    if (!email || !EmailUtil.isValidEmail(email)) {
      throw new AppError(400, "Invalid email address");
    }

    const expirySeconds = parseInt(process.env.EMAIL_OTP_EXPIRY_SECONDS || "300", 10);
    const resendCooldownSeconds = parseInt(process.env.EMAIL_OTP_RESEND_SECONDS || "60", 10);
    const now = new Date();

    // Check existing pending challenge for this email
    const existingChallenge = await prisma.emailOtpChallenge.findFirst({
      where: {
        email,
        expiresAt: { gt: now },
      },
      orderBy: { createdAt: "desc" },
    });

    if (existingChallenge) {
      const timeSinceLastSent = (now.getTime() - existingChallenge.lastSentAt.getTime()) / 1000;
      if (timeSinceLastSent < resendCooldownSeconds) {
        throw new AppError(429, `Please wait ${Math.ceil(resendCooldownSeconds - timeSinceLastSent)} seconds before requesting another code`);
      }
    }

    // IP rate limiting: check attempts in last 5 minutes from this IP
    if (clientIp) {
      const recentIpAttempts = await prisma.emailOtpChallenge.count({
        where: {
          ipAddress: clientIp,
          createdAt: { gt: new Date(now.getTime() - 5 * 60 * 1000) },
        },
      });
      if (recentIpAttempts >= 10) {
        throw new AppError(429, "Too many requests from this IP address. Please try again later.");
      }
    }

    // Generate cryptographically secure 6-digit OTP
    const otpInt = crypto.randomInt(100000, 1000000);
    const otp = otpInt.toString();
    const otpHash = await bcrypt.hash(otp, 10);
    const expiresAt = new Date(now.getTime() + expirySeconds * 1000);

    // Save challenge
    await prisma.emailOtpChallenge.create({
      data: {
        email,
        otpHash,
        attempts: 0,
        expiresAt,
        lastSentAt: now,
        ipAddress: clientIp || null,
      },
    });

    // Also update existing user record if one exists, for backward compatibility
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      await prisma.user.update({
        where: { id: existingUser.id },
        data: {
          otpHash,
          otpExpiryTime: expiresAt,
          otpLastSentAt: now,
          otpAttempts: 0,
        },
      });
    }

    // Send the OTP via Email Service
    await EmailService.sendOtpEmail({
      to: email,
      otp,
      expiresInMinutes: Math.round(expirySeconds / 60),
    });

    // Clean up expired challenges for this email in background
    prisma.emailOtpChallenge
      .deleteMany({
        where: {
          email,
          expiresAt: { lt: now },
        },
      })
      .catch(() => {});

    return {
      success: true,
      message: "If eligible, a verification code has been sent",
      expiresInSeconds: expirySeconds,
      resendAfterSeconds: resendCooldownSeconds,
    };
  }

  public static async verifyEmailOtp(emailInput: string, otp: string) {
    const email = EmailUtil.normalizeEmail(emailInput);
    if (!email || !EmailUtil.isValidEmail(email)) {
      throw new AppError(400, "Invalid email address");
    }
    if (!otp || !otp.trim()) {
      throw new AppError(400, "Verification code is required");
    }

    const maxAttempts = parseInt(process.env.EMAIL_OTP_MAX_ATTEMPTS || "5", 10);
    const now = new Date();

    // Check dummy account bypass for dev/testing
    if (email === DUMMY_EMAIL && otp === DUMMY_OTP) {
      let user = await prisma.user.findUnique({ where: { email } });
      let isNewUser = false;
      if (!user) {
        user = await prisma.user.create({
          data: {
            email,
            emailVerified: true,
          },
        });
        isNewUser = true;
      } else {
        user = await prisma.user.update({
          where: { id: user.id },
          data: { emailVerified: true },
        });
      }

      // Link any pending invitations
      await this.claimPendingInvitationsForUser(user.id, email, user.phoneNumber);

      const { accessToken, expiresIn } = TokenService.generateAccessToken(user.id);
      return {
        accessToken,
        tokenType: "Bearer",
        expiresIn,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          profileImageUrl: user.profileImageUrl,
          emailVerified: user.emailVerified ?? true,
          loginType: "EMAIL",
        },
      };
    }

    // Find the latest valid OTP challenge
    const challenge = await prisma.emailOtpChallenge.findFirst({
      where: {
        email,
        expiresAt: { gt: now },
      },
      orderBy: { createdAt: "desc" },
    });

    if (!challenge) {
      throw new AppError(401, "Invalid or expired OTP");
    }

    if (challenge.attempts >= maxAttempts) {
      throw new AppError(429, "Too many failed attempts. Please request a new verification code.");
    }

    // Securely compare OTP against stored hash
    const isMatch = await bcrypt.compare(otp.trim(), challenge.otpHash);
    if (!isMatch) {
      await prisma.emailOtpChallenge.update({
        where: { id: challenge.id },
        data: { attempts: challenge.attempts + 1 },
      });
      throw new AppError(401, "Invalid or expired OTP");
    }

    // OTP is valid! Invalidate all challenges for this email to prevent reuse
    await prisma.emailOtpChallenge.deleteMany({
      where: { email },
    });

    // Check if user already exists
    let user = await prisma.user.findUnique({
      where: { email },
    });

    let isNewUser = false;
    if (!user) {
      // Automatic registration of new user
      user = await prisma.user.create({
        data: {
          email,
          emailVerified: true,
        },
      });
      isNewUser = true;
    } else {
      // Existing user logging in - update verification state & clear legacy OTP fields
      user = await prisma.user.update({
        where: { id: user.id },
        data: {
          emailVerified: true,
          otpHash: null,
          otpExpiryTime: null,
          otpAttempts: 0,
        },
      });
    }

    // Associate any pending invitations sent to this email
    await this.claimPendingInvitationsForUser(user.id, email, user.phoneNumber);

    const { accessToken, expiresIn } = TokenService.generateAccessToken(user.id);

    return {
      accessToken,
      tokenType: "Bearer",
      expiresIn,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        profileImageUrl: user.profileImageUrl,
        emailVerified: user.emailVerified ?? true,
        loginType: "EMAIL",
      },
    };
  }

  // ==========================================
  // Method 2: Google Sign-In & Account Linking
  // ==========================================

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
      throw new AppError(401, "Google account not verified or missing required email");
    }

    const verifiedEmail = EmailUtil.normalizeEmail(payload.email);
    const googleSub = payload.sub;

    // 1. Check if user with this googleSubject exists
    let user = await prisma.user.findUnique({
      where: { googleSubject: googleSub },
    });

    if (user) {
      // Existing Google user. Ensure email and emailVerified are up to date
      user = await prisma.user.update({
        where: { id: user.id },
        data: {
          email: user.email || verifiedEmail,
          emailVerified: true,
          name: user.name || payload.name || null,
          profileImageUrl: user.profileImageUrl || payload.picture || null,
        },
      });
    } else {
      // 2. Check if a user with this verified email already exists (Account Linking)
      const existingEmailUser = await prisma.user.findUnique({
        where: { email: verifiedEmail },
      });

      if (existingEmailUser) {
        // Safely link Google authentication to existing user
        user = await prisma.user.update({
          where: { id: existingEmailUser.id },
          data: {
            googleSubject: googleSub,
            emailVerified: true,
            name: existingEmailUser.name || payload.name || null,
            profileImageUrl: existingEmailUser.profileImageUrl || payload.picture || null,
          },
        });
      } else {
        // 3. New user registration via Google
        user = await prisma.user.create({
          data: {
            email: verifiedEmail,
            googleSubject: googleSub,
            name: payload.name || null,
            profileImageUrl: payload.picture || null,
            emailVerified: true,
          },
        });
      }
    }

    // Associate any pending invitations
    await this.claimPendingInvitationsForUser(user.id, verifiedEmail, user.phoneNumber);

    const { accessToken, expiresIn } = TokenService.generateAccessToken(user.id);

    return {
      accessToken,
      tokenType: "Bearer",
      expiresIn,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        profileImageUrl: user.profileImageUrl,
        emailVerified: user.emailVerified ?? true,
        loginType: "GOOGLE",
      },
    };
  }

  // ==========================================
  // Helper: Claim pending invitations on login
  // ==========================================

  private static async claimPendingInvitationsForUser(
    userId: string,
    email?: string | null,
    phone?: string | null
  ) {
    const conditions: any[] = [];
    if (email) {
      conditions.push({ invitedEmail: email.toLowerCase() });
    }
    if (phone) {
      conditions.push({ invitedPhoneNumber: phone });
    }

    if (conditions.length === 0) return;

    await prisma.groupInvitation.updateMany({
      where: {
        status: "PENDING",
        invitedUserId: null,
        OR: conditions,
      },
      data: {
        invitedUserId: userId,
      },
    });
  }

  // ==========================================
  // Legacy Phone OTP Methods (Preserved for compatibility)
  // ==========================================

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

    if (phone === DUMMY_PHONE_NUMBER) {
      const hashedOtp = await bcrypt.hash(DUMMY_OTP, 10);
      const expiry = new Date(now.getTime() + 24 * 60 * 60 * 1000);
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

    if (user.otpLastSentAt && now.getTime() < user.otpLastSentAt.getTime() + 60 * 1000) {
      throw new AppError(429, "Please try again later");
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpHash = await bcrypt.hash(otp, 10);
    const otpExpiryTime = new Date(now.getTime() + 5 * 60 * 1000);

    await prisma.user.update({
      where: { id: user.id },
      data: {
        otpHash,
        otpExpiryTime,
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
}
