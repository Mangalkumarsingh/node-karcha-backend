"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expenseRouter = void 0;
const express_1 = require("express");
const zod_1 = require("zod");
const expense_service_1 = require("./expense.service");
const auth_middleware_1 = require("../../middlewares/auth.middleware");
exports.expenseRouter = (0, express_1.Router)();
const expenseSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, "Title is required"),
    amount: zod_1.z.number().positive("Amount must be greater than zero"),
});
exports.expenseRouter.use(auth_middleware_1.authenticate);
exports.expenseRouter.post("/", async (req, res, next) => {
    try {
        const data = expenseSchema.parse(req.body);
        const expense = await expense_service_1.ExpenseService.createExpense(req.user.id, data);
        res.status(201).json(expense);
    }
    catch (error) {
        next(error);
    }
});
exports.expenseRouter.get("/", async (req, res, next) => {
    try {
        const expenses = await expense_service_1.ExpenseService.getAllExpenses(req.user.id);
        res.json(expenses);
    }
    catch (error) {
        next(error);
    }
});
exports.expenseRouter.get("/:id", async (req, res, next) => {
    try {
        const id = req.params.id;
        const expense = await expense_service_1.ExpenseService.getExpenseById(id, req.user.id);
        res.json(expense);
    }
    catch (error) {
        next(error);
    }
});
exports.expenseRouter.put("/:id", async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = expenseSchema.parse(req.body);
        const updated = await expense_service_1.ExpenseService.updateExpense(id, req.user.id, data);
        res.json(updated);
    }
    catch (error) {
        next(error);
    }
});
exports.expenseRouter.delete("/:id", async (req, res, next) => {
    try {
        const id = req.params.id;
        await expense_service_1.ExpenseService.deleteExpense(id, req.user.id);
        res.status(204).send();
    }
    catch (error) {
        next(error);
    }
});
