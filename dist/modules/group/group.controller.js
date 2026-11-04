"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupRouter = void 0;
const express_1 = require("express");
const zod_1 = require("zod");
const expense_group_service_1 = require("./expense-group.service");
const group_member_service_1 = require("./group-member.service");
const shared_expense_service_1 = require("./shared-expense.service");
const balance_service_1 = require("./balance.service");
const settlement_service_1 = require("./settlement.service");
const auth_middleware_1 = require("../../middlewares/auth.middleware");
exports.groupRouter = (0, express_1.Router)();
exports.groupRouter.use(auth_middleware_1.authenticate);
// --- Validation Schemas ---
const createGroupSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "Name is required"),
    description: zod_1.z.string().optional(),
    currency: zod_1.z.string().optional(),
});
const updateGroupSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    currency: zod_1.z.string().optional(),
});
const inviteMemberSchema = zod_1.z.object({
    phoneNumber: zod_1.z.string().min(1, "Phone number is required"),
});
const createSharedExpenseSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, "Title is required"),
    description: zod_1.z.string().optional(),
    amount: zod_1.z.number().positive("Amount must be greater than zero"),
    currency: zod_1.z.string().optional(),
    paidByUserId: zod_1.z.string().uuid("Invalid paidByUserId"),
    splitType: zod_1.z.string().optional(),
    participantIds: zod_1.z.array(zod_1.z.string().uuid("Invalid participant ID")).min(1, "Participants required"),
});
const createSettlementSchema = zod_1.z.object({
    toUserId: zod_1.z.string().uuid("Invalid toUserId"),
    fromUserId: zod_1.z.string().uuid("Invalid fromUserId"),
    amount: zod_1.z.number().positive("Amount must be greater than zero"),
    paymentMethod: zod_1.z.string().optional(),
    note: zod_1.z.string().optional(),
    idempotencyKey: zod_1.z.string().optional(),
});
// --- Module D: Group Management ---
exports.groupRouter.post("/", async (req, res, next) => {
    try {
        const data = createGroupSchema.parse(req.body);
        const result = await expense_group_service_1.ExpenseGroupService.createGroup(req.user.id, data);
        res.status(201).json(result);
    }
    catch (error) {
        next(error);
    }
});
exports.groupRouter.get("/", async (req, res, next) => {
    try {
        const result = await expense_group_service_1.ExpenseGroupService.getMyGroups(req.user.id);
        res.json(result);
    }
    catch (error) {
        next(error);
    }
});
exports.groupRouter.get("/:groupId", async (req, res, next) => {
    try {
        const groupId = req.params.groupId;
        const result = await expense_group_service_1.ExpenseGroupService.getGroupDetails(groupId, req.user.id);
        res.json(result);
    }
    catch (error) {
        next(error);
    }
});
exports.groupRouter.patch("/:groupId", async (req, res, next) => {
    try {
        const groupId = req.params.groupId;
        const data = updateGroupSchema.parse(req.body);
        const result = await expense_group_service_1.ExpenseGroupService.updateGroup(groupId, req.user.id, data);
        res.json(result);
    }
    catch (error) {
        next(error);
    }
});
exports.groupRouter.delete("/:groupId", async (req, res, next) => {
    try {
        const groupId = req.params.groupId;
        await expense_group_service_1.ExpenseGroupService.archiveGroup(groupId, req.user.id);
        res.json({ success: true, message: "Group archived successfully" });
    }
    catch (error) {
        next(error);
    }
});
// --- Module E: Group Members and Invitations ---
exports.groupRouter.post("/:groupId/invitations", async (req, res, next) => {
    try {
        const groupId = req.params.groupId;
        const { phoneNumber } = inviteMemberSchema.parse(req.body);
        const result = await group_member_service_1.GroupMemberService.inviteMember(groupId, phoneNumber, req.user.id);
        res.status(201).json(result);
    }
    catch (error) {
        next(error);
    }
});
exports.groupRouter.get("/:groupId/members", async (req, res, next) => {
    try {
        const groupId = req.params.groupId;
        const result = await group_member_service_1.GroupMemberService.getGroupMembers(groupId, req.user.id);
        res.json(result);
    }
    catch (error) {
        next(error);
    }
});
exports.groupRouter.delete("/:groupId/members/:memberUserId", async (req, res, next) => {
    try {
        const groupId = req.params.groupId;
        const memberUserId = req.params.memberUserId;
        await group_member_service_1.GroupMemberService.removeMember(groupId, memberUserId, req.user.id);
        res.json({ success: true, message: "Member removed or left group successfully" });
    }
    catch (error) {
        next(error);
    }
});
// --- Module F: Shared Expenses ---
exports.groupRouter.post("/:groupId/expenses", async (req, res, next) => {
    try {
        const groupId = req.params.groupId;
        const data = createSharedExpenseSchema.parse(req.body);
        const result = await shared_expense_service_1.SharedExpenseService.createExpense(groupId, data, req.user.id);
        res.status(201).json(result);
    }
    catch (error) {
        next(error);
    }
});
exports.groupRouter.get("/:groupId/expenses", async (req, res, next) => {
    try {
        const groupId = req.params.groupId;
        const page = parseInt(req.query.page || "0", 10);
        const size = parseInt(req.query.size || "20", 10);
        const result = await shared_expense_service_1.SharedExpenseService.getGroupExpenses(groupId, page, size, req.user.id);
        res.json(result);
    }
    catch (error) {
        next(error);
    }
});
exports.groupRouter.get("/:groupId/expenses/:expenseId", async (req, res, next) => {
    try {
        const groupId = req.params.groupId;
        const expenseId = req.params.expenseId;
        const result = await shared_expense_service_1.SharedExpenseService.getExpenseDetails(groupId, expenseId, req.user.id);
        res.json(result);
    }
    catch (error) {
        next(error);
    }
});
exports.groupRouter.put("/:groupId/expenses/:expenseId", async (req, res, next) => {
    try {
        const groupId = req.params.groupId;
        const expenseId = req.params.expenseId;
        const data = createSharedExpenseSchema.parse(req.body);
        const result = await shared_expense_service_1.SharedExpenseService.updateExpense(groupId, expenseId, data, req.user.id);
        res.json(result);
    }
    catch (error) {
        next(error);
    }
});
exports.groupRouter.delete("/:groupId/expenses/:expenseId", async (req, res, next) => {
    try {
        const groupId = req.params.groupId;
        const expenseId = req.params.expenseId;
        await shared_expense_service_1.SharedExpenseService.deleteExpense(groupId, expenseId, req.user.id);
        res.json({ success: true, message: "Expense deleted successfully" });
    }
    catch (error) {
        next(error);
    }
});
// --- Module G: Balances ---
exports.groupRouter.get("/:groupId/balances", async (req, res, next) => {
    try {
        const groupId = req.params.groupId;
        const result = await balance_service_1.BalanceService.calculateGroupBalances(groupId, req.user.id);
        res.json(result);
    }
    catch (error) {
        next(error);
    }
});
// --- Module H: Settlements ---
exports.groupRouter.post("/:groupId/settlements", async (req, res, next) => {
    try {
        const groupId = req.params.groupId;
        const data = createSettlementSchema.parse(req.body);
        const result = await settlement_service_1.SettlementService.recordSettlement(groupId, data, req.user.id);
        res.status(201).json(result);
    }
    catch (error) {
        next(error);
    }
});
exports.groupRouter.get("/:groupId/settlements", async (req, res, next) => {
    try {
        const groupId = req.params.groupId;
        const page = parseInt(req.query.page || "0", 10);
        const size = parseInt(req.query.size || "20", 10);
        const result = await settlement_service_1.SettlementService.getGroupSettlements(groupId, page, size, req.user.id);
        res.json(result);
    }
    catch (error) {
        next(error);
    }
});
exports.groupRouter.post("/:groupId/settlements/:settlementId/confirm", async (req, res, next) => {
    try {
        const groupId = req.params.groupId;
        const settlementId = req.params.settlementId;
        const result = await settlement_service_1.SettlementService.confirmSettlement(groupId, settlementId, req.user.id);
        res.json(result);
    }
    catch (error) {
        next(error);
    }
});
exports.groupRouter.post("/:groupId/settlements/:settlementId/reject", async (req, res, next) => {
    try {
        const groupId = req.params.groupId;
        const settlementId = req.params.settlementId;
        const result = await settlement_service_1.SettlementService.rejectSettlement(groupId, settlementId, req.user.id);
        res.json(result);
    }
    catch (error) {
        next(error);
    }
});
