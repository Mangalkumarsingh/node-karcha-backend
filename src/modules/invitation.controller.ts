import { Router, Request, Response, NextFunction } from "express";
import { GroupMemberService } from "./group/group-member.service";
import { authenticate } from "../middlewares/auth.middleware";

export const invitationRouter = Router();

invitationRouter.use(authenticate);

invitationRouter.post("/:invitationId/accept", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const invitationId = req.params.invitationId as string;
    await GroupMemberService.acceptInvitation(invitationId, req.user!.id);
    res.json({ success: true, message: "Invitation accepted successfully" });
  } catch (error) {
    next(error);
  }
});

invitationRouter.post("/:invitationId/reject", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const invitationId = req.params.invitationId as string;
    await GroupMemberService.rejectInvitation(invitationId, req.user!.id);
    res.json({ success: true, message: "Invitation rejected" });
  } catch (error) {
    next(error);
  }
});
