import { ENV } from '@/config/env';
import type { OpenLibrarySearchResponse } from '../types/book.types';

export async function searchBooksRequest(
  query: string,
): Promise<OpenLibrarySearchResponse> {
  const response = await fetch(
    `${ENV.API_URL}search.json?q=${encodeURIComponent(query)}`,
  );

  if (!response.ok) {
    throw new Error(`OpenLibrary [api] search error: ${response.status}`);
  }

  return response.json();
}
