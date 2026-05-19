import { AppError } from '@/shared/errors/AppError';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BookList } from '../components/BookList';
import { BookSearch } from '../components/BookSearch';
import { BookSkeleton } from '../components/BookSkeleton';
import { BookWelcome } from '../components/BookWelcome';
import { useBooks } from '../hooks/useBooks';

export const BookPage = () => {
  const [input, setInput] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const { t } = useTranslation('books');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(input);
    }, 500);

    return () => clearTimeout(timer);
  }, [input]);

  const {
    data = [],
    error,
    isLoading,
    isError,
  } = useBooks({
    query: debouncedQuery,
  });

  const errorMessage =
    error instanceof AppError ? error.message : t('error.unexpected');
  const showEmptyState =
    !isLoading && !isError && debouncedQuery.length > 2 && data.length === 0;
  return (
    <main className="flex-1 w-full mx-auto max-w-6xl px-6 py-16">
      <BookWelcome />

      <div className="mb-10 flex flex-col gap-4 border-y border-border py-4 md:flex-row md:items-center md:justify-between">
        <BookSearch value={input} onChange={setInput} />
      </div>

      {isLoading && (
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 20 }).map((_, index) => (
            <BookSkeleton key={index} />
          ))}
        </div>
      )}

      {isError && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
          {errorMessage}
        </div>
      )}

      {showEmptyState && (
        <div className="rounded-xl border border-zinc-200 bg-white p-6 text-center text-zinc-500">
          Nenhum resultado encontrado.
        </div>
      )}

      {!isLoading && !isError && <BookList books={data} />}
    </main>
  );
};
