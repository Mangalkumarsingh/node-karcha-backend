import { Request, Response, NextFunction } from "express";
import { TokenService } from "../utils/token.service";
import { AppError } from "../errors/AppError";

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
      };
    }
  }
}

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(new AppError(401, "Authentication required"));
  }

  const token = authHeader.split(" ")[1];
  try {
    const verified = TokenService.verifyAccessToken(token);
    req.user = { id: verified.userId };
    next();
  } catch (error) {
    next(error);
  }
};
