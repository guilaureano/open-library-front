import type { Book, OpenLibraryDoc } from '@/features/books/types';

export function mapBooks(doc: OpenLibraryDoc): Book {
  return {
    authorName: doc.author_name,
    cover: doc.cover_i,
    coverEdition: doc.editions?.docs[0].cover_i,
    firstPublishYear: doc.first_publish_year,
    id: doc.key,
    title: doc.title,
    titleEdition: doc.editions?.docs[0].title,
  };
}
