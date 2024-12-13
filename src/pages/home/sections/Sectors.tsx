import Autoplay from 'embla-carousel-autoplay';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';

import { Sector } from '@/types/sector';

import { useLocales } from '@/hooks/use-locales.ts';

import { Card } from '@/components/ui/card.tsx';
import {
  Carousel,
  CarouselItem,
  CarouselContent,
} from '@/components/ui/carousel.tsx';
import { useNavConfig } from '@/config/nav-config.tsx';

function Sectors() {
  const { sectorsNav } = useNavConfig();
  const { dir } = useLocales();

  return (
    <section id='sectors' className='py-10 sm:py-14'>
      <Carousel
        className='w-full px-4'
        opts={{
          loop: true,
          align: 'start',
          direction: dir,
          skipSnaps: true,
        }}
        plugins={[
          Autoplay({ delay: 3000, playOnInit: true }),
          WheelGesturesPlugin({
            forceWheelAxis: 'x',
          }),
        ]}
      >
        <CarouselContent>
          {sectorsNav.map((sector: Sector, index) => (
            <CarouselItem
              key={index}
              className='basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 cursor-pointer'
            >
              <Card className='overflow-hidden relative rounded'>
                <img
                  src={sector.image}
                  alt={sector.title}
                  className='object-cover transition-transform duration-300 ease-in-out hover:scale-110 aspect-[3/5]'
                />
                <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center w-11/12 justify-center bg-black bg-opacity-40 rounded'>
                  <span className='text-[0.7rem] sm:text-base lg:text-lg xl:text-2xl font-semibold text-white text-center px-4 py-2 uppercase'>
                    {sector.title}
                  </span>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

export default Sectors;
