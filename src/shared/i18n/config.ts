import booksEnUS from '@/features/books/locales/en-US.json';
import booksEsES from '@/features/books/locales/es-ES.json';
import booksPtBR from '@/features/books/locales/pt-BR.json';
import homeEnUS from '@/features/home/locales/en-US.json';
import homeEsES from '@/features/home/locales/es-ES.json';
import homePtBR from '@/features/home/locales/pt-BR.json';
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
    detection: {
      caches: ['localStorage'],
      order: ['localStorage', 'navigator'],
    },
    fallbackLng: 'en-US',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      'en-US': {
        books: booksEnUS,
        home: homeEnUS,
        layout: layoutEnUS,
      },
      'es-ES': {
        books: booksEsES,
        home: homeEsES,
        layout: layoutEsES,
      },
      'pt-BR': {
        books: booksPtBR,
        home: homePtBR,
        layout: layoutPtBR,
      },
    },
  });

export default i18n;
