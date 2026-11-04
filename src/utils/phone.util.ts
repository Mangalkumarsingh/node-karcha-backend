import { AppError } from "../errors/AppError";

export class PhoneUtil {
  public static normalizePhoneNumber(rawPhone?: string): string {
    if (!rawPhone || !rawPhone.trim()) {
      throw new AppError(400, "Phone number is required");
    }

    let cleaned = rawPhone.replace(/[\s\-()]/g, "");

    if (!cleaned.startsWith("+")) {
      if (cleaned.length === 10 && /^\d{10}$/.test(cleaned)) {
        cleaned = "+91" + cleaned;
      } else if (cleaned.length === 12 && cleaned.startsWith("91") && /^\d{12}$/.test(cleaned)) {
        cleaned = "+" + cleaned;
      } else {
        cleaned = "+" + cleaned;
      }
    }

    if (!/^\+[1-9]\d{6,14}$/.test(cleaned)) {
      throw new AppError(
        400,
        "Invalid phone number format. Please provide a valid E.164 phone number (e.g., +919876543210)"
      );
    }

    return cleaned;
  }
}
