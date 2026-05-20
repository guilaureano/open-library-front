import type { AppError } from '@/shared/errors/AppError';
import { useQuery } from '@tanstack/react-query';
import { fetchBookDetails } from '../services/bookDetailsService';
import type { BookDetails } from '../types';

export function useBookDetails(id?: string) {
  return useQuery<BookDetails, AppError>({
    queryKey: ['book-details', id],
    queryFn: () => fetchBookDetails(id!),
    enabled: !!id,
    staleTime: 1000 * 60 * 30,
  });
}
