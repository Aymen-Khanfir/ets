import { toast } from 'sonner';

import { useLocales } from '@/hooks/use-locales.ts';
import { usePopover } from '@/hooks/use-popover.ts';

import { cn } from '@/lib/utils.ts';

import { useAllLanguages } from '@/config/language-config.tsx';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover.tsx';

export function SwitchLanguage({
  align = 'end',
}: {
  align?: 'start' | 'end' | 'center';
}) {
  const allLanguages = useAllLanguages();
  const { open, onOpenChange, close } = usePopover();
  const { currentLanguage, changeLanguage } = useLocales(allLanguages);

  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger className='rounded-xl'>
        {currentLanguage.icon}
      </PopoverTrigger>
      <PopoverContent
        className='flex flex-col gap-0.5 w-48 px-1 py-2'
        align={align}
        onMouseLeave={() => {
          onOpenChange(false);
        }}
      >
        {allLanguages.map((lang) => (
          <div
            key={lang.value}
            className={cn(
              'flex items-center gap-4 px-1.5 py-1.5 hover:rounded hover:bg-accent cursor-pointer',
              currentLanguage.value === lang.value &&
                'bg-accent hover:bg-accent/80'
            )}
            onClick={() => {
              close();
              changeLanguage(lang.value).catch(() => {
                toast.error('Failed to change language', {
                  position: 'top-center',
                });
              });
            }}
          >
            {lang.icon}
            <h3 className='flex-1'>{lang.label}</h3>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
}
