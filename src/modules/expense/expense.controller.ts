import { Router, Request, Response, NextFunction } from "express";
import { z } from "zod";
import { ExpenseService } from "./expense.service";
import { authenticate } from "../../middlewares/auth.middleware";

export const expenseRouter = Router();

const expenseSchema = z.object({
  title: z.string().min(1, "Title is required"),
  amount: z.number().positive("Amount must be greater than zero"),
});

expenseRouter.use(authenticate);

expenseRouter.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = expenseSchema.parse(req.body);
    const expense = await ExpenseService.createExpense(req.user!.id, data);
    res.status(201).json(expense);
  } catch (error) {
    next(error);
  }
});

expenseRouter.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const expenses = await ExpenseService.getAllExpenses(req.user!.id);
    res.json(expenses);
  } catch (error) {
    next(error);
  }
});

expenseRouter.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id as string;
    const expense = await ExpenseService.getExpenseById(id, req.user!.id);
    res.json(expense);
  } catch (error) {
    next(error);
  }
});

expenseRouter.put("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id as string;
    const data = expenseSchema.parse(req.body);
    const updated = await ExpenseService.updateExpense(id, req.user!.id, data);
    res.json(updated);
  } catch (error) {
    next(error);
  }
});

expenseRouter.delete("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id as string;
    await ExpenseService.deleteExpense(id, req.user!.id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
});
