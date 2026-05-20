import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://openlibrary.org/search.json', () => {
    return HttpResponse.json({
      docs: [],
      numFound: 0,
      start: 0,
    });
  }),
];
