import { useTranslation } from 'react-i18next';

import { Icons } from '@/components/icons.tsx';

import { NavItem } from '@/types/nav';

export interface NavConfig {
  mainNav: NavItem[];
  sectorsNav: NavItem[];
}

export function useNavConfig(): NavConfig {
  const { t } = useTranslation();

  return {
    sectorsNav: [
      {
        title: t('search_nav.lingerie'),
        href: '/',
      },
      {
        title: t('search_nav.furniture'),
        href: '/docs',
      },
      {
        title: t('search_nav.shoes'),
        href: '/docs/sections/accordion',
      },
      {
        title: t('search_nav.automotive'),
        href: '/blocks',
      },
      {
        title: t('search_nav.orthopedics'),
        href: '/charts',
      },
      {
        title: t('search_nav.bags'),
        href: '/themes',
      },
      {
        title: t('search_nav.work_clothes'),
        href: '/colors',
      },
    ],
    mainNav: [
      {
        hash: 'hero',
        label: t('main_nav.home'),
        icon: <Icons.home />,
      },
      {
        hash: 'sectors',
        label: t('main_nav.sectors'),
        icon: <Icons.swatchBook />,
      },
      {
        hash: 'about',
        label: t('main_nav.about'),
        icon: <Icons.about />,
      },
      {
        hash: 'quality',
        label: t('main_nav.quality'),
        icon: <Icons.sparkles />,
      },
      {
        hash: 'contact',
        label: t('main_nav.contact'),
        icon: <Icons.phone />,
      },
    ],
  };
}
