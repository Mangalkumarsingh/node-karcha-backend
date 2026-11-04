"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invitationRouter = void 0;
const express_1 = require("express");
const group_member_service_1 = require("./group/group-member.service");
const auth_middleware_1 = require("../middlewares/auth.middleware");
exports.invitationRouter = (0, express_1.Router)();
exports.invitationRouter.use(auth_middleware_1.authenticate);
exports.invitationRouter.post("/:invitationId/accept", async (req, res, next) => {
    try {
        const invitationId = req.params.invitationId;
        await group_member_service_1.GroupMemberService.acceptInvitation(invitationId, req.user.id);
        res.json({ success: true, message: "Invitation accepted successfully" });
    }
    catch (error) {
        next(error);
    }
});
exports.invitationRouter.post("/:invitationId/reject", async (req, res, next) => {
    try {
        const invitationId = req.params.invitationId;
        await group_member_service_1.GroupMemberService.rejectInvitation(invitationId, req.user.id);
        res.json({ success: true, message: "Invitation rejected" });
    }
    catch (error) {
        next(error);
    }
});
