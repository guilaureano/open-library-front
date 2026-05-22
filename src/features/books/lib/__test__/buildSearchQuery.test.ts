import { buildSearchQuery } from '../buildSearchQuery';

describe('buildSearchQuery', () => {
  it('builds search params correctly', () => {
    const params = buildSearchQuery({
      query: 'harry potter',
      language: 'eng',
      page: 2,
      limit: 12,
    });

    expect(params.get('q')).toBe('title:harry potter AND language:eng');

    expect(params.get('fields')).toBe(
      'key,title,author_name,cover_i,first_publish_year,editions',
    );

    expect(params.get('page')).toBe('2');
    expect(params.get('limit')).toBe('12');
  });

  it('serializes params correctly', () => {
    const params = buildSearchQuery({
      query: 'harry potter',
      language: 'eng',
      page: 2,
      limit: 12,
    });

    expect(params.toString()).toBe(
      'q=title%3Aharry+potter+AND+language%3Aeng&fields=key%2Ctitle%2Cauthor_name%2Ccover_i%2Cfirst_publish_year%2Ceditions&page=2&limit=12',
    );
  });

  it('encodes special characters safely', () => {
    const params = buildSearchQuery({
      query: 'clean code',
      language: 'eng',
      page: 1,
      limit: 10,
    });

    expect(params.toString()).toContain('title%3Aclean+code');
  });
});
