import { MainLayout } from '@/app/layouts/MainLayout';
import { AppLoader } from '@/shared/components/ui/AppLoader';
import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const NotFoundPage = lazy(() => import('@/app/pages/NotFoundPage'));
const AboutPage = lazy(() => import('@/features/about/pages/AboutPage'));
// const AuthorPage = lazy(() => import('@/features/authors/pages/AuthorPage'));
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
      // {
      //   path: 'authors',
      //   element: <AuthorPage />,
      // },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
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
