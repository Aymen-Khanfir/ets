import React, { useState } from 'react';

import Autoplay from 'embla-carousel-autoplay';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';

import { Sector } from '@/types/sector';

import { useLocales } from '@/hooks/use-locales.ts';
import { useMediaQuery } from '@/hooks/use-media-Query.ts';

import { cn } from '@/lib/utils.ts';

import { Card } from '@/components/ui/card.tsx';
import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselScrollTo,
} from '@/components/ui/carousel.tsx';
import { useNavConfig } from '@/config/nav-config.tsx';

function Sectors() {
  const { sectorsNav } = useNavConfig();
  const { dir } = useLocales();

  const [activeIndex, setActiveIndex] = useState(0);

  const isLg = useMediaQuery('(min-width: 1024px)');
  const isMd = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
  const isSm = useMediaQuery('(min-width: 640px) and (max-width: 767px)');
  const isXs = useMediaQuery('(max-width: 639px)');

  const bulletIndexes = React.useMemo(() => {
    const lastIndex = sectorsNav.length - 1;

    if (isLg) {
      return [0, lastIndex];
    } else if (isMd) {
      const midIndex = Math.floor(sectorsNav.length / 2);

      return [0, midIndex, lastIndex];
    } else if (isSm) {
      const midIndex1 = Math.floor(sectorsNav.length / 3);
      const midIndex2 = Math.floor((2 * sectorsNav.length) / 3);

      return [0, midIndex1, midIndex2, lastIndex];
    } else if (isXs) {
      const midIndex1 = Math.floor(sectorsNav.length / 4);
      const midIndex2 = Math.floor((2 * sectorsNav.length) / 4);
      const midIndex3 = Math.floor((3 * sectorsNav.length) / 4);

      return [0, midIndex1, midIndex2, midIndex3, lastIndex];
    }

    return [];
  }, [isLg, isMd, isSm, isXs, sectorsNav.length]);

  const handleSlideChange = React.useCallback(
    (index: number) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <section id='sectors' className='py-10 sm:py-14'>
      <Carousel
        className='relative w-full px-4'
        opts={{
          loop: true,
          align: 'start',
          direction: dir,
          skipSnaps: true,
        }}
        plugins={[
          Autoplay({ delay: 3000, stopOnInteraction: true }),
          WheelGesturesPlugin({
            forceWheelAxis: 'x',
          }),
        ]}
        setApi={(api) => {
          // Update active index on slide change
          api?.on('select', () => {
            const index = api.selectedScrollSnap();
            console.log('index', index);
            handleSlideChange(index);
          });
        }}
      >
        <CarouselContent>
          {sectorsNav.map((sector: Sector, index) => (
            <CarouselItem
              key={index}
              className='basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 cursor-pointer'
            >
              <Card className='overflow-hidden relative rounded group'>
                <img
                  src={sector.image}
                  alt={sector.title}
                  className='object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 aspect-[3/5]'
                />
                <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center w-11/12 justify-center bg-primary/80 dark:bg-black dark:bg-opacity-50 rounded transition-all duration-300 ease-in-out group-hover:opacity-0'>
                  <span className='text-[0.7rem] sm:text-base lg:text-lg xl:text-xl font-semibold text-white text-center py-2 uppercase'>
                    {sector.title}
                  </span>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className='flex justify-center gap-4 mt-4'>
          {bulletIndexes.map((bulletIndex, idx) => (
            <CarouselScrollTo
              key={idx}
              index={bulletIndex}
              className={cn(activeIndex === bulletIndex ? 'bg-primary' : '')}
              aria-label={`Go to slide ${(bulletIndex + 1).toString()}`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
}

export default Sectors;
