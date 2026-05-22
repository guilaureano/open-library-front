import { normalizeError } from '@/shared/errors/normalizeError';
import { logger } from '@/shared/lib/logger/logger';
import { mapBooks } from '../adapters/mapBooks';
import { searchBooks } from '../api/searchBooks';

type Params = {
  query: string;
  page: number;
};

export async function bookService({ page, query }: Params) {
  try {
    const response = await searchBooks({ page, query });

    return {
      totalResults: response.numFound,
      start: response.start,
      docs: response.docs.map(mapBooks),
    };
  } catch (error) {
    const normalized = normalizeError(error);

    logger.error('BOOK SEARCH FAILED', normalized);
    throw normalized;
  }
}
