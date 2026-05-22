import type { Book } from '@/features/books/types';
import { Image } from '@/shared/components/ui/Image';
import { getLocale } from '@/shared/i18n/getLocale';
import { buildCoversUrl } from '../lib/buildCoversUrl';

type Props = {
  book: Book;
  onClick?: (book: Book) => void;
  priority?: boolean;
};

export function BookCard({ book, onClick, priority }: Props) {
  const locale = getLocale();
  const enUS = locale === 'en-US';
  const cover = enUS
    ? (book.cover ?? book.coverEdition)
    : (book.coverEdition ?? book.cover);
  const coverSizes = buildCoversUrl(cover);
  const title = enUS ? book.title : (book.titleEdition ?? book.title);

  return (
    <article className="group">
      <button
        className="w-full text left cursor-pointer rounded-md bg-white"
        type="button"
        onClick={() => onClick?.(book)}
      >
        <div className="aspect-2/3 overflow-hidden rounded-md bg-muted">
          <Image
            src={coverSizes}
            alt={book.title}
            priority={priority}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex items-start p-4">
          <div className="flex flex-1 flex-col items-start">
            <h2 className="truncate text-base font-medium tracking-tight text-wrap text-left mb-2">
              {title}
            </h2>
            <p className="flex-1 text-sm text-accent text-left">
              {book.authorName?.map((author) => author).join(', ')}
            </p>
          </div>

          {book.firstPublishYear && (
            <span className="shrink-0 leading-6 font-semibold text-sm text-amber-900 ml-4">
              {book.firstPublishYear}
            </span>
          )}
        </div>
      </button>
    </article>
  );
}
