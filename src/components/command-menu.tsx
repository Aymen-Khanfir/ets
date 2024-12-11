import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { Wallpaper } from 'lucide-react';

import { useLocales } from '@/hooks/use-locales.ts';

import { cn } from '@/lib/utils.ts';

import { Button } from '@/components/ui/button.tsx';
import {
  CommandItem,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandDialog,
} from '@/components/ui/command.tsx';
import { useNavConfig } from '@/config/nav-config.tsx';
import { type DialogProps } from '@radix-ui/react-dialog';

export function CommandMenu({ ...props }: DialogProps) {
  const [open, setOpen] = React.useState(false);
  const { sectorsNav } = useNavConfig();
  const { t } = useTranslation();
  const { dir } = useLocales();

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
          'relative h-8 w-full justify-start bg-muted/50 text-sm font-normal text-muted-foreground shadow-none md:w-40 lg:w-56 xl:w-64'
        )}
        onClick={() => {
          setOpen(true);
        }}
        {...props}
      >
        <span className='font-Lato hidden md:inline-flex lg:inline-flex'>
          {t('search')}
        </span>
        <span className='font-Lato inline-flex md:hidden lg:hidden'>
          {t('search', { context: 'large_text' })}
        </span>
        <kbd
          className={cn(
            'font-Lato pointer-events-none absolute top-1/2 -translate-y-1/2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 text-[10px] font-medium opacity-100 sm:flex',
            dir === 'ltr' ? 'right-[0.3rem]' : 'left-[0.3rem]'
          )}
        >
          <span className='text-xs'>⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder={t('search', { context: 'large_text' })} />
        <CommandList>
          <CommandEmpty>{t('search', { context: 'no_result' })}</CommandEmpty>
          <CommandGroup heading={t('main_nav.sectors')}>
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
