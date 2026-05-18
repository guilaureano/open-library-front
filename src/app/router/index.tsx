import { MainLayout } from '@/app/layouts/MainLayout';
import { AuthorPage } from '@/features/authors/pages/AuthorPage';
import { BookPage } from '@/features/books/pages/BookPage';
import { HomePage } from '@/features/home/pages/HomePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
  return <RouterProvider router={router} />;
}
