import type { Book, OpenLibraryDoc } from '@/features/books/types';
import { ENV } from '@/shared/config/env';

export function mapBooks(doc: OpenLibraryDoc): Book {
  const cover = doc.editions?.docs[0].cover_i || doc.cover_i;
  const title = doc.editions?.docs[0].title || doc.title;
  return {
    authorName: doc.author_name?.map((author) => author).join(', '),
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
    firstPublishYear: doc.first_publish_year,
    id: doc.key,
    title: title,
  };
}
