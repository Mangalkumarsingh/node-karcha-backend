"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const AppError_1 = require("../errors/AppError");
const JWT_SECRET = process.env.JWT_SECRET || "default-secret-key-32-chars-long";
const JWT_ISSUER = process.env.JWT_ISSUER || "expense-app";
const JWT_EXPIRES_IN = 900; // 15 mins (seconds)
class TokenService {
    static generateAccessToken(userId) {
        const token = jsonwebtoken_1.default.sign({
            sub: userId,
            userId: userId,
        }, JWT_SECRET, {
            issuer: JWT_ISSUER,
            expiresIn: JWT_EXPIRES_IN,
        });
        return {
            accessToken: token,
            expiresIn: JWT_EXPIRES_IN,
        };
    }
    static verifyAccessToken(token) {
        try {
            const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET, {
                issuer: JWT_ISSUER,
            });
            if (!decoded.sub && !decoded.userId) {
                throw new AppError_1.AppError(401, "Invalid JWT subject");
            }
            return {
                sub: decoded.sub || decoded.userId,
                userId: decoded.userId || decoded.sub,
            };
        }
        catch (err) {
            throw new AppError_1.AppError(401, "Authentication required");
        }
    }
}
exports.TokenService = TokenService;
