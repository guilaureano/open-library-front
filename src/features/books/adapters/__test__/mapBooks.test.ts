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
});
