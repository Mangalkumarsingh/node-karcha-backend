import { Router, Request, Response, NextFunction } from "express";
import { z } from "zod";
import { AuthService } from "./auth.service";

export const authRouter = Router();

// Validation Schemas
const emailOtpRequestSchema = z.object({
  email: z.string().email("Valid email address is required"),
});

const emailOtpVerifySchema = z.object({
  email: z.string().email("Valid email address is required"),
  otp: z.string().min(1, "OTP is required"),
});

const googleLoginSchema = z.object({
  googleToken: z.string().min(1, "Google ID token required"),
});

// Legacy phone schemas
const phoneOtpRequestSchema = z.object({
  phoneNumber: z.string().min(1, "Phone number is required"),
});

const phoneOtpVerifySchema = z.object({
  phoneNumber: z.string().min(1, "Phone number is required"),
  otp: z.string().min(1, "OTP is required"),
});

// ==========================================
// API 1: Request Email OTP
// POST /api/v1/auth/email/otp/request
// ==========================================
authRouter.post("/email/otp/request", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = emailOtpRequestSchema.parse(req.body);
    const clientIp = (req.headers["x-forwarded-for"] as string) || req.socket.remoteAddress;
    const result = await AuthService.requestEmailOtp(email, clientIp);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

// ==========================================
// API 2: Verify Email OTP
// POST /api/v1/auth/email/otp/verify
// ==========================================
authRouter.post("/email/otp/verify", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, otp } = emailOtpVerifySchema.parse(req.body);
    const result = await AuthService.verifyEmailOtp(email, otp);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

// ==========================================
// API 3: Google Sign-In
// POST /api/v1/auth/google
// ==========================================
authRouter.post("/google", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { googleToken } = googleLoginSchema.parse(req.body);
    const result = await AuthService.loginWithGoogle(googleToken);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

// ==========================================
// Legacy Endpoints (Phone OTP)
// Preserved for backward compatibility
// ==========================================
authRouter.post("/otp/request", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { phoneNumber } = phoneOtpRequestSchema.parse(req.body);
    const result = await AuthService.requestOtp(phoneNumber);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

authRouter.post("/otp/verify", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { phoneNumber, otp } = phoneOtpVerifySchema.parse(req.body);
    const result = await AuthService.verifyOtp(phoneNumber, otp);
    res.json(result);
  } catch (error) {
    next(error);
  }
});
