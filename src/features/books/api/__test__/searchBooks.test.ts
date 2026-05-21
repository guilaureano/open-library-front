import * as locale from '@/shared/i18n/getLocale';
import { searchBooks } from '../searchBooks';

describe('searchBooks', () => {
  it('does not include editions for en-US', async () => {
    vi.spyOn(locale, 'getLocale').mockReturnValue('en-US');

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        docs: [],
      }),
    });

    await searchBooks('harry');

    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('fields='),
      expect.anything(),
    );
  });

  it('includes editions for translated locales', async () => {
    vi.spyOn(locale, 'getLocale').mockReturnValue('pt-BR');

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        docs: [],
      }),
    });

    await searchBooks('harry');

    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('editions'),
      expect.anything(),
    );
  });
});
