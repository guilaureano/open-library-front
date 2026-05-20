import { ENV } from '@/shared/config/env';
import type { BookDetails, OpenLibraryBookDetailsResponse } from '../types';

export function mapBookDetails(
  data: OpenLibraryBookDetailsResponse,
): BookDetails {
  const cover = data.editions?.docs[0].cover_i || data.covers;
  const title = data.editions?.docs[0].title || data.title;

  return {
    title: title,
    description:
      typeof data.description === 'string'
        ? data.description
        : data.description?.value,
    coverUrl: cover
      ? {
          sm: `${ENV.COVERS_URL}${cover}-S.jpg`,
          md: `${ENV.COVERS_URL}${cover}-M.jpg`,
          lg: `${ENV.COVERS_URL}${cover}-L.jpg`,
        }
      : {
          sm: `${ENV.API_URL}/static/images/icons/avatar_book-sm.png`,
          md: `${ENV.API_URL}/static/images/icons/avatar_book.png`,
          lg: `${ENV.API_URL}/static/images/icons/avatar_book-lg.png`,
        },
    subjects: data.subjects ?? [],
    firstPublishDate: data.first_publish_date,
  };
}
