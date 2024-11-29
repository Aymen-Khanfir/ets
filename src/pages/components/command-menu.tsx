import * as React from 'react';

import { Wallpaper } from 'lucide-react';

import { cn } from '@/lib/utils';

import { sectorConfig } from '@/config/sectors.ts';
import { type DialogProps } from '@radix-ui/react-dialog';

import { Button } from '@/components/ui/button.tsx';
import {
  CommandItem,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandDialog,
} from '@/components/ui/command.tsx';

export function CommandMenu({ ...props }: DialogProps) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || e.key === '/') {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => {
      document.removeEventListener('keydown', down);
    };
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <Button
        variant='outline'
        className={cn(
          'relative h-8 w-full justify-start bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-56 xl:w-64'
        )}
        onClick={() => {
          setOpen(true);
        }}
        {...props}
      >
        <span className='hidden lg:inline-flex'>Search sector...</span>
        <span className='inline-flex lg:hidden'>Search...</span>
        <kbd className='pointer-events-none absolute right-[0.3rem] top-1/2 -translate-y-1/2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex'>
          <span className='text-xs'>⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder='Search Sectors...' />
        <CommandList>
          <CommandEmpty>No results found!</CommandEmpty>
          <CommandGroup heading='Sectors'>
            {sectorConfig.mainNav
              .filter((navItem) => !navItem.external)
              .map((navItem) => (
                <CommandItem
                  key={navItem.href}
                  value={navItem.title}
                  onSelect={() => {
                    runCommand(() => {
                      console.log('Navigating to', navItem.href);
                    });
                  }}
                >
                  <Wallpaper />
                  {navItem.title}
                </CommandItem>
              ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
