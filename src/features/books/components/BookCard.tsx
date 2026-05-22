import type { Book } from '@/features/books/types';
import { Image } from '@/shared/components/ui/Image';
import { buildCoversUrl } from '../lib/buildCoversUrl';

type Props = {
  book: Book;
  onClick?: (book: Book) => void;
  priority?: boolean;
};

export function BookCard({ book, onClick, priority }: Props) {
  const displayCover = buildCoversUrl(book.cover);
  const fallback = buildCoversUrl();

  return (
    <article className="group">
      <button
        className="w-full text left cursor-pointer rounded-md bg-white"
        type="button"
        onClick={() => onClick?.(book)}
      >
        <div className="aspect-2/3 overflow-hidden rounded-md bg-muted">
          <Image
            alt={book.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            fallbackSrc={fallback.md}
            src={displayCover.md}
            sizes={displayCover}
            priority={priority}
          />
        </div>

        <div className="flex items-start p-4">
          <div className="flex flex-1 flex-col items-start">
            <h2 className="truncate text-base font-medium tracking-tight text-wrap text-left mb-2">
              {book.title}
            </h2>
            <p className="flex-1 text-sm font-normal text-amber-800 text-left">
              {book.authorName?.map((author) => author).join(', ')}
            </p>
          </div>

          {book.firstPublishYear && (
            <span className="shrink-0 leading-6 font-semibold text-sm text-amber-800 ml-4">
              {book.firstPublishYear}
            </span>
          )}
        </div>
      </button>
    </article>
  );
}
