import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

import { useAnimateInView } from '@/hooks/use-animate-in-view.ts';

import { ServiceInsightsConfig } from '@/config/service-insights-config.ts';

import { SectionTitle } from '@/pages/sector/components/service-insights/components/section-title.tsx';

import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from '@/components/ui/accordion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function QualityStandardsSection() {
  const [qualityRef, qualityInView] = useAnimateInView();
  const { qualityStandardsSection } = ServiceInsightsConfig();

  return (
    <motion.section
      ref={qualityRef}
      variants={fadeIn}
      initial='hidden'
      animate={qualityInView ? 'visible' : 'hidden'}
      className='space-y-6'
    >
      <SectionTitle
        icon={<ShieldCheck className='w-6 h-6 me-2 text-primary' />}
        title={qualityStandardsSection.title}
      />
      <Accordion type='single' collapsible className='w-full'>
        {qualityStandardsSection.qualityStandards.map(({ label, items }) => (
          <AccordionItem key={label} value={label}>
            <AccordionTrigger className='sm:text-base'>
              {label}
            </AccordionTrigger>
            <AccordionContent>
              <ul className='list-disc ps-5 space-y-2'>
                {items.map((item, index) => (
                  <li key={index} className='text-muted-foreground'>
                    {item}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.section>
  );
}
