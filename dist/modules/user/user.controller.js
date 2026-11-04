"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const zod_1 = require("zod");
const user_service_1 = require("./user.service");
const auth_middleware_1 = require("../../middlewares/auth.middleware");
const group_member_service_1 = require("../group/group-member.service");
exports.userRouter = (0, express_1.Router)();
const updateProfileSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    profileImageUrl: zod_1.z.string().optional(),
});
exports.userRouter.use(auth_middleware_1.authenticate);
exports.userRouter.get("/me", async (req, res, next) => {
    try {
        const profile = await user_service_1.UserService.getProfile(req.user.id);
        res.json(profile);
    }
    catch (error) {
        next(error);
    }
});
exports.userRouter.patch("/me", async (req, res, next) => {
    try {
        const data = updateProfileSchema.parse(req.body);
        const updated = await user_service_1.UserService.updateProfile(req.user.id, data);
        res.json(updated);
    }
    catch (error) {
        next(error);
    }
});
exports.userRouter.get("/me/invitations", async (req, res, next) => {
    try {
        const invitations = await group_member_service_1.GroupMemberService.getMyPendingInvitations(req.user.id);
        res.json(invitations);
    }
    catch (error) {
        next(error);
    }
});
