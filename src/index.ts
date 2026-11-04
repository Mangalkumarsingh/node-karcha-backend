import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { authRouter } from "./modules/auth/auth.controller";
import { userRouter } from "./modules/user/user.controller";
import { expenseRouter } from "./modules/expense/expense.controller";
import { groupRouter } from "./modules/group/group.controller";
import { invitationRouter } from "./modules/invitation.controller";
import { errorHandler } from "./errors/errorHandler";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors({
  origin: "*",
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Authorization", "Content-Type", "Accept", "X-Requested-With"],
}));

app.use(express.json());

// Routes matching Spring Boot API specifications
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/expenses", expenseRouter);
app.use("/api/v1/groups", groupRouter);
app.use("/api/v1/invitations", invitationRouter);

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "UP", timestamp: new Date().toISOString() });
});

// Centralized Error Handler (Matching Spring Boot GlobalExceptionHandler)
app.use(errorHandler);

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export default app;
