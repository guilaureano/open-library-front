import { openLibrarySearchMock } from '../../__test__/fixtures/openLibrary';
import { mapBooks } from '../mapBooks';

describe('mapBooks', () => {
  it('maps api payload', () => {
    const result = mapBooks(openLibrarySearchMock.docs[0]);

    expect(result.id).toBe('/works/OL82537W');
    expect(result.title).toContain('Harry Potter');
    expect(result.titleEdition).toContain('pedra filosofal');
    expect(result.authorName).toEqual(['J. K. Rowling']);
    expect(result.firstPublishYear).toBe(1997);
    expect(result.cover).toEqual(12345);
    expect(result.coverEdition).toEqual(15221820);
  });
});
