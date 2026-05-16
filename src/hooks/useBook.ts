import { useQuery } from '@tanstack/react-query';
import { searchBooks } from '../services/bookService';

interface IUseBook {
  query: string;
}

export function useBook({ query }: IUseBook) {
  return useQuery({
    queryKey: ['books', query],
    queryFn: () => searchBooks(query),
    enabled: query.length > 2,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 60,
    retry: 2,
    refetchOnWindowFocus: false,
  });
}
