import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export function useBookSearchParams() {
  const [params, setParams] = useSearchParams();

  const search = params.get('search') ?? '';
  const page = Number(params.get('page') ?? '1');

  const [input, setInput] = useState(search);
  const [debouncedQuery, setDebouncedQuery] = useState(search);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(input.trim());
    }, 750);
    return () => clearTimeout(timer);
  }, [input]);

  useEffect(() => {
    const trimmed = debouncedQuery.trim();
    setParams(trimmed ? { search: trimmed, page: String(page) } : {});
  }, [debouncedQuery, page, setParams]);

  const setPage = (value: number) => {
    setParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set('page', String(value));
      return next;
    });
  };

  return {
    input,
    setInput,
    page,
    setPage,
    query: debouncedQuery,
  };
}
