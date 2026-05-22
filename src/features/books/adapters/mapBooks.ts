import type { Book, OpenLibraryDoc } from '@/features/books/types';
import { resolveBookLocale } from './resolveBookLocale';

type MapBooksProps = {
  doc: OpenLibraryDoc;
  language: string;
};
export function mapBooks({ doc, language }: MapBooksProps): Book {
  const { title, cover } = resolveBookLocale({ doc, language });
  return {
    authorName: doc.author_name,
    cover,
    firstPublishYear: doc.first_publish_year,
    id: doc.key,
    title,
  };
}
