import { AppError } from '@/shared/errors/AppError';
import { logger } from '../logger/logger';

type HttpOptions = RequestInit & {
  timeout?: number;
};

export async function httpClient<T>(
  url: string,
  options: HttpOptions = {},
): Promise<T> {
  const { timeout = 15000, ...fetchOptions } = options;

  const controller = new AbortController();

  const timer = setTimeout(() => {
    logger.error('HTTP TIMEOUT', {
      url,
      timeout,
    });

    controller.abort();
  }, timeout);

  try {
    logger.info('HTTP REQUEST', {
      url,
    });

    const response = await fetch(url, {
      ...fetchOptions,
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        ...fetchOptions.headers,
      },
    });

    logger.info('HTTP RESPONSE', {
      url,
      status: response.status,
    });

    if (!response.ok) {
      throw new AppError({
        code: 'HTTP_ERROR',
        status: response.status,
        message: getHttpMessage(response.status),
      });
    }

    return response.json();
  } catch (error) {
    logger.error('HTTP CLIENT ERROR', {
      url,
      error,
    });

    throw error;
  } finally {
    clearTimeout(timer);
  }
}

function getHttpMessage(status: number) {
  switch (status) {
    case 400:
      return 'Requisição inválida';
    case 401:
      return 'Não autorizado';
    case 404:
      return 'Recurso não encontrado';
    case 500:
      return 'Erro interno do servidor';
    default:
      return 'Erro ao processar requisição';
  }
}
