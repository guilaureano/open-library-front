import type { Book } from '@/types/book.types';

type Props = {
  book: Book;
};

export function BookCard({ book }: Props) {
  return (
    <article
      className="
        flex
        gap-4
        rounded-2xl
        border
        border-zinc-200
        bg-white
        p-4
        shadow-sm
      "
    >
      <div
        className="
          h-32
          w-24
          overflow-hidden
          rounded-md
          bg-zinc-100
          flex-shrink-0
        "
      >
        {book.coverUrl ? (
          <img
            src={book.coverUrl}
            alt={book.title}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : null}
      </div>

      <div className="flex flex-col">
        <h2 className="font-semibold text-zinc-900">{book.title}</h2>

        <p className="text-sm text-zinc-600">{book.authorName}</p>

        {book.firstPublishYear && (
          <span className="mt-2 text-xs text-zinc-500">
            {book.firstPublishYear}
          </span>
        )}
      </div>
    </article>
  );
}
