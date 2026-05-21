import type { Book, OpenLibrarySearchResponse } from '../../types';

export const openLibrarySearchMock: OpenLibrarySearchResponse = {
  numFound: 1,
  start: 0,
  docs: [
    {
      key: '/works/OL82537W',
      title: 'Harry Potter and the Philosopher Stone',
      author_name: ['J. K. Rowling'],
      first_publish_year: 1997,
      cover_i: 12345,
    },
  ],
};

export const mappedBookMock: Book = {
  id: '/works/OL82537W',
  title: 'Harry Potter and the Philosopher Stone',
  authorName: ['J. K. Rowling'],
  firstPublishYear: 1997,
  coverUrl: {
    sm: expect.any(String) as never,
    md: expect.any(String) as never,
    lg: expect.any(String) as never,
  },
};
