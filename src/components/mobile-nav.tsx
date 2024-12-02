import { Link } from '@tanstack/react-router';

import { navConfig } from '@/config/nav-config.tsx';

import { Icons } from '@/components/icons.tsx';
import { Button } from '@/components/ui/button.tsx';
import { DialogTitle, DialogDescription } from '@/components/ui/dialog.tsx';
import { ScrollArea } from '@/components/ui/scroll-area.tsx';
import {
  Sheet,
  SheetClose,
  SheetHeader,
  SheetFooter,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet.tsx';

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant='ghost'
          className='-ml-2 mr-2 h-8 w-8 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden'
        >
          <Icons.hamburgerMenu />
          <span className='sr-only'>Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side='left' className='w-[300px] sm:w-[400px] p-0'>
        <div className='flex flex-col h-full'>
          <SheetHeader className='px-6 border-b text-left'>
            <DialogTitle>
              <Link to='/'>
                <SheetClose asChild>
                  <Icons.logo className='text-primary' />
                </SheetClose>
              </Link>
            </DialogTitle>
            <DialogDescription className='sr-only'>
              This is a description of the dialog&#39;s purpose.
            </DialogDescription>
          </SheetHeader>
          <ScrollArea className='px-6 py-1 h-full'>
            <nav className='flex flex-col gap-2'>
              {navConfig.mainNav.map((link) => {
                return (
                  <Link
                    hash={link.hash}
                    key={link.label}
                    activeOptions={{ exact: true, includeHash: true }}
                    activeProps={{ className: 'text-primary' }}
                    className='transition-colors font-bold'
                  >
                    <SheetClose asChild>
                      <Button
                        variant='ghost'
                        className='w-full justify-start items-center hover:text-primary px-1'
                      >
                        {link.icon}
                        {link.label}
                      </Button>
                    </SheetClose>
                  </Link>
                );
              })}
            </nav>
          </ScrollArea>
          <SheetFooter className='p-4 border-t'>
            <SheetClose asChild>
              <Button className='w-full'>Change Language</Button>
            </SheetClose>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
}
