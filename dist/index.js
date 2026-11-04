"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const auth_controller_1 = require("./modules/auth/auth.controller");
const user_controller_1 = require("./modules/user/user.controller");
const expense_controller_1 = require("./modules/expense/expense.controller");
const group_controller_1 = require("./modules/group/group.controller");
const invitation_controller_1 = require("./modules/invitation.controller");
const errorHandler_1 = require("./errors/errorHandler");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8080;
app.use((0, cors_1.default)({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Authorization", "Content-Type", "Accept", "X-Requested-With"],
}));
app.use(express_1.default.json());
// Routes matching Spring Boot API specifications
app.use("/api/v1/auth", auth_controller_1.authRouter);
app.use("/api/v1/users", user_controller_1.userRouter);
app.use("/api/v1/expenses", expense_controller_1.expenseRouter);
app.use("/api/v1/groups", group_controller_1.groupRouter);
app.use("/api/v1/invitations", invitation_controller_1.invitationRouter);
// Health check
app.get("/health", (req, res) => {
    res.json({ status: "UP", timestamp: new Date().toISOString() });
});
// Centralized Error Handler (Matching Spring Boot GlobalExceptionHandler)
app.use(errorHandler_1.errorHandler);
if (process.env.NODE_ENV !== "test") {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}
exports.default = app;
