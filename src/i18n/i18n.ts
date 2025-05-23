import { initReactI18next } from 'react-i18next';

import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ChainedBackend from 'i18next-chained-backend';
import HttpBackend from 'i18next-http-backend';
import LocalStorageBackend from 'i18next-localstorage-backend';
import { toast } from 'sonner';

import { isProduction } from '@/lib/is-production.ts';

const expirationTimePerDay = 24 * 60 * 60 * 1000;

async function initializeI18n() {
  await i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(ChainedBackend)
    .init({
      debug: !isProduction,
      supportedLngs: ['en', 'fr', 'ar'],
      fallbackLng: 'en',
      saveMissing: true,
      lowerCaseLng: true,
      backend: {
        backends: [LocalStorageBackend, HttpBackend],
        backendOptions: [
          {
            expirationTime: expirationTimePerDay, // 1 day
          },
          {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
          },
        ],
      },
    });
}

initializeI18n().catch((error: unknown) => {
  console.error('Failed to initialize i18next', error);
  toast.error('Failed to initialize i18next');
});

export default i18next;
