import { useTranslation } from 'react-i18next';

import { Language } from '@/types/language';

import { Icons } from '@/components/shared/icons.tsx';

export function useAllLanguages(): Language[] {
  const { t } = useTranslation();

  return [
    {
      label: t('english'),
      value: 'en',
      icon: <Icons.english className='w-7 h-5' />,
    },
    {
      label: t('french'),
      value: 'fr',
      icon: <Icons.french className='w-7 h-5' />,
    },
    {
      label: t('arabic'),
      value: 'ar',
      icon: <Icons.arabic className='bg-[#2d5f06] w-7 h-5' />,
    },
  ] as const;
}
