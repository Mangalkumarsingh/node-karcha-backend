import { Router, Request, Response, NextFunction } from "express";
import { z } from "zod";
import { ExpenseGroupService } from "./expense-group.service";
import { GroupMemberService } from "./group-member.service";
import { SharedExpenseService } from "./shared-expense.service";
import { BalanceService } from "./balance.service";
import { SettlementService } from "./settlement.service";
import { authenticate } from "../../middlewares/auth.middleware";

export const groupRouter = Router();

groupRouter.use(authenticate);

// --- Validation Schemas ---
const createGroupSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  currency: z.string().optional(),
});

const updateGroupSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  currency: z.string().optional(),
});

const inviteMemberSchema = z.object({
  phoneNumber: z.string().min(1, "Phone number is required"),
});

const createSharedExpenseSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  amount: z.number().positive("Amount must be greater than zero"),
  currency: z.string().optional(),
  paidByUserId: z.string().uuid("Invalid paidByUserId"),
  splitType: z.string().optional(),
  participantIds: z.array(z.string().uuid("Invalid participant ID")).min(1, "Participants required"),
});

const createSettlementSchema = z.object({
  toUserId: z.string().uuid("Invalid toUserId"),
  fromUserId: z.string().uuid("Invalid fromUserId"),
  amount: z.number().positive("Amount must be greater than zero"),
  paymentMethod: z.string().optional(),
  note: z.string().optional(),
  idempotencyKey: z.string().optional(),
});

// --- Module D: Group Management ---

groupRouter.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = createGroupSchema.parse(req.body);
    const result = await ExpenseGroupService.createGroup(req.user!.id, data);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

groupRouter.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ExpenseGroupService.getMyGroups(req.user!.id);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

groupRouter.get("/:groupId", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const groupId = req.params.groupId as string;
    const result = await ExpenseGroupService.getGroupDetails(groupId, req.user!.id);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

groupRouter.patch("/:groupId", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const groupId = req.params.groupId as string;
    const data = updateGroupSchema.parse(req.body);
    const result = await ExpenseGroupService.updateGroup(groupId, req.user!.id, data);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

groupRouter.delete("/:groupId", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const groupId = req.params.groupId as string;
    await ExpenseGroupService.archiveGroup(groupId, req.user!.id);
    res.json({ success: true, message: "Group archived successfully" });
  } catch (error) {
    next(error);
  }
});

// --- Module E: Group Members and Invitations ---

groupRouter.post("/:groupId/invitations", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const groupId = req.params.groupId as string;
    const { phoneNumber } = inviteMemberSchema.parse(req.body);
    const result = await GroupMemberService.inviteMember(groupId, phoneNumber, req.user!.id);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

groupRouter.get("/:groupId/members", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const groupId = req.params.groupId as string;
    const result = await GroupMemberService.getGroupMembers(groupId, req.user!.id);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

groupRouter.delete("/:groupId/members/:memberUserId", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const groupId = req.params.groupId as string;
    const memberUserId = req.params.memberUserId as string;
    await GroupMemberService.removeMember(groupId, memberUserId, req.user!.id);
    res.json({ success: true, message: "Member removed or left group successfully" });
  } catch (error) {
    next(error);
  }
});

// --- Module F: Shared Expenses ---

groupRouter.post("/:groupId/expenses", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const groupId = req.params.groupId as string;
    const data = createSharedExpenseSchema.parse(req.body);
    const result = await SharedExpenseService.createExpense(groupId, data, req.user!.id);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

groupRouter.get("/:groupId/expenses", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const groupId = req.params.groupId as string;
    const page = parseInt((req.query.page as string) || "0", 10);
    const size = parseInt((req.query.size as string) || "20", 10);
    const result = await SharedExpenseService.getGroupExpenses(groupId, page, size, req.user!.id);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

groupRouter.get("/:groupId/expenses/:expenseId", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const groupId = req.params.groupId as string;
    const expenseId = req.params.expenseId as string;
    const result = await SharedExpenseService.getExpenseDetails(groupId, expenseId, req.user!.id);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

groupRouter.put("/:groupId/expenses/:expenseId", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const groupId = req.params.groupId as string;
    const expenseId = req.params.expenseId as string;
    const data = createSharedExpenseSchema.parse(req.body);
    const result = await SharedExpenseService.updateExpense(groupId, expenseId, data, req.user!.id);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

groupRouter.delete("/:groupId/expenses/:expenseId", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const groupId = req.params.groupId as string;
    const expenseId = req.params.expenseId as string;
    await SharedExpenseService.deleteExpense(groupId, expenseId, req.user!.id);
    res.json({ success: true, message: "Expense deleted successfully" });
  } catch (error) {
    next(error);
  }
});

// --- Module G: Balances ---

groupRouter.get("/:groupId/balances", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const groupId = req.params.groupId as string;
    const result = await BalanceService.calculateGroupBalances(groupId, req.user!.id);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

// --- Module H: Settlements ---

groupRouter.post("/:groupId/settlements", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const groupId = req.params.groupId as string;
    const data = createSettlementSchema.parse(req.body);
    const result = await SettlementService.recordSettlement(groupId, data, req.user!.id);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

groupRouter.get("/:groupId/settlements", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const groupId = req.params.groupId as string;
    const page = parseInt((req.query.page as string) || "0", 10);
    const size = parseInt((req.query.size as string) || "20", 10);
    const result = await SettlementService.getGroupSettlements(groupId, page, size, req.user!.id);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

groupRouter.post("/:groupId/settlements/:settlementId/confirm", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const groupId = req.params.groupId as string;
    const settlementId = req.params.settlementId as string;
    const result = await SettlementService.confirmSettlement(groupId, settlementId, req.user!.id);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

groupRouter.post("/:groupId/settlements/:settlementId/reject", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const groupId = req.params.groupId as string;
    const settlementId = req.params.settlementId as string;
    const result = await SettlementService.rejectSettlement(groupId, settlementId, req.user!.id);
    res.json(result);
  } catch (error) {
    next(error);
  }
});
