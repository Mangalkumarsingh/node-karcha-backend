export class EmailUtil {
  public static normalizeEmail(email: string): string {
    if (!email) {
      return "";
    }
    return email.trim().toLowerCase();
  }

  public static isValidEmail(email: string): boolean {
    if (!email) return false;
    // Standard RFC 5322 regex approximation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email.trim());
  }
}
