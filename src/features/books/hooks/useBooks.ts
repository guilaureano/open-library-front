import { getBooks } from '@/features/books/services/bookService';
import type { Book } from '@/features/books/types';
import type { AppError } from '@/shared/errors/AppError';
import { useQuery } from '@tanstack/react-query';

interface IUseBooks {
  query: string;
}

export function useBooks({ query }: IUseBooks) {
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
