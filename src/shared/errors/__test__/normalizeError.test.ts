import { AppError } from '../AppError';
import { normalizeError } from '../normalizeError';

describe('normalizeError', () => {
  it('returns AppError when timeout occurs', () => {
    const error = new DOMException('aborted', 'AbortError');

    const result = normalizeError(error);

    expect(result).toBeInstanceOf(AppError);
    expect(result.message).toContain('Tempo de requisição excedido');
  });
});
