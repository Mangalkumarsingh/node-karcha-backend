import nodemailer, { Transporter } from "nodemailer";
import { Resend } from "resend";

export interface SendOtpEmailParams {
  to: string;
  otp: string;
  expiresInMinutes: number;
}

export class EmailService {
  private static resendClient: Resend | null = null;
  private static smtpTransporter: Transporter | null = null;

  private static getResendClient(): Resend | null {
    if (this.resendClient) return this.resendClient;
    const apiKey = process.env.RESEND_API_KEY || process.env.EMAIL_PROVIDER_API_KEY;
    if (apiKey && apiKey.startsWith("re_")) {
      this.resendClient = new Resend(apiKey);
      return this.resendClient;
    }
    return null;
  }

  private static getSmtpTransporter(): Transporter | null {
    if (this.smtpTransporter) return this.smtpTransporter;

    const host = process.env.SMTP_HOST;
    const port = parseInt(process.env.SMTP_PORT || "587", 10);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS || process.env.EMAIL_PROVIDER_API_KEY;

    if (host && user && pass) {
      this.smtpTransporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: { user, pass },
      });
      return this.smtpTransporter;
    }

    return null;
  }

  public static async sendOtpEmail({ to, otp, expiresInMinutes }: SendOtpEmailParams): Promise<void> {
    const fromAddress = process.env.EMAIL_FROM_ADDRESS || "no-reply@kharcha.app";
    const appName = "Kharcha";
    const subject = `Your ${appName} Verification Code: ${otp}`;

    const htmlBody = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>${appName} Verification Code</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f6f8; margin: 0; padding: 20px; }
            .container { max-width: 500px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); }
            .header { background: #208AEF; padding: 24px; text-align: center; color: #ffffff; }
            .header h1 { margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.5px; }
            .content { padding: 32px 24px; text-align: center; }
            .content p { color: #4a5568; font-size: 16px; line-height: 24px; margin: 0 0 20px; }
            .code-box { background: #f0f7ff; border: 2px dashed #208AEF; border-radius: 8px; padding: 18px; margin: 24px 0; font-size: 32px; font-weight: 800; letter-spacing: 8px; color: #1a56db; }
            .footer { background: #fafbfc; border-top: 1px solid #edf2f7; padding: 20px; text-align: center; font-size: 13px; color: #718096; }
            .warning { font-size: 13px; color: #e53e3e; margin-top: 16px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>${appName}</h1>
            </div>
            <div class="content">
              <h2>Verify your email address</h2>
              <p>Use the 6-digit verification code below to complete your login or registration:</p>
              <div class="code-box">${otp}</div>
              <p>This code will expire in <strong>${expiresInMinutes} minutes</strong>.</p>
              <p class="warning">Never share this code with anyone. Kharcha support will never ask for your code.</p>
            </div>
            <div class="footer">
              If you didn't request this code, you can safely ignore this email.
            </div>
          </div>
        </body>
      </html>
    `;

    const textBody = `Your ${appName} verification code is: ${otp}. It will expire in ${expiresInMinutes} minutes. If you did not request this code, please ignore this email.`;

    // Attempt delivery via Resend first if configured
    const resend = this.getResendClient();
    if (resend) {
      try {
        await resend.emails.send({
          from: fromAddress,
          to,
          subject,
          html: htmlBody,
          text: textBody,
        });
        return;
      } catch (error) {
        console.error("[EmailService] Resend send error:", error);
      }
    }

    // Attempt delivery via SMTP transporter if configured
    const transporter = this.getSmtpTransporter();
    if (transporter) {
      try {
        await transporter.sendMail({
          from: `"${appName}" <${fromAddress}>`,
          to,
          subject,
          text: textBody,
          html: htmlBody,
        });
        return;
      } catch (error) {
        console.error("[EmailService] SMTP send error:", error);
      }
    }

    // Fallback in development or when no provider configured: log safely to console
    if (process.env.NODE_ENV !== "production") {
      console.log(`[EmailService-DEV] Simulation OTP for ${to}: ${otp}`);
    }
  }
}
