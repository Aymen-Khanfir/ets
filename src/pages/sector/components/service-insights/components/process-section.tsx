import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

import { useAnimateInView } from '@/hooks/use-animate-in-view.ts';

import { ServiceInsightsConfig } from '@/config/service-insights-config.ts';

import { SectionTitle } from '@/pages/sector/components/service-insights/components/section-title.tsx';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerChildren = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export function ProcessSection() {
  const [processRef, processInView] = useAnimateInView();
  const { processSection } = ServiceInsightsConfig();

  return (
    <motion.section
      ref={processRef}
      variants={staggerChildren}
      initial='hidden'
      animate={processInView ? 'visible' : 'hidden'}
      className='space-y-6'
    >
      <SectionTitle
        icon={<Layers className='w-6 h-6 me-2 text-primary' />}
        title={processSection.title}
      />
      <motion.div
        className='relative grid gap-10 py-3'
        variants={staggerChildren}
      >
        {processSection.process.map((step) => (
          <motion.div
            key={step.step}
            variants={fadeIn}
            className='flex items-center group'
          >
            <div className='relative flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center me-4 z-10 group-hover:scale-125 transition-all'>
              {step.step}
            </div>
            <div className='flex-grow space-y-2'>
              <h3 className='text-xl font-semibold'>{step.title}</h3>
              <p className='text-muted-foreground'>{step.description}</p>
            </div>
            {step.step && (
              <div className='absolute start-[1.40rem] rounded-full top-0 bottom-0 w-1 bg-primary/5 dark:bg-primary-foreground' />
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
