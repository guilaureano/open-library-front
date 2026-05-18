import type { Book } from '@/types/book.types';
import { BookCard } from './BookCard';

type Props = {
  books: Book[];
};

export function BookList({ books }: Props) {
  return (
    <section className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </section>
  );
}
