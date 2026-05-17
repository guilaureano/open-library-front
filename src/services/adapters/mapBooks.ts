import { ENV } from '@/config/env';
import type { Book, OpenLibraryDoc } from '@/types/book.types';

export function mapBooks(doc: OpenLibraryDoc): Book {
  return {
    authorName: doc.author_name?.[0] || 'Autor desconhecido',
    id: doc.key,
    title: doc.title,
    coverUrl: doc.cover_i
      ? `${ENV.COVERS_URL}${doc.cover_i}-M.jpg`
      : `${ENV.API_URL}/static/images/icons/avatar_book-sm.png`,
    firstPublishYear: doc.first_publish_year,
    isbn: doc.isbn?.[0],
  };
}
