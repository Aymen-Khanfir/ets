import { useTranslation } from 'react-i18next';

import { Link } from '@tanstack/react-router';

import AboutImage from '@/assets/images/about_image.png';
import { Button } from '@/components/ui/button.tsx';

export default function About() {
  const { t } = useTranslation();

  return (
    <section className='bg-primary dark:bg-secondary py-10 sm:py-14' id='about'>
      <div className='w-11/12 mx-auto transition-all duration-300'>
        <div className='grid sm:grid-cols-2 items-center gap-8'>
          <div className='space-y-4 order-2 sm:order-1'>
            <h2 className='text-background dark:text-primary font-serif text-2xl md:text-3xl lg:text-5xl font-bold capitalize transition-all'>
              {t('about.title')}
            </h2>
            <p className='text-secondary dark:text-accent-foreground text-sm md:text-base lg:text-xl leading-relaxed transition-all'>
              {t('about.description')}
            </p>
            <Link hash='contact'>
              <Button
                variant='outline'
                className='capitalize dark:active:border-blue-300 mt-4'
                size='lg'
              >
                {t('main_nav.contact', { context: 'large' })}
              </Button>
            </Link>
          </div>
          <div className='w-2/3 sm:w-full max-w-lg justify-self-center sm:justify-self-end order-1 sm:order-2'>
            <img
              src={AboutImage}
              alt='Professional in work uniform'
              className='object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
