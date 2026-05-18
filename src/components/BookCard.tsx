import type { Book } from '@/types/book.types';
import { Image } from './ui/Image';

type Props = {
  book: Book;
};

export function BookCard({ book }: Props) {
  return (
    <article className="flex gap-4 rounded-2xl border p-4 bg-surface border-border shadow-soft backdrop-blur">
      <div className="h-32 w-24 overflow-hidden flex-shrink-0">
        <Image
          cover={book.coverUrl}
          alt={book.title}
          className="h-full w-full"
        />
      </div>

      <div className="flex flex-col">
        <h2 className="font-semibold text-zinc-900">{book.title}</h2>
        <p className="text-sm text-muted">
          {book.authorName?.map((author) => author).join(', ')}
        </p>
        {book.firstPublishYear && (
          <span className="mt-2 text-xs text-zinc-500">
            {book.firstPublishYear}
          </span>
        )}
      </div>
    </article>
  );
}
