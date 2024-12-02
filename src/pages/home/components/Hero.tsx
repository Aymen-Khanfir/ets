import HeroImage from '@/assets/images/hero_image.png';

import { Icons } from '@/components/icons.tsx';

export default function Hero() {
  return (
    <section id='hero' className='relative h-[100dvh] w-full overflow-hidden'>
      {/* Background Image */}
      <img
        src={HeroImage}
        alt='Industrial workspace'
        className='object-cover h-full w-full'
      />

      {/* Overlay */}
      <div className='absolute w-full top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 bg-card/60 overflow-hidden'>
        <div className='container flex flex-col items-center'>
          {/* Company Name */}
          <Icons.logo className='text-primary' />

          {/* Tagline */}
          <p className='font-Lato text-sm md:text-2xl max-w-3xl'>
            Votre partenaire idéal pour des solutions de contre-collage sur
            mesure !
          </p>
        </div>
      </div>
    </section>
  );
}
