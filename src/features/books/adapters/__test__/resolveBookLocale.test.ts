import { openLibrarySearchMock } from '../../__test__/fixtures/openLibrary';
import { resolveBookLocale } from '../resolveBookLocale';

describe('searchBooks (MSW)', () => {
  it('uses edition title for translated locales', () => {
    const result = resolveBookLocale({
      doc: openLibrarySearchMock.docs[0],
      language: 'por',
    });

    expect(result.title).toBe('Harry Potter e a Pedra Filosofal');
  });

  it('uses root title for english', () => {
    const result = resolveBookLocale({
      doc: openLibrarySearchMock.docs[0],
      language: 'eng',
    });

    expect(result.title).toBe('Harry Potter and the Philosopher Stone');
  });
});
