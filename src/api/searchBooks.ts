import { ENV } from '@/config/env';
import { httpClient } from '@/shared/lib/http/httpClient';
import type { OpenLibrarySearchResponse } from '../types/book.types';

export function searchBooks(query: string) {
  return httpClient<OpenLibrarySearchResponse>(
    `${ENV.API_URL}search.json?q=${encodeURIComponent(query)}`,
  );
}
