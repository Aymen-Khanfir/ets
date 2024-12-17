import { useState } from 'react';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

import { MainNav } from '@/components/layouts/components/navbar/components/main-nav.tsx';
import { MobileNav } from '@/components/layouts/components/navbar/components/mobile-nav.tsx';
import { CommandMenu } from '@/components/shared/command-menu.tsx';
import { ModeToggle } from '@/components/shared/mode-toggle.tsx';
import { SwitchLanguage } from '@/components/shared/switch-language.tsx';

export default function Navbar() {
  const [hidden, setHidden] = useState<boolean>(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    if (previous && latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        hidden: { y: '-100%' },
        visible: { y: 0 },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className='sticky top-0 z-50 w-full bg-background/95 backdrop-blur overflow-hidden supports-[backdrop-filter]:bg-background/60'
    >
      <div className='flex h-14 md:h-20 items-center px-4 gap-2'>
        <MainNav />
        <MobileNav />
        <div className='flex flex-1 items-center justify-between gap-2 md:justify-end'>
          <div className='w-full flex-1 md:w-auto md:flex-none'>
            <CommandMenu />
          </div>
          <nav className='flex items-center gap-2'>
            <ModeToggle />
            <div className='hidden md:inline-flex p-2 rounded cursor-pointer hover:bg-border'>
              <SwitchLanguage />
            </div>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
