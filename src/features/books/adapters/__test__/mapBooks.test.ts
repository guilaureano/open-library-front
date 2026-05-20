import { mapBooks } from '../mapBooks';

describe('mapBooks', () => {
  it('maps api payload to internal model', () => {
    const result = mapBooks({
      key: '/works/1',
      title: 'Harry Potter',
      author_name: ['J.K.', 'Rowling'],
      first_publish_year: 1997,
    });

    expect(result.id).toBe('/works/1');
    expect(result.title).toBe('Harry Potter');
    expect(result.authorName).toBe('J.K., Rowling');
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
