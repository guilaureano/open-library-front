import { AppError } from '../AppError';
import { normalizeError } from '../normalizeError';

describe('normalizeError', () => {
  it('handles AbortError timeout', () => {
    const result = normalizeError(new DOMException('aborted', 'AbortError'));

    expect(result).toBeInstanceOf(AppError);
    expect(result.message).toBeTruthy();
  });

  it('keeps AppError intact', () => {
    const appError = new AppError({
      message: 'Custom error',
      code: 'HTTP_ERROR',
      status: 400,
    });

    const result = normalizeError(appError);

    expect(result).toBe(appError);
  });

  it('returns AppError when network error occurs', () => {
    const error = new TypeError('Failed to fetch');

    const result = normalizeError(error);

    expect(result).toBeInstanceOf(AppError);
    expect(result.code).toBe('NETWORK_ERROR');
    expect(result.message).toBe('Não foi possível conectar ao servidor');
    expect(result.cause).toBe(error);
  });

  it('normalizes native Error', () => {
    const result = normalizeError(new Error('boom'));

    expect(result).toBeInstanceOf(AppError);
    expect(result.code).toBe('UNKNOWN_ERROR');
  });

  it('handles non-error values', () => {
    const result = normalizeError('oops');

    expect(result).toBeInstanceOf(AppError);
    expect(result.code).toBe('UNKNOWN_ERROR');
  });
});
