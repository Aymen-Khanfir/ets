import React from 'react';

import useEmblaCarousel from 'embla-carousel-react';

import { Sector } from '@/types/sector';

import { cn } from '@/lib/utils.ts';

import { Card } from '@/components/ui/card.tsx';
import { useNavConfig } from '@/config/nav-config.tsx';

export default function Sectors2() {
  const { sectorsNav } = useNavConfig();

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    skipSnaps: true,
  });
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const scrollTo = React.useCallback(
    (index: number) => {
      if (!emblaApi) return;

      const currentIndex = emblaApi.selectedScrollSnap();
      const slideCount = emblaApi.scrollSnapList().length;

      // Determine the wrap-around direction
      const direction = index > currentIndex ? -1 : 1;

      if (direction > 0) {
        // Moving forward (wrap from last slide)
        emblaApi.scrollTo(slideCount - 1);
        setTimeout(() => {
          emblaApi.scrollTo(index);
        }, 100);
      } else {
        // Moving backward (wrap from first slide)
        emblaApi.scrollTo(0);
        setTimeout(() => {
          emblaApi.scrollTo(index);
        }, 50);
      }
    },
    [emblaApi]
  );

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id='sectors' className='relative w-full max-w-7xl mx-auto'>
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex'>
          {sectorsNav.map((sector: Sector, index) => (
            <div
              key={index}
              className='relative flex-[0_0_100%] min-w-0 lg:flex-[0_0_20%]'
            >
              <Card className='relative overflow-hidden aspect-[3/2] border-none m-2'>
                <img
                  src={sector.image}
                  alt={sector.title}
                  className='w-full h-full object-cover'
                />
                <div className='absolute inset-0 flex items-center justify-center'>
                  <div className='bg-[#CD7F32] text-white px-4 py-2 text-sm lg:text-base font-medium'>
                    {sector.title}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-center gap-4 mt-4'>
        {[0, Math.floor(sectorsNav.length / 2)].map((bulletIndex) => (
          <button
            key={bulletIndex}
            onClick={() => {
              scrollTo(bulletIndex);
            }}
            className={cn(
              'w-3 h-3 rounded-full transition-colors',
              selectedIndex < Math.floor(sectorsNav.length / 2) &&
                bulletIndex === 0
                ? 'bg-[#CD7F32]'
                : '',
              selectedIndex >= Math.floor(sectorsNav.length / 2) &&
                bulletIndex === Math.floor(sectorsNav.length / 2)
                ? 'bg-[#CD7F32]'
                : '',
              'border border-[#CD7F32]'
            )}
            aria-label={`Go to slide group ${(bulletIndex + 1).toString()}`}
          />
        ))}
      </div>
    </section>
  );
}
