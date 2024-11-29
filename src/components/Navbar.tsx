import { Link } from '@tanstack/react-router';

import { CommandMenu } from '@/pages/components/command-menu.tsx';

import { Icons } from '@/components/icons.tsx';
import { ModeToggle } from '@/components/mode-toggle.tsx';

export default function Navbar() {
  return (
    <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur overflow-hidden supports-[backdrop-filter]:bg-background/60 dark:border-border'>
      <div className='flex h-20 items-center px-4'>
        <MainNav />
        {/*<MobileNav />*/}
        <div className='flex flex-1 items-center justify-between gap-2 md:justify-end'>
          <div className='w-full flex-1 md:w-auto md:flex-none'>
            <CommandMenu />
          </div>
          <nav className='flex items-center gap-0.5'>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}

function MainNav() {
  return (
    <div className='mr-4 hidden md:flex'>
      <Link href='/' className='mr-4 lg:mr-6'>
        <Icons.logo className='h-24 w-24' />
      </Link>
      <nav className='flex items-center gap-4 text-sm xl:gap-6'>
        <Link
          hash='hero'
          className='transition-colors hover:text-foreground/80'
        >
          Accueil
        </Link>
        <Link
          hash='sectors'
          className='transition-colors hover:text-foreground/80'
        >
          Secteurs
        </Link>
        <Link
          hash='about'
          className='transition-colors hover:text-foreground/80'
        >
          A propos
        </Link>
        <Link
          hash='quality'
          className='transition-colors hover:text-foreground/80'
        >
          Qualité
        </Link>
        <Link
          hash='contact'
          className='transition-colors hover:text-foreground/80'
        >
          Contact
        </Link>
      </nav>
    </div>
  );
}
