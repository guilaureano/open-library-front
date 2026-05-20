import { normalizeError } from '@/shared/errors/normalizeError';
import { logger } from '@/shared/lib/logger/logger';
import { mapBookDetails } from '../adapters/mapBookDetails';
import { getBookDetails } from '../api/getBookDetails';

export async function fetchBookDetails(id: string) {
  try {
    const response = await getBookDetails(id);

    return mapBookDetails(response);
  } catch (error) {
    const normalized = normalizeError(error);

    logger.error('BOOK DETAILS FAILED', normalized);
    throw normalized;
  }
}
