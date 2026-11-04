export class AppError extends Error {
  public statusCode: number;
  public error: string;
  public validationErrors?: Record<string, string>;

  constructor(statusCode: number, message: string, error?: string, validationErrors?: Record<string, string>) {
    super(message);
    this.statusCode = statusCode;
    this.error = error || getStatusText(statusCode);
    this.validationErrors = validationErrors;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

function getStatusText(statusCode: number): string {
  switch (statusCode) {
    case 400: return "Bad Request";
    case 401: return "Unauthorized";
    case 403: return "Forbidden";
    case 404: return "Not Found";
    case 409: return "Conflict";
    case 429: return "Too Many Requests";
    case 500: return "Internal Server Error";
    default: return "Error";
  }
}
