import booksEnUS from '@/features/books/locales//en-US.json';
import booksEsES from '@/features/books/locales//es-ES.json';
import booksPtBR from '@/features/books/locales/pt-BR.json';
import i18n from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import layoutEnUS from './locales/layout/en-US.json';
import layoutEsES from './locales/layout/es-ES.json';
import layoutPtBR from './locales/layout/pt-BR.json';

i18n
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en-US',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
    resources: {
      'pt-BR': {
        books: booksPtBR,
        layout: layoutPtBR,
      },
      'en-US': {
        books: booksEnUS,
        layout: layoutEnUS,
      },
      'es-ES': {
        books: booksEsES,
        layout: layoutEsES,
      },
    },
  });

export default i18n;
