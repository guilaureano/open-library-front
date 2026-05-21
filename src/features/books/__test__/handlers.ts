import { http, HttpResponse } from 'msw';
import { openLibrarySearchMock } from './fixtures/openLibrary';

export const handlers = [
  http.get('https://openlibrary.org/search.json', () => {
    return HttpResponse.json(openLibrarySearchMock);
  }),
];
