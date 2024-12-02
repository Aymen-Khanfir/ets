import { Icons } from '@/components/icons.tsx';

import { NavItem } from '@/types/nav';

export interface NavConfig {
  mainNav: NavItem[];
  sectorsNav: NavItem[];
}

export const navConfig: NavConfig = {
  sectorsNav: [
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
  mainNav: [
    {
      hash: 'hero',
      label: 'Accueil',
      icon: <Icons.home />,
    },
    {
      hash: 'sectors',
      label: 'Secteurs',
      icon: <Icons.swatchBook />,
    },
    {
      hash: 'about',
      label: 'A propos',
      icon: <Icons.about />,
    },
    {
      hash: 'quality',
      label: 'Qualité',
      icon: <Icons.sparkles />,
    },
    {
      hash: 'contact',
      label: 'Contact',
      icon: <Icons.phone />,
    },
  ],
};
