import { useEffect, useState } from 'react';

import { useBook } from '@/hooks/useBook';

import { BookList } from '@/components/BookList';
import { BookSearch } from '@/components/BookSearch';
import { BookSkeleton } from '@/components/BookSkeleton';

function App() {
  const [input, setInput] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(input);
    }, 500);

    return () => clearTimeout(timer);
  }, [input]);

  const {
    data = [],
    isLoading,
    isError,
  } = useBook({
    query: debouncedQuery,
  });

  return (
    <main
      className="
        min-h-screen
        bg-zinc-50
        px-4
        py-8
      "
    >
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Open Library Search</h1>

          <p className="mt-2 text-zinc-600">
            Busque livros usando a Open Library API
          </p>
        </header>

        <div className="mb-6">
          <BookSearch value={input} onChange={setInput} />
        </div>

        {isLoading && (
          <div className="grid gap-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <BookSkeleton key={index} />
            ))}
          </div>
        )}

        {isError && (
          <div className="rounded-xl bg-red-100 p-4 text-red-700">
            Erro ao buscar livros
          </div>
        )}

        {!isLoading && !isError && <BookList books={data} />}
      </div>
    </main>
  );
}

export default App;
