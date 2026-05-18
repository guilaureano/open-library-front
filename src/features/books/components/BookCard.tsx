import type { Book } from '@/features/books/types';
import { Image } from '@/shared/components/ui/Image';

type Props = {
  book: Book;
};

export function BookCard({ book }: Props) {
  return (
    <article className="group cursor-pointer">
      <div className="mb-4 aspect-[2/3] overflow-hidden rounded-md bg-muted">
        <Image
          cover={book.coverUrl}
          alt={book.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h2 className="truncate text-base font-medium tracking-tight">
            {book.title}
          </h2>
          <p className="mt-0.5 text-sm text-muted-foreground">
            {book.authorName?.map((author) => author).join(', ')}
          </p>
        </div>
        {book.firstPublishYear && (
          <span className="shrink-0 text-xs text-muted-foreground">
            {book.firstPublishYear}
          </span>
        )}
      </div>
    </article>
  );
}
