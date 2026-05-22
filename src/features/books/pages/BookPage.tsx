import Pagination from '@/shared/components/ui/Pagination';
import { AppError } from '@/shared/errors/AppError';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BookDetailsDialog } from '../components/BookDetailsDialog';
import { BookList } from '../components/BookList';
import { BookSearch } from '../components/BookSearch';
import { BookSkeleton } from '../components/BookSkeleton';
import { BookWelcome } from '../components/BookWelcome';
import { useBooks } from '../hooks/useBooks';
import { useBookSearchParams } from '../hooks/useBookSearchParams';
import type { Book } from '../types';

const BookPage = () => {
  const { t } = useTranslation('books');
  const { input, page, query, setInput, setPage } = useBookSearchParams();
  const [selected, setSelected] = useState<Book | null>(null);
  const { data, error, isLoading, isError } = useBooks({ query, page });

  const books = data?.docs ?? [];
  const totalResults = data?.totalResults ?? 0;
  const errorMessage =
    error instanceof AppError ? error.message : t('error.unexpected');
  const showEmptyState =
    !isLoading && !isError && query.length > 2 && books.length === 0;

  const handlePage = (value: number) => {
    setPage(value);
  };

  return (
    <main className="flex-1 w-full mx-auto max-w-6xl px-6 py-16">
      <BookWelcome />
      <BookSearch
        value={input}
        onChange={setInput}
        totalResults={data?.totalResults}
      />
      {isLoading && <BookSkeleton />}
      {isError && (
        <div className="border-y border-red-200 bg-red-50 p-4 text-red-700  font-extralight">
          {errorMessage}
        </div>
      )}
      {showEmptyState && (
        <div className="border-y border-zinc-200 p-4 font-extralight">
          Nenhum resultado encontrado.
        </div>
      )}
      {!isLoading && !isError && (
        <BookList books={books} onSelect={setSelected} />
      )}
      {totalResults > 0 && (
        <Pagination
          page={page}
          totalResults={totalResults}
          setPage={handlePage}
        />
      )}
      <BookDetailsDialog
        open={!!selected}
        book={selected}
        onClose={() => setSelected(null)}
      />
    </main>
  );
};

export default BookPage;
