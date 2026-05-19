import i18n from './config';

export function getLocale() {
  return i18n.resolvedLanguage ?? i18n.language;
}
