import * as React from 'react';

import { Wallpaper } from 'lucide-react';

import { cn } from '@/lib/utils.ts';

import { useNavConfig } from '@/config/nav-config.tsx';
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
  const { sectorsNav } = useNavConfig();

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
        variant='secondary'
        className={cn(
          'relative h-8 w-full justify-start bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-56 xl:w-64'
        )}
        onClick={() => {
          setOpen(true);
        }}
        {...props}
      >
        <span className='font-Lato hidden md:inline-flex lg:inline-flex'>
          Search
        </span>
        <span className='font-Lato inline-flex md:hidden lg:hidden'>
          Search Sectors
        </span>
        <kbd className='font-Lato pointer-events-none absolute right-[0.3rem] top-1/2 -translate-y-1/2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 text-[10px] font-medium opacity-100 sm:flex'>
          <span className='text-xs'>⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder='Search Sectors' />
        <CommandList>
          <CommandEmpty>No results found!</CommandEmpty>
          <CommandGroup heading='Sectors'>
            {sectorsNav
              .filter((sector) => !sector.external)
              .map((sector) => (
                <CommandItem
                  key={sector.href}
                  value={sector.title}
                  onSelect={() => {
                    runCommand(() => {
                      console.log('Navigating to', sector.href);
                    });
                  }}
                >
                  <Wallpaper />
                  {sector.title}
                </CommandItem>
              ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
