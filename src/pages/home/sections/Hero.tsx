import { useTranslation } from 'react-i18next';

import HeroImage from '@/assets/images/hero_image.png';
import { Icons } from '@/components/icons.tsx';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id='hero' className='relative h-[100dvh] w-full overflow-hidden'>
      <img
        src={HeroImage}
        alt='Industrial workspace'
        className='object-cover h-full w-full'
      />
      <div className='w-11/12 absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-300'>
        <div className=' w-full flex flex-col items-center gap-3 lg:gap-3 bg-card/60 px-6 py-7 transition-all duration-300'>
          <span>
            <Icons.logo className='text-primary w-60' />
          </span>
          <p className='text-sm md:text-xl lg:text-lg text-secondary-foreground text-center font-Parkinsans font-semibold transition-all duration-300'>
            {t('hero.description')}
          </p>
        </div>
      </div>
    </section>
  );
}
