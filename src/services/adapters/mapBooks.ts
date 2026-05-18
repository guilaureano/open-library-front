import { ENV } from '@/config/env';
import type { Book, OpenLibraryDoc } from '@/types/book.types';

export function mapBooks(doc: OpenLibraryDoc): Book {
  return {
    authorName: doc.author_name,
    id: doc.key,
    title: doc.title,
    coverUrl: doc.cover_i
      ? {
          sm: `${ENV.COVERS_URL}${doc.cover_i}-S.jpg`,
          md: `${ENV.COVERS_URL}${doc.cover_i}-M.jpg`,
          lg: `${ENV.COVERS_URL}${doc.cover_i}-L.jpg`,
        }
      : {
          sm: `${ENV.API_URL}/static/images/icons/avatar_book-sm.png`,
          md: `${ENV.API_URL}/static/images/icons/avatar_book.png`,
          lg: `${ENV.API_URL}/static/images/icons/avatar_book-lg.png`,
        },
    firstPublishYear: doc.first_publish_year,
    isbn: doc.isbn?.[0],
  };
}
