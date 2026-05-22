import { ENV } from '@/shared/config/env';

export function buildCoversUrl(cover?: number) {
  if (cover != null) {
    return {
      sm: `${ENV.COVERS_URL}${cover}-S.jpg`,
      md: `${ENV.COVERS_URL}${cover}-M.jpg`,
      lg: `${ENV.COVERS_URL}${cover}-L.jpg`,
    };
  }

  return {
    sm: `${ENV.API_URL}/static/images/icons/avatar_book-sm.png`,
    md: `${ENV.API_URL}/static/images/icons/avatar_book.png`,
    lg: `${ENV.API_URL}/static/images/icons/avatar_book-lg.png`,
  };
}
