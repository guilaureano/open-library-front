import type { Book } from '@/features/books/types';
import { Image } from '@/shared/components/ui/Image';

type Props = {
  book: Book;
  onClick?: (book: Book) => void;
};

export function BookCard({ book, onClick }: Props) {
  return (
    <article className="group">
      <button
        className="w-full text left cursor-pointer"
        type="button"
        onClick={() => onClick?.(book)}
      >
        <div className="mb-4 aspect-2/3 overflow-hidden rounded-md bg-muted">
          <Image
            src={book.coverUrl}
            alt={book.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col items-start">
            <h2 className="truncate text-base font-medium tracking-tight">
              {book.title}
            </h2>
            <p className="mt-0.5 text-sm text-accent">{book.authorName}</p>
          </div>
          {book.firstPublishYear && (
            <span className="shrink-0 font-semibold text-xs text-muted-foreground">
              {book.firstPublishYear}
            </span>
          )}
        </div>
      </button>
    </article>
  );
}
