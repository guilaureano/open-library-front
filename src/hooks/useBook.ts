import { getBooks } from '@/services/bookService';
import type { AppError } from '@/shared/errors/AppError';
import type { Book } from '@/types/book.types';
import { useQuery } from '@tanstack/react-query';

interface IUseBook {
  query: string;
}

export function useBook({ query }: IUseBook) {
  return useQuery<Book[], AppError>({
    queryKey: ['books', query],
    queryFn: () => getBooks(query),
    enabled: query.length > 2,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 60,
    retry: 2,
    refetchOnWindowFocus: false,
  });
}
