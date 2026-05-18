import { ENV } from '@/shared/config/env';
import { httpClient } from '@/shared/lib/http/httpClient';
import type { OpenLibrarySearchResponse } from '../types';

export function searchBooks(query: string) {
  return httpClient<OpenLibrarySearchResponse>(
    `${ENV.API_URL}search.json?q=${encodeURIComponent(query)}`,
  );
}
