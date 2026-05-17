export type AppErrorCode =
  | 'NETWORK_ERROR'
  | 'HTTP_ERROR'
  | 'TIMEOUT_ERROR'
  | 'VALIDATION_ERROR'
  | 'UNKNOWN_ERROR';

export class AppError extends Error {
  code: AppErrorCode;
  status?: number;
  cause?: unknown;
  isOperational: boolean;

  constructor({
    message,
    code,
    status,
    cause,
    isOperational = true,
  }: {
    message: string;
    code: AppErrorCode;
    status?: number;
    cause?: unknown;
    isOperational?: boolean;
  }) {
    super(message);

    this.name = 'AppError';
    this.code = code;
    this.status = status;
    this.cause = cause;
    this.isOperational = isOperational;
  }
}
