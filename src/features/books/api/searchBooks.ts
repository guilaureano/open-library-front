import { ENV } from '@/shared/config/env';
import { getLocale } from '@/shared/i18n/getLocale';
import { mapLocaleToOpenLibrary } from '@/shared/i18n/mapLocale';
import { httpClient } from '@/shared/lib/http/httpClient';
import type { OpenLibrarySearchResponse } from '../types';

export function searchBooks(query: string) {
  const locale = getLocale();
  const language = mapLocaleToOpenLibrary(locale);
  const fullQuery = `${query} AND language:${language}`;

  const fields = [
    'key',
    'title',
    'author_name',
    'cover_i',
    'first_publish_year',
  ];
  if (locale !== 'en-US') {
    fields.push('editions');
  }
  const fieldsQuery = `&fields=${fields.join(',')}`;

  return httpClient<OpenLibrarySearchResponse>(
    `${ENV.API_URL}search.json?q=${encodeURIComponent(fullQuery)}${fieldsQuery}`,
  );
}
