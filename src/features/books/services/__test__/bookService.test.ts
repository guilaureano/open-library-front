import { AppError } from '@/shared/errors/AppError';
import * as api from '../../api/searchBooks';
import { getBooks } from '../bookService';

describe('bookService', () => {
  it('normalizes errors', async () => {
    vi.spyOn(api, 'searchBooks').mockRejectedValue(new Error('network'));

    await expect(getBooks('harry')).rejects.toBeInstanceOf(AppError);
  });
});
