import { Router, Request, Response, NextFunction } from "express";
import { z } from "zod";
import { UserService } from "./user.service";
import { authenticate } from "../../middlewares/auth.middleware";
import { GroupMemberService } from "../group/group-member.service";

export const userRouter = Router();

const updateProfileSchema = z.object({
  name: z.string().optional(),
  profileImageUrl: z.string().optional(),
});

userRouter.use(authenticate);

userRouter.get("/me", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const profile = await UserService.getProfile(req.user!.id);
    res.json(profile);
  } catch (error) {
    next(error);
  }
});

userRouter.patch("/me", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = updateProfileSchema.parse(req.body);
    const updated = await UserService.updateProfile(req.user!.id, data);
    res.json(updated);
  } catch (error) {
    next(error);
  }
});

userRouter.get("/me/invitations", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const invitations = await GroupMemberService.getMyPendingInvitations(req.user!.id);
    res.json(invitations);
  } catch (error) {
    next(error);
  }
});
