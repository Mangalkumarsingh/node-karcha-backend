import { Router, Request, Response, NextFunction } from "express";
import { z } from "zod";
import { AuthService } from "./auth.service";

export const authRouter = Router();

const otpRequestSchema = z.object({
  phoneNumber: z.string().min(1, "Phone number is required"),
});

const otpVerifySchema = z.object({
  phoneNumber: z.string().min(1, "Phone number is required"),
  otp: z.string().min(1, "OTP is required"),
});

const googleLoginSchema = z.object({
  googleToken: z.string().min(1, "Google ID token required"),
});

authRouter.post("/otp/request", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { phoneNumber } = otpRequestSchema.parse(req.body);
    const result = await AuthService.requestOtp(phoneNumber);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

authRouter.post("/otp/verify", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { phoneNumber, otp } = otpVerifySchema.parse(req.body);
    const result = await AuthService.verifyOtp(phoneNumber, otp);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

authRouter.post("/google", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { googleToken } = googleLoginSchema.parse(req.body);
    const result = await AuthService.loginWithGoogle(googleToken);
    res.json(result);
  } catch (error) {
    next(error);
  }
});
