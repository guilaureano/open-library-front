import { AppError } from '@/shared/errors/AppError';
import { logger } from '@/shared/lib/logger/logger';

type HttpOptions = RequestInit & {
  timeout?: number;
};

export async function httpClient<T>(
  url: string,
  options: HttpOptions = {},
): Promise<T> {
  const { timeout = 10000, ...fetchOptions } = options;

  const controller = new AbortController();

  const timer = setTimeout(() => {
    controller.abort();
  }, timeout);

  try {
    const response = await fetch(url, {
      ...fetchOptions,
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        ...fetchOptions.headers,
      },
    });

    if (!response.ok) {
      logger.error('HTTP ERROR', {
        url,
        status: response.status,
      });

      throw new AppError({
        code: 'HTTP_ERROR',
        status: response.status,
        message: getHttpMessage(response.status),
      });
    }

    return response.json();
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
