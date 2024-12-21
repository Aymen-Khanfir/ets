import { motion } from 'framer-motion';
import { Star, CheckCircle } from 'lucide-react';

import { useAnimateInView } from '@/hooks/use-animate-in-view.ts';

import { ServiceInsightsConfig } from '@/config/service-insights-config.ts';

import { SectionTitle } from '@/pages/sector/components/service-insights/components/section-title.tsx';

import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from '@/components/ui/card';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerChildren = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export function AdvantagesSection() {
  const [advantagesRef, advantagesInView] = useAnimateInView();
  const { advantagesSection } = ServiceInsightsConfig();

  return (
    <motion.section
      ref={advantagesRef}
      variants={staggerChildren}
      initial='hidden'
      animate={advantagesInView ? 'visible' : 'hidden'}
      className='space-y-5'
    >
      <SectionTitle
        icon={<Star className='w-6 h-6 me-2 text-primary' />}
        title={advantagesSection.title}
      />
      <motion.div
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
        variants={staggerChildren}
      >
        {advantagesSection.advantages.map((advantage, index) => (
          <motion.div key={index} variants={fadeIn} className='group'>
            <Card className='h-full transition-all duration-300 hover:shadow-lg hover:scale-105'>
              <CardHeader>
                <CardTitle className='text-lg flex items-center'>
                  <CheckCircle className='w-5 h-5 me-2 text-primary group-hover:text-secondary transition-colors duration-300' />
                  {advantage.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{advantage.description}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
