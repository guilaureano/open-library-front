import { QueryCache, QueryClient } from '@tanstack/react-query';

import { logger } from '../logger/logger';

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
