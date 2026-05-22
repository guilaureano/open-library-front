import { ENV } from '@/shared/config/env';
import { buildCoversUrl } from '../buildCoversUrl';

describe('buildCoversUrl', () => {
  it('builds OpenLibrary cover urls', () => {
    const result = buildCoversUrl(123);

    expect(result).toEqual({
      sm: `${ENV.COVERS_URL}123-S.jpg`,
      md: `${ENV.COVERS_URL}123-M.jpg`,
      lg: `${ENV.COVERS_URL}123-L.jpg`,
    });
  });

  it('returns fallback images when cover is missing', () => {
    const result = buildCoversUrl();

    expect(result).toEqual({
      sm: `${ENV.API_URL}/static/images/icons/avatar_book-sm.png`,
      md: `${ENV.API_URL}/static/images/icons/avatar_book.png`,
      lg: `${ENV.API_URL}/static/images/icons/avatar_book-lg.png`,
    });
  });
});
