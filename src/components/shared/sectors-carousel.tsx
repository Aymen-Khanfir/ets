import { useState } from 'react';

import { Link } from '@tanstack/react-router';
import Autoplay from 'embla-carousel-autoplay';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';

import { useCarouselBullets } from '@/hooks/use-carousel-bullets.ts';
import { useLocales } from '@/hooks/use-locales.ts';

import { cn } from '@/lib/utils.ts';

import { NavConfig } from '@/config/nav-config.tsx';

import { Card } from '@/components/ui/card.tsx';
import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselBulletNavigation,
} from '@/components/ui/carousel.tsx';

function SectorsCarousel() {
  const { sectorsNav } = NavConfig();
  const { dir } = useLocales();

  const totalItems = sectorsNav.length;
  const { bullets } = useCarouselBullets(totalItems);

  const [currentSlide, setCurrentSlide] = useState(0);

  const getActiveBullet = (currentSlide: number) => {
    const slidesPerBullet = Math.ceil(totalItems / bullets);
    return Math.min(Math.floor(currentSlide / slidesPerBullet), bullets - 1);
  };

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
          Autoplay({
            delay: 3000,
            stopOnInteraction: true,
            stopOnFocusIn: true,
          }),
          WheelGesturesPlugin({
            forceWheelAxis: 'x',
          }),
        ]}
        setApi={(api) => {
          api?.on('select', () => {
            setCurrentSlide(api.selectedScrollSnap());
          });
        }}
      >
        <CarouselContent>
          {sectorsNav.map((sector, index: number) => (
            <CarouselItem
              key={index}
              className='basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 cursor-pointer'
            >
              <Link to='/sector/$title' params={{ title: sector.href }}>
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
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className='flex justify-center gap-4 mt-4'>
          {Array.from({ length: bullets }).map((_, index) => {
            let indexToScroll = 0;

            if (index === bullets - 1) {
              indexToScroll = totalItems - 1;
            } else if (index > 0) {
              indexToScroll = Math.round(
                (index * (totalItems - 1)) / (bullets - 1)
              );
            }

            const isActive = getActiveBullet(currentSlide) === index;

            return (
              <CarouselBulletNavigation
                key={index}
                indexToScroll={indexToScroll}
                className={cn(
                  isActive
                    ? 'bg-primary dark:bg-foreground'
                    : 'hover:bg-primary/80 hover:dark:bg-foreground/80'
                )}
              />
            );
          })}
        </div>
      </Carousel>
    </section>
  );
}

export default SectorsCarousel;
