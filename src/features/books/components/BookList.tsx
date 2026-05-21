import type { Book } from '@/features/books/types';
import { BookCard } from './BookCard';

type Props = {
  books: Book[];
  onSelect?: (book: Book) => void;
};

export function BookList({ books, onSelect }: Props) {
  return (
    <section className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {books.map((book, index) => (
        <BookCard
          key={book.id}
          book={book}
          onClick={onSelect}
          priority={index < 4}
        />
      ))}
    </section>
  );
}
