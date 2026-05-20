import { ENV } from '@/shared/config/env';
import { httpClient } from '@/shared/lib/http/httpClient';
import type { OpenLibraryBookDetailsResponse } from '../types';

export function getBookDetails(id: string) {
  return httpClient<OpenLibraryBookDetailsResponse>(`${ENV.API_URL}${id}.json`);
}
