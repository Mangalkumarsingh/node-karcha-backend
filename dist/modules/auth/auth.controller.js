"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const zod_1 = require("zod");
const auth_service_1 = require("./auth.service");
exports.authRouter = (0, express_1.Router)();
const otpRequestSchema = zod_1.z.object({
    phoneNumber: zod_1.z.string().min(1, "Phone number is required"),
});
const otpVerifySchema = zod_1.z.object({
    phoneNumber: zod_1.z.string().min(1, "Phone number is required"),
    otp: zod_1.z.string().min(1, "OTP is required"),
});
const googleLoginSchema = zod_1.z.object({
    googleToken: zod_1.z.string().min(1, "Google ID token required"),
});
exports.authRouter.post("/otp/request", async (req, res, next) => {
    try {
        const { phoneNumber } = otpRequestSchema.parse(req.body);
        const result = await auth_service_1.AuthService.requestOtp(phoneNumber);
        res.json(result);
    }
    catch (error) {
        next(error);
    }
});
exports.authRouter.post("/otp/verify", async (req, res, next) => {
    try {
        const { phoneNumber, otp } = otpVerifySchema.parse(req.body);
        const result = await auth_service_1.AuthService.verifyOtp(phoneNumber, otp);
        res.json(result);
    }
    catch (error) {
        next(error);
    }
});
exports.authRouter.post("/google", async (req, res, next) => {
    try {
        const { googleToken } = googleLoginSchema.parse(req.body);
        const result = await auth_service_1.AuthService.loginWithGoogle(googleToken);
        res.json(result);
    }
    catch (error) {
        next(error);
    }
});
