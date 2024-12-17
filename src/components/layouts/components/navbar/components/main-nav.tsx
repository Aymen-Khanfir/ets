import { Link } from '@tanstack/react-router';

import { Icons } from '@/components/shared/icons.tsx';
import { Button } from '@/components/ui/button.tsx';
import { useNavConfig } from '@/config/nav-config.tsx';

export function MainNav() {
  const { mainNav } = useNavConfig();

  return (
    <div className='hidden md:flex lg:gap-3'>
      <Link to='/' className='me-2 lg:me-6'>
        <Icons.logo className='h-20 w-20 lg:h-24 lg:w-24 text-primary' />
      </Link>
      <nav className='flex items-center gap-1 xl:gap-3'>
        {mainNav.map((link) => {
          return (
            <Link
              key={link.label}
              hash={link.hash}
              to={'/'}
              activeOptions={{ exact: true, includeHash: true }}
              activeProps={{ className: 'text-primary' }}
              className='transition-colors font-bold'
            >
              <Button
                variant='ghost'
                className='sm:text-[0.8rem] lg:text-[1rem] font-Lato hover:text-primary lg:p-3'
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
