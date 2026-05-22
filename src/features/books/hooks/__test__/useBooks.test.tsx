import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import type { ReactNode } from 'react';
import { openLibrarySearchMock } from '../../__test__/fixtures/openLibrary';
import { useBooks } from '../useBooks';

function wrapper({ children }: { children: ReactNode }) {
  const client = new QueryClient();

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

describe('useBooks', () => {
  it('loads books', async () => {
    const { result } = renderHook(() => useBooks({ page: 1, query: 'harry' }), {
      wrapper,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.data?.docs[0].title).toBe(
      openLibrarySearchMock.docs[0].title,
    );
  });
});
