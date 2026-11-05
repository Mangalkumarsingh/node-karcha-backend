"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const zod_1 = require("zod");
const client_1 = require("../generated/client");
const AppError_1 = require("./AppError");
const errorHandler = (err, req, res, next) => {
    const timestamp = new Date().toISOString();
    if (err instanceof AppError_1.AppError) {
        return res.status(err.statusCode).json({
            status: err.statusCode,
            error: err.error,
            message: err.message,
            timestamp,
            ...(err.validationErrors ? { validationErrors: err.validationErrors } : {}),
        });
    }
    if (err instanceof zod_1.ZodError) {
        const validationErrors = {};
        for (const issue of err.issues) {
            const field = issue.path.join(".");
            validationErrors[field] = issue.message;
        }
        return res.status(400).json({
            status: 400,
            error: "Bad Request",
            message: "Validation failed",
            validationErrors,
            timestamp,
        });
    }
    // Handle invalid UUID or not found from PostgreSQL/Prisma
    if (err instanceof client_1.Prisma.PrismaClientKnownRequestError) {
        if (err.code === "P2023" || err.code === "22P02") {
            return res.status(400).json({
                status: 400,
                error: "Bad Request",
                message: "Invalid UUID format or parameter",
                timestamp,
            });
        }
        if (err.code === "P2025") {
            return res.status(404).json({
                status: 404,
                error: "Not Found",
                message: "Resource not found",
                timestamp,
            });
        }
    }
    // Postgres invalid text representation for UUID
    if (err.message && (err.message.includes("invalid input syntax for type uuid") || err.message.includes("malformed UUID"))) {
        return res.status(400).json({
            status: 400,
            error: "Bad Request",
            message: "Invalid UUID format",
            timestamp,
        });
    }
    console.error("Unhandled error:", err);
    return res.status(500).json({
        status: 500,
        error: "Internal Server Error",
        message: err.message || "An unexpected error occurred",
        timestamp,
    });
};
exports.errorHandler = errorHandler;
