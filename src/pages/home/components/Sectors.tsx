import * as React from 'react';

import useEmblaCarousel from 'embla-carousel-react';

import { cn } from '@/lib/utils.ts';

import { Card, CardContent } from '@/components/ui/card.tsx';
import {
  Carousel,
  CarouselItem,
  CarouselNext,
  CarouselContent,
  CarouselPrevious,
} from '@/components/ui/carousel.tsx';

import { Sector } from '@/types/sector';

function Sectors() {
  return (
    <Carousel
      className='w-full max-w-sm'
      opts={{
        loop: true,
        dragFree: true,
        breakpoints: { '(min-width: 1024px)': { slidesToScroll: 3 } },
      }}
    >
      <CarouselContent className='-ml-1'>
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className='pl-1 md:basis-1/2 lg:basis-1/3'>
            <div className='p-1'>
              <Card>
                <CardContent className='flex aspect-square items-center justify-center p-6'>
                  <span className='text-2xl font-semibold'>{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default Sectors;

const sectors: Sector[] = [
  {
    title: 'Forest Adventure',
    image:
      'https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Valley of life',
    image:
      'https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Sala behta hi jayega',
    image:
      'https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Camping is for pros',
    image:
      'https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'The road not taken',
    image:
      'https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'The First Rule',
    image: 'https://assets.aceternity.com/the-first-rule.png',
  },
];

export function Sectors2() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const scrollTo = React.useCallback(
    (index: number) => {
      if (!emblaApi) return;

      const currentIndex = emblaApi.selectedScrollSnap();
      const slideCount = emblaApi.scrollSnapList().length;

      // Calculate distances for both directions
      const normalDistance = Math.abs(index - currentIndex);
      const wrapDistance = Math.abs(
        slideCount - Math.abs(index - currentIndex)
      );

      // Determine the shortest path
      if (normalDistance <= wrapDistance) {
        emblaApi.scrollTo(index);
      } else {
        // Use the wrap-around path
        const direction = index > currentIndex ? -1 : 1;
        if (direction > 0) {
          emblaApi.scrollTo(slideCount - 1);
          setTimeout(() => {
            emblaApi.scrollTo(index);
          }, 100);
        } else {
          emblaApi.scrollTo(0);
          setTimeout(() => {
            emblaApi.scrollTo(index);
          }, 50);
        }
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
          {sectors.map((sector: Sector, index) => (
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
        {[0, Math.floor(sectors.length / 2)].map((bulletIndex) => (
          <button
            key={bulletIndex}
            onClick={() => {
              scrollTo(bulletIndex);
            }}
            className={cn(
              'w-3 h-3 rounded-full transition-colors',
              selectedIndex < Math.floor(sectors.length / 2) &&
                bulletIndex === 0
                ? 'bg-[#CD7F32]'
                : '',
              selectedIndex >= Math.floor(sectors.length / 2) &&
                bulletIndex === Math.floor(sectors.length / 2)
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
