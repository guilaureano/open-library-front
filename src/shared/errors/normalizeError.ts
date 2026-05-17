import { AppError } from './AppError';

export function normalizeError(error: unknown): AppError {
  if (error instanceof AppError) {
    return error;
  }

  if (error instanceof DOMException) {
    return new AppError({
      message: 'Tempo de requisição excedido',
      code: 'TIMEOUT_ERROR',
      cause: error,
    });
  }

  if (error instanceof TypeError) {
    return new AppError({
      message: 'Não foi possível conectar ao servidor',
      code: 'NETWORK_ERROR',
      cause: error,
    });
  }

  return new AppError({
    message: 'Erro inesperado',
    code: 'UNKNOWN_ERROR',
    cause: error,
    isOperational: false,
  });
}
