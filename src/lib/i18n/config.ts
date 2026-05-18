import enUS from '@/locales/en-US.json';
import esES from '@/locales/es-ES.json';
import ptBR from '@/locales/pt-BR.json';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'pt-BR',
  lng: 'pt-BR',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    'pt-BR': {
      books: ptBR,
    },
    'en-US': {
      books: enUS,
    },
    'es-ES': {
      books: esES,
    },
  },
});

export default i18n;
