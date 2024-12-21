import { useTranslation } from 'react-i18next';

import { Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { useAnimateInView } from '@/hooks/use-animate-in-view.ts';
import { useLocales } from '@/hooks/use-locales.ts';

import { cn } from '@/lib/utils.ts';

import { AdvantagesSection } from '@/pages/sector/components/service-insights/components/advantages-section.tsx';
import { ProcessSection } from '@/pages/sector/components/service-insights/components/process-section.tsx';
import { QualityStandardsSection } from '@/pages/sector/components/service-insights/components/quality-standards-section.tsx';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ServiceInsights() {
  const { t } = useTranslation();
  const { dir } = useLocales();

  const [headerRef, headerInView] = useAnimateInView();
  const [ctaRef, ctaInView] = useAnimateInView();

  return (
    <div className='w-full max-w-6xl mx-auto p-6 space-y-12'>
      <motion.div
        ref={headerRef}
        initial='hidden'
        animate={headerInView ? 'visible' : 'hidden'}
        variants={fadeIn}
      >
        <h1 className='text-4xl font-bold text-center mb-2'>
          {t('service_description.title')}
        </h1>
        <p className='text-xl text-center text-muted-foreground'>
          {t('service_description.description')}
        </p>
      </motion.div>

      <AdvantagesSection />
      <ProcessSection />
      <QualityStandardsSection />

      <motion.div
        ref={ctaRef}
        variants={fadeIn}
        initial='hidden'
        animate={ctaInView ? 'visible' : 'hidden'}
        className='text-center'
      >
        <Link
          to='/'
          hash='contact'
          className='inline-flex items-center px-6 py-3 text-secondary-foreground rounded-full border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors group'
        >
          {t('service_description.cta_button')}
          <ArrowRight
            className={cn(
              'ms-2 w-4 h-4 group-hover:translate-x-1/2 transition-transform',
              dir === 'rtl' && 'rotate-180 group-hover:-translate-x-1/2'
            )}
          />
        </Link>
      </motion.div>
    </div>
  );
}
