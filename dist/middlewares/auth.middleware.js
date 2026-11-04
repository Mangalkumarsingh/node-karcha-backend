"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const token_service_1 = require("../utils/token.service");
const AppError_1 = require("../errors/AppError");
const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return next(new AppError_1.AppError(401, "Authentication required"));
    }
    const token = authHeader.split(" ")[1];
    try {
        const verified = token_service_1.TokenService.verifyAccessToken(token);
        req.user = { id: verified.userId };
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.authenticate = authenticate;
