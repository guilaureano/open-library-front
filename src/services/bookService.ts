import { searchBooks } from '@/api/searchBooks';
import { mapBooks } from './adapters/mapBooks';

import { normalizeError } from '@/shared/errors/normalizeError';
import { logger } from '@/shared/lib/logger/logger';

export async function getBooks(query: string) {
  try {
    const response = await searchBooks(query);

    return response.docs.slice(0, 20).map(mapBooks);
  } catch (error) {
    const normalized = normalizeError(error);

    logger.error('BOOK SEARCH FAILED', normalized);

    throw normalized;
  }
}
