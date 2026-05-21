import { openLibrarySearchMock } from '../../__test__/fixtures/openLibrary';
import { mapBooks } from '../mapBooks';

describe('mapBooks', () => {
  it('maps api payload', () => {
    const result = mapBooks(openLibrarySearchMock.docs[0]);

    expect(result.id).toBe('/works/OL82537W');
    expect(result.title).toContain('Harry Potter');
    expect(result.authorName).toEqual(['J. K. Rowling']);
    expect(result.firstPublishYear).toBe(1997);
  });

  it('creates cover urls', () => {
    const result = mapBooks({
      key: '/works/1',
      title: 'HP',
      cover_i: 123,
    });

    expect(result.coverUrl.sm).toContain('123-S.jpg');

    expect(result.coverUrl.md).toContain('123-M.jpg');

    expect(result.coverUrl.lg).toContain('123-L.jpg');
  });

  it('uses fallback image when cover is missing', () => {
    const result = mapBooks({
      key: '/works/1',
      title: 'HP',
    });

    expect(result.coverUrl.sm).toContain('avatar_book');
  });

  it('prefers editions cover when available', () => {
    const result = mapBooks({
      key: '/works/1',
      title: 'Original',
      cover_i: 10,
      editions: {
        docs: [
          {
            key: '1',
            title: 'Edition',
            cover_i: 999,
          },
        ],
        numFound: 1,
        start: 0,
      },
    });

    expect(result.coverUrl.sm).toContain('999-S.jpg');
  });
});
