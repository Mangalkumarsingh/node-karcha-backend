"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
class AppError extends Error {
    statusCode;
    error;
    validationErrors;
    constructor(statusCode, message, error, validationErrors) {
        super(message);
        this.statusCode = statusCode;
        this.error = error || getStatusText(statusCode);
        this.validationErrors = validationErrors;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.AppError = AppError;
function getStatusText(statusCode) {
    switch (statusCode) {
        case 400: return "Bad Request";
        case 401: return "Unauthorized";
        case 403: return "Forbidden";
        case 404: return "Not Found";
        case 409: return "Conflict";
        case 429: return "Too Many Requests";
        case 500: return "Internal Server Error";
        default: return "Error";
    }
}
