import { normalizeError } from '@/shared/errors/normalizeError';
import { getLocale } from '@/shared/i18n/getLocale';
import { mapLocaleToOpenLibrary } from '@/shared/i18n/mapLocale';
import { logger } from '@/shared/lib/logger/logger';
import { mapBooks } from '../adapters/mapBooks';
import { searchBooks } from '../api/searchBooks';

type Params = {
  query: string;
  page: number;
};

export async function bookService({ page, query }: Params) {
  const language = mapLocaleToOpenLibrary(getLocale());
  try {
    const response = await searchBooks({ language, page, query });

    return {
      totalResults: response.numFound,
      start: response.start,
      docs: response.docs.map((doc) => mapBooks({ doc, language })),
    };
  } catch (error) {
    const normalized = normalizeError(error);

    logger.error('BOOK SEARCH FAILED', normalized);
    throw normalized;
  }
}
