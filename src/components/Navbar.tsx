import { useState } from 'react';

import { Link } from '@tanstack/react-router';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

import { useNavConfig } from '@/config/nav-config.tsx';

import { Icons } from '@/components/icons.tsx';
import { MobileNav } from '@/components/mobile-nav.tsx';
import { ModeToggle } from '@/components/mode-toggle.tsx';
import { SwitchLanguage } from '@/components/switch-language.tsx';
import { Button } from '@/components/ui/button.tsx';

import { CommandMenu } from '@/pages/home/components/command-menu.tsx';

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
      <div className='flex h-14 md:h-20 items-center px-4'>
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

function MainNav() {
  const { mainNav } = useNavConfig();

  return (
    <div className='hidden md:flex md:gap-3'>
      <Link to='/' className='mr-2 lg:mr-6'>
        <Icons.logo className='h-20 w-20 lg:h-24 lg:w-24 text-primary' />
      </Link>
      <nav className='flex items-center gap-1 xl:gap-3'>
        {mainNav.map((link) => {
          return (
            <Link
              key={link.label}
              hash={link.hash}
              activeOptions={{ exact: true, includeHash: true }}
              activeProps={{ className: 'text-primary' }}
              className='transition-colors font-bold'
            >
              <Button
                variant='ghost'
                className='text-md font-Lato hover:text-primary md:p-3'
              >
                {link.label}
              </Button>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
