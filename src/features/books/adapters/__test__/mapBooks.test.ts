import { openLibrarySearchMock } from '../../__test__/fixtures/openLibrary';
import { mapBooks } from '../mapBooks';

describe('mapBooks', () => {
  it('maps api payload', () => {
    const result = mapBooks({
      doc: openLibrarySearchMock.docs[0],
      language: 'eng',
    });

    expect(result.id).toBe('/works/OL82537W');
    expect(result.title).toContain('Harry Potter');
    expect(result.authorName).toEqual(['J. K. Rowling']);
    expect(result.firstPublishYear).toBe(1997);
    expect(result.cover).toEqual(12345);
  });

  it('maps api payload in different language', () => {
    const result = mapBooks({
      doc: openLibrarySearchMock.docs[0],
      language: 'por',
    });

    expect(result.id).toBe('/works/OL82537W');
    expect(result.title).toContain('Harry Potter e a Pedra Filosofal');
    expect(result.authorName).toEqual(['J. K. Rowling']);
    expect(result.firstPublishYear).toBe(1997);
    expect(result.cover).toEqual(15221820);
  });

  it('maps api payload in without editions', () => {
    const result = mapBooks({
      doc: {
        key: '/works/OL82537W',
        title: 'Harry Potter and the Philosopher Stone',
        author_name: ['J. K. Rowling'],
        first_publish_year: 1997,
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

      language: 'eng',
    });

    expect(result.id).toBe('/works/OL82537W');
    expect(result.title).toContain('Harry Potter');
    expect(result.authorName).toEqual(['J. K. Rowling']);
    expect(result.firstPublishYear).toBe(1997);
    expect(result.cover).toEqual(15221820);
  });

  it('maps api payload in different language without editions', () => {
    const result = mapBooks({
      doc: {
        key: '/works/OL82537W',
        title: 'Harry Potter and the Philosopher Stone',
        author_name: ['J. K. Rowling'],
        first_publish_year: 1997,
        cover_i: 12345,
      },
      language: 'por',
    });

    expect(result.id).toBe('/works/OL82537W');
    expect(result.title).toContain('Harry Potter');
    expect(result.authorName).toEqual(['J. K. Rowling']);
    expect(result.firstPublishYear).toBe(1997);
    expect(result.cover).toEqual(12345);
  });
});
