import { NavItem } from '@/types/nav.ts';

export interface SectorConfig {
  mainNav: NavItem[];
}

export const sectorConfig: SectorConfig = {
  mainNav: [
    {
      title: 'Lingerie',
      href: '/',
    },
    {
      title: 'Ameublement',
      href: '/docs',
    },
    {
      title: 'Chaussures',
      href: '/docs/components/accordion',
    },
    {
      title: 'Automobile',
      href: '/blocks',
    },
    {
      title: 'Orthopédie',
      href: '/charts',
    },
    {
      title: 'Secteur des sacs',
      href: '/themes',
    },
    {
      title: 'Vetements de travail',
      href: '/colors',
    },
  ],
};
