import type { Book } from '@/types/book.types';
import { BookCard } from './BookCard';

type Props = {
  books: Book[];
};

export function BookList({ books }: Props) {
  return (
    <div className="grid gap-4">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
