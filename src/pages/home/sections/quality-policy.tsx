import { useTranslation } from 'react-i18next';

import Quality1 from '@/assets/images/quality1.png';
import Quality2 from '@/assets/images/quality2.png';

export default function QualityPolicy() {
  const { t } = useTranslation();

  return (
    <section className='py-10 sm:py-14' id='quality'>
      <div className='container grid gap-3 md:gap-4 lg:gap-8 items-center mx-auto max-w-4xl transition-all text-center'>
        <div>
          <h3 className='text-muted-foreground text-[0.75rem] sm:text-sm lg:text-base uppercase tracking-widest'>
            {t('quality.title')}
          </h3>
          <h2 className='text-primary font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold capitalize transition-all tracking-tight'>
            {t('quality.subtitle')}
          </h2>
        </div>
        <div className='max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-4xl justify-self-center'>
          <p className='text-[0.75rem] sm:text-base md:text-lg lg:text-xl leading-relaxed'>
            {t('quality.description')}
          </p>
        </div>
        <div className='grid sm:grid-cols-2 items-center md:gap-8 max-w-5xl mx-auto px-4'>
          <div className='aspect-square'>
            <img
              src={Quality1}
              alt='Applications diverses dans le domaine du collage'
              className='object-cover rounded-lg w-11/12 md:w-11/12 justify-self-center'
            />
          </div>
          <div className='aspect-square'>
            <img
              src={Quality2}
              alt='Processus de collage de qualité'
              className='object-cover rounded-lg w-11/12 md:w-11/12 justify-self-center'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
