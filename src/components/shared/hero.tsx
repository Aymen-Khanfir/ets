import React from 'react';
import { useTranslation } from 'react-i18next';

import { cn } from '@/lib/utils.ts';

import { Icons } from '@/components/shared/icons.tsx';

/**
 * Props for the Hero component.
 * @property {string} imageSource - The source URL of the image to display.
 */
interface HeroProps {
  imageSource: string;
  children?: React.ReactNode;
}

export default function Hero({ children, ...props }: HeroProps) {
  const { t } = useTranslation();

  return (
    <section
      id='hero'
      className={cn('relative h-[100dvh] w-full overflow-hidden')}
    >
      <img
        src={props.imageSource}
        alt='Industrial workspace'
        className='object-cover h-full w-full'
      />
      <div className='bg-card/60 px-6 py-7 w-11/12 absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-300'>
        {children ?? (
          <div className='w-full flex flex-col items-center gap-3 lg:gap-3'>
            <span>
              <Icons.logo className='text-primary w-60' />
            </span>
            <p className='text-sm md:text-xl lg:text-lg text-secondary-foreground text-center font-Parkinsans font-semibold transition-all duration-300'>
              {t('hero.description')}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
