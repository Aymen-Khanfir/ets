import { useTranslation } from 'react-i18next';

import AboutImage from '@/assets/images/about_image.png';

import { Button } from '@/components/ui/button.tsx';

export default function About() {
  const { t } = useTranslation();

  return (
    <section
      className='bg-primary dark:bg-secondary py-20 overflow-hidden'
      id='about'
    >
      <div className='container mx-auto px-4'>
        <div className='grid md:grid-cols-2 gap-8 items-center'>
          {/* Text Content */}
          <div className='space-y-4'>
            <h2 className='text-background dark:text-primary transition-colors text-4xl md:text-5xl font-bold'>
              {t('about.title')}
            </h2>
            <p className='text-muted-foreground dark:text-accent-foreground font-medium font-Parkinsans text-lg md:text-xl leading-relaxed'>
              {t('about.description')}
            </p>
            <Button variant='outline' size='lg'>
              {t('main_nav.contact', { context: 'large' })}
            </Button>
          </div>

          {/* Image */}
          <div className='relative'>
            <div className='relative aspect-square max-w-md mx-auto'>
              <div className='absolute inset-0 bg-white transform rotate-45 -z-10'></div>
              <img
                src={AboutImage}
                alt='Professional in work uniform'
                className='object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
