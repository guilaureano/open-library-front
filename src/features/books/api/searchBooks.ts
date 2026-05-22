import { ENV } from '@/shared/config/env';
import { getLocale } from '@/shared/i18n/getLocale';
import { mapLocaleToOpenLibrary } from '@/shared/i18n/mapLocale';
import { httpClient } from '@/shared/lib/http/httpClient';
import { buildSearchQuery } from '../lib/buildSearchQuery';
import type { OpenLibrarySearchResponse } from '../types';

type Params = {
  query: string;
  page?: number;
  limit?: number;
};

export function searchBooks({ limit = 12, page = 1, query }: Params) {
  const language = mapLocaleToOpenLibrary(getLocale());
  const params = buildSearchQuery({ limit, language, page, query });

  return httpClient<OpenLibrarySearchResponse>(
    `${ENV.API_URL}/search.json?${params}`,
  );
}
