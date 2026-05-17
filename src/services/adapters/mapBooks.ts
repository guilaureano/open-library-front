import type { Book, OpenLibraryDoc } from '@/types/book.types';

const COVERS_URL = import.meta.env.COVERS_URL;

export function mapBooks(doc: OpenLibraryDoc): Book {
  return {
    authorName: doc.author_name?.[0] || 'Autor desconhecido',
    id: doc.key,
    title: doc.title,
    coverUrl: doc.cover_i ? `${COVERS_URL}${doc.cover_i}-M.jpg` : undefined,
    firstPublishYear: doc.first_publish_year,
    isbn: doc.isbn?.[0],
  };
}
