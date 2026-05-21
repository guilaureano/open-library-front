import { MainLayout } from '@/app/layouts/MainLayout';
import { AuthorPage } from '@/features/authors/pages/AuthorPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { BookSkeleton } from '@/features/books/components/BookSkeleton';
import { lazy, Suspense } from 'react';

const BookPage = lazy(() => import('@/features/books/pages/BookPage'));
const HomePage = lazy(() => import('@/features/home/pages/HomePage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,

    children: [
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: 'books',
        element: <BookPage />,
      },

      {
        path: 'authors',
        element: <AuthorPage />,
      },
    ],
  },
]);

export function AppRouter() {
  return (
    <Suspense fallback={<BookSkeleton />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
