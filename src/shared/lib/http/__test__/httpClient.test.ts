import { httpClient } from '../httpClient';

describe('httpClient', () => {
  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  it('returns parsed json', async () => {
    global.fetch = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    );

    const result = await httpClient('/test');

    expect(result).toEqual({ success: true });
  });

  it('throws AppError on http failure', async () => {
    global.fetch = vi
      .fn()
      .mockResolvedValue(new Response(null, { status: 404 }));

    await expect(httpClient('/test')).rejects.toMatchObject({
      code: 'HTTP_ERROR',
      status: 404,
    });
  });

  it('aborts request on timeout', async () => {
    vi.useFakeTimers();

    global.fetch = vi.fn((_input, init) => {
      return new Promise<Response>((_, reject) => {
        init?.signal?.addEventListener('abort', () => {
          reject(new DOMException('Aborted', 'AbortError'));
        });
      });
    });

    const promise = httpClient('/test', { timeout: 10 });

    vi.advanceTimersByTime(20);

    await expect(promise).rejects.toThrow('Aborted');

    vi.useRealTimers();
  });

  it.each([
    [400, 'Requisição inválida'],
    [401, 'Não autorizado'],
    [404, 'Recurso não encontrado'],
    [500, 'Erro interno do servidor'],
    [418, 'Erro ao processar requisição'],
  ])('maps status %s correctly', async (status, message) => {
    global.fetch = vi.fn().mockResolvedValue(new Response(null, { status }));

    await expect(httpClient('/test')).rejects.toMatchObject({
      code: 'HTTP_ERROR',
      status,
      message,
    });
  });
});
