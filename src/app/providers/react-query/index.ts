import { logger } from '@/shared/lib/logger/logger';
import { QueryCache, QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError(error, query) {
      logger.error('QUERY ERROR', {
        queryKey: query.queryKey,
        error,
      });
    },
  }),
});
