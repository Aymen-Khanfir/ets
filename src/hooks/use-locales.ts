import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { toast } from 'sonner';

import { Language } from '@/types/language';

export function useLocales(allLanguages: Language[]) {
  const { i18n, t } = useTranslation();
  const [dir, setDir] = useState(i18n.language === 'ar' ? 'rtl' : 'ltr');

  const changeLanguage = useCallback(
    async (lng: string) => {
      try {
        await i18n.changeLanguage(lng);
        toast.success(t('language_changed'));
      } catch (error) {
        console.error('Failed to change language:', error);
        toast.error(t('language_change_failed'));
      }
    },
    [i18n, t]
  );

  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      setDir(lng === 'ar' ? 'rtl' : 'ltr');
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [dir, i18n.language]);

  const currentLanguage =
    allLanguages.find((lang) => lang.value === i18n.language) ??
    allLanguages[0];

  return {
    currentLanguage,
    changeLanguage,
    dir,
  };
}
