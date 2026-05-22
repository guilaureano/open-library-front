import { AppError } from '@/shared/errors/AppError';
import * as api from '../../api/searchBooks';
import { bookService } from '../bookService';

describe('bookService', () => {
  it('normalizes errors', async () => {
    vi.spyOn(api, 'searchBooks').mockRejectedValue(new Error('network'));

    await expect(
      bookService({ page: 1, query: 'harry' }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
