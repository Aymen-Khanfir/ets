import * as React from 'react';

import useEmblaCarousel from 'embla-carousel-react';

import { cn } from '@/lib/utils.ts';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselItem,
  CarouselNext,
  CarouselContent,
  CarouselPrevious,
} from '@/components/ui/carousel';

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

interface Category {
  title: string;
  image: string;
}

const categories: Category[] = [
  { title: '1', image: '/placeholder.svg?height=400&width=600' },
  { title: '2', image: '/placeholder.svg?height=400&width=600' },
  { title: '3', image: '/placeholder.svg?height=400&width=600' },
  { title: '4', image: '/placeholder.svg?height=400&width=600' },
  { title: '5', image: '/placeholder.svg?height=400&width=600' },
  { title: '6', image: '/placeholder.svg?height=400&width=600' },
  { title: '7', image: '/placeholder.svg?height=400&width=600' },
  { title: '8', image: '/placeholder.svg?height=400&width=600' },
  { title: '9', image: '/placeholder.svg?height=400&width=600' },
  { title: '10', image: '/placeholder.svg?height=400&width=600' },
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
          {categories.map((category, index) => (
            <div
              key={index}
              className='relative flex-[0_0_100%] min-w-0 lg:flex-[0_0_20%]'
            >
              <Card className='relative overflow-hidden aspect-[3/2] border-none m-2'>
                <img
                  src={category.image}
                  alt={category.title}
                  className='w-full h-full object-cover'
                />
                <div className='absolute inset-0 flex items-center justify-center'>
                  <div className='bg-[#CD7F32] text-white px-4 py-2 text-sm lg:text-base font-medium'>
                    {category.title}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-center gap-4 mt-4'>
        {[0, Math.floor(categories.length / 2)].map((bulletIndex) => (
          <button
            key={bulletIndex}
            onClick={() => {
              scrollTo(bulletIndex);
            }}
            className={cn(
              'w-3 h-3 rounded-full transition-colors',
              selectedIndex < Math.floor(categories.length / 2) &&
                bulletIndex === 0
                ? 'bg-[#CD7F32]'
                : '',
              selectedIndex >= Math.floor(categories.length / 2) &&
                bulletIndex === Math.floor(categories.length / 2)
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
