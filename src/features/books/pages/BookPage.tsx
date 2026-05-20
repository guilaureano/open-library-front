import { AppError } from '@/shared/errors/AppError';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { BookDetailsDialog } from '../components/BookDetailsDialog';
import { BookList } from '../components/BookList';
import { BookSearch } from '../components/BookSearch';
import { BookSkeleton } from '../components/BookSkeleton';
import { BookWelcome } from '../components/BookWelcome';
import { useBooks } from '../hooks/useBooks';
import type { Book } from '../types';

export const BookPage = () => {
  const { t } = useTranslation('books');
  const [searchParams, setSearchParams] = useSearchParams();
  const searchFromUrl = searchParams.get('search') ?? '';
  const [input, setInput] = useState(searchFromUrl);
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [selected, setSelected] = useState<Book | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(input);
    }, 500);

    return () => clearTimeout(timer);
  }, [input]);

  useEffect(() => {
    const trimmed = input.trim();

    if (trimmed) {
      setSearchParams({
        search: trimmed,
      });
    } else {
      setSearchParams({});
    }
  }, [input, setSearchParams]);

  const { data, error, isLoading, isError } = useBooks({
    query: debouncedQuery,
  });
  const books = data?.docs ?? [];

  const errorMessage =
    error instanceof AppError ? error.message : t('error.unexpected');
  const showEmptyState =
    !isLoading && !isError && debouncedQuery.length > 2 && books.length === 0;

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
      <BookDetailsDialog
        open={!!selected}
        book={selected}
        onClose={() => setSelected(null)}
      />
    </main>
  );
};
