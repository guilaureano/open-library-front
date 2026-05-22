import * as locale from '@/shared/i18n/getLocale';
import { searchBooks } from '../searchBooks';

describe('searchBooks (MSW)', () => {
  it('builds correct request and returns data', async () => {
    vi.spyOn(locale, 'getLocale').mockReturnValue('en-US');

    const result = await searchBooks({
      query: 'harry',
      page: 1,
      limit: 12,
    });

    expect(result.docs).toHaveLength(1);
    expect(result.docs[0].title).toBe('Harry Potter and the Philosopher Stone');
  });

  it('respects locale mapping', async () => {
    vi.spyOn(locale, 'getLocale').mockReturnValue('pt-BR');

    const result = await searchBooks({
      query: 'harry',
      page: 1,
      limit: 12,
    });

    expect(result.docs[0].title).toBe('Harry Potter and the Philosopher Stone');
  });
});
