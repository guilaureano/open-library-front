import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://openlibrary.org/search.json', () =>
    HttpResponse.json({
      docs: [
        {
          key: '/works/OL82537W',
          title: 'Harry Potter and the Philosopher Stone',
          author_name: ['J. K. Rowling'],
          first_publish_year: 1997,
          cover_i: 12345,
        },
      ],
      numFound: 1,
      start: 0,
    }),
  ),
];
