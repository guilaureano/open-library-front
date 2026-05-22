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
      editions: {
        docs: [
          {
            cover_i: 15221820,
            key: '/books/OL30621390M',
            title: 'Harry Potter e a Pedra Filosofal',
          },
        ],
        numFound: 100,
        numFoundExact: true,
        start: 0,
      },
    },
  ],
};

export const mappedBookMock: Book = {
  authorName: ['J. K. Rowling'],
  cover: 12345,
  firstPublishYear: 1997,
  id: '/works/OL82537W',
  title: 'Harry Potter and the Philosopher Stone',
};
