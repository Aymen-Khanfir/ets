import { useTranslation } from 'react-i18next';

import { NavItem } from '@/types/nav';
import { Sector } from '@/types/sector';

import { Icons } from '@/components/icons.tsx';

export interface NavConfig {
  mainNav: NavItem[];
  sectorsNav: NavItem[] & Sector[];
}

export function useNavConfig(): NavConfig {
  const { t } = useTranslation();

  return {
    sectorsNav: [
      {
        title: t('search_nav.lingerie'),
        href: '/',
        image: '/images/sectors/lingerie.jpg',
      },
      {
        title: t('search_nav.furniture'),
        href: '/docs',
        image: '/images/sectors/furniture.jpg',
      },
      {
        title: t('search_nav.shoes'),
        href: '/docs/sections/accordion',
        image: '/images/sectors/shoes.jpg',
      },
      {
        title: t('search_nav.automotive'),
        href: '/blocks',
        image: '/images/sectors/automotive.jpg',
      },
      {
        title: t('search_nav.orthopedics'),
        href: '/charts',
        image: '/images/sectors/orthopedics.jpg',
      },
      {
        title: t('search_nav.bags'),
        href: '/themes',
        image: '/images/sectors/bags.jpg',
      },
      {
        title: t('search_nav.work_clothes'),
        href: '/colors',
        image: '/images/sectors/work_clothes.jpg',
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
