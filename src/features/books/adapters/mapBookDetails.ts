import type { BookDetails, OpenLibraryBookDetailsResponse } from '../types';

export function mapBookDetails(
  data: OpenLibraryBookDetailsResponse,
): BookDetails {
  return {
    title: data.full_name || data.title,
    description:
      typeof data.description === 'string'
        ? data.description
        : data.description?.value,
  };
}
