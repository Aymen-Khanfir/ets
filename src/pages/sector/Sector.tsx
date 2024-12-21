import { Link, useParams } from '@tanstack/react-router';
import { Undo2 } from 'lucide-react';

import { useLocales } from '@/hooks/use-locales.ts';

import { cn } from '@/lib/utils.ts';

import { NavConfig } from '@/config/nav-config.tsx';

import ServiceInsights from '@/pages/sector/components/service-insights/service-insights.tsx';

import Layout from '@/components/layouts/Layout.tsx';
import Hero from '@/components/shared/hero.tsx';
import SectorsCarousel from '@/components/shared/sectors-carousel.tsx';
import BlurFade from '@/components/ui/blur-fade.tsx';

function Sector() {
  const { title } = useParams({ from: '/sector/$title' });
  const { sectorsNav } = NavConfig();
  const { dir } = useLocales();

  const sector = sectorsNav.reduce((result, item) => {
    if (item.href === title) return item;
    return result;
  });

  return (
    <Layout>
      <BlurFade delay={0.2} inView>
        <Hero imageSource={sector.image}>
          <div className='flex items-center gap-3 lg:gap-6'>
            <Link
              to='/'
              hash='sectors'
              role='button'
              className='p-2 rounded hover:bg-card-foreground hover:text-background transition-all duration-300'
            >
              <Undo2
                className={cn(
                  'w-7 h-7 md:w-9 md:h-8 lg:w-10 lg:h-10',
                  dir === 'rtl' && '-rotate-180'
                )}
              />
            </Link>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-Parkinsans font-bold text-center'>
              {sector.title}
            </h1>
          </div>
        </Hero>
      </BlurFade>
      <ServiceInsights />
      <SectorsCarousel />
    </Layout>
  );
}

export default Sector;
