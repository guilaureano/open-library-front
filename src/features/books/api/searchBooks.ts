import { ENV } from '@/shared/config/env';
import { httpClient } from '@/shared/lib/http/httpClient';
import { buildSearchQuery } from '../lib/buildSearchQuery';
import type { OpenLibrarySearchResponse } from '../types';

type Params = {
  language: string;
  query: string;
  page?: number;
  limit?: number;
};

export function searchBooks({ language, limit = 12, page = 1, query }: Params) {
  const params = buildSearchQuery({ limit, language, page, query });

  return httpClient<OpenLibrarySearchResponse>(
    `${ENV.API_URL}/search.json?${params}`,
  );
}
