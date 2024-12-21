import React, { useState } from 'react';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { ArrowBigUpDash } from 'lucide-react';

import Footer from '@/components/layouts/components/footer/Footer.tsx';
import Navbar from '@/components/layouts/components/navbar/Navbar.tsx';
import { Button } from '@/components/ui/button.tsx';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [hidden, setHidden] = useState<boolean>(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <Navbar />
      <main className='overflow-hidden'>{children}</main>
      <motion.div
        className='fixed bottom-4 right-3.5 z-50'
        variants={{
          hidden: { x: '140%' },
          visible: { x: 1 },
        }}
        animate={hidden ? 'visible' : 'hidden'}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
      >
        <Button
          variant='secondary'
          size='icon'
          className='bg-secondary/70 rounded-full w-12 h-12 lg:w-14 lg:h-14 transition-all duration-300 ease-in-out'
          onClick={() => {
            window.scrollTo({ top: 0 });
          }}
        >
          <ArrowBigUpDash className='!w-6 !h-6 lg:!w-8 lg:!h-8 lg:stroke-[1.6]' />
        </Button>
      </motion.div>
      <Footer />
    </>
  );
}
