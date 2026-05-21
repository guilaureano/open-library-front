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

  it('normalizes unknown errors', () => {
    const result = normalizeError(new Error('boom'));

    expect(result).toBeInstanceOf(AppError);
  });

  it('handles non-error values', () => {
    const result = normalizeError('oops');

    expect(result).toBeInstanceOf(AppError);
  });
});
