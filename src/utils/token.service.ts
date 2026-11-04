import jwt from "jsonwebtoken";
import { AppError } from "../errors/AppError";

const JWT_SECRET = process.env.JWT_SECRET || "default-secret-key-32-chars-long";
const JWT_ISSUER = process.env.JWT_ISSUER || "expense-app";
const JWT_EXPIRES_IN = 900; // 15 mins (seconds)

export class TokenService {
  public static generateAccessToken(userId: string): { accessToken: string; expiresIn: number } {
    const token = jwt.sign(
      {
        sub: userId,
        userId: userId,
      },
      JWT_SECRET,
      {
        issuer: JWT_ISSUER,
        expiresIn: JWT_EXPIRES_IN,
      }
    );

    return {
      accessToken: token,
      expiresIn: JWT_EXPIRES_IN,
    };
  }

  public static verifyAccessToken(token: string): { sub: string; userId: string } {
    try {
      const decoded = jwt.verify(token, JWT_SECRET, {
        issuer: JWT_ISSUER,
      }) as any;

      if (!decoded.sub && !decoded.userId) {
        throw new AppError(401, "Invalid JWT subject");
      }

      return {
        sub: decoded.sub || decoded.userId,
        userId: decoded.userId || decoded.sub,
      };
    } catch (err: any) {
      throw new AppError(401, "Authentication required");
    }
  }
}
