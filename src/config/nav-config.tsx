import { useTranslation } from 'react-i18next';

import { NavItem } from '@/types/nav';
import { Sector } from '@/types/sector';

import { Icons } from '@/components/shared/icons.tsx';

export interface NavConfig {
  mainNav: NavItem[];
  sectorsNav: (NavItem & Sector)[];
}

export function useNavConfig(): NavConfig {
  const { t } = useTranslation();

  return {
    sectorsNav: [
      {
        title: t('search_nav.lingerie'),
        href: 'lingerie',
        image: '/images/sectors/lingerie.jpg',
      },
      {
        title: t('search_nav.furniture'),
        href: 'furniture',
        image: '/images/sectors/furniture.jpg',
      },
      {
        title: t('search_nav.shoes'),
        href: 'shoes',
        image: '/images/sectors/shoes.jpg',
      },
      {
        title: t('search_nav.automotive'),
        href: 'automotive',
        image: '/images/sectors/automotive.jpg',
      },
      {
        title: t('search_nav.orthopedics'),
        href: 'orthopedics',
        image: '/images/sectors/orthopedics.jpg',
      },
      {
        title: t('search_nav.bags'),
        href: 'bags',
        image: '/images/sectors/bags.jpg',
      },
      {
        title: t('search_nav.work_clothes'),
        href: 'work-clothes',
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
