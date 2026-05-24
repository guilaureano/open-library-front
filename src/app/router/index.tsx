import { MainLayout } from '@/app/layouts/MainLayout';
import { AuthorPage } from '@/features/authors/pages/AuthorPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AboutPage from '@/features/about/pages/AboutPage';
import { AppLoader } from '@/shared/components/ui/AppLoader';
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
      {
        path: 'about',
        element: <AboutPage />,
      },
    ],
  },
]);

export function AppRouter() {
  return (
    <Suspense fallback={<AppLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
