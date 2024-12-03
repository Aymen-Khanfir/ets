import { useTranslation } from 'react-i18next';

import { IconBrandFacebook } from '@tabler/icons-react';
import { Link } from '@tanstack/react-router';
import { MessageCircle } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-[url('/placeholder.svg')] bg-cover bg-center py-16">
      <div className='container mx-auto px-4 flex flex-col items-center gap-8'>
        {/* Logo */}
        <div className='text-[#14137D] font-bold text-3xl text-center'>
          ETS LOUATI
          <br />
          COLLAGE
        </div>

        {/* Tagline */}
        <div className='text-center text-xl tracking-wide'>
          {t('footer.description')}
        </div>

        {/* Copyright */}
        <div className='text-[#14137D] text-center'>
          {t('footer.copyright', { year: new Date().getFullYear() })}
        </div>

        {/* Social Links */}
        <div className='flex gap-4'>
          <Link
            to='/'
            className='bg-[#14137D] text-white p-2 rounded-full hover:bg-[#0f0f60] transition-colors'
          >
            {/*<Facebook className='w-6 h-6' />*/}
            <IconBrandFacebook stroke={2} />
            <span className='sr-only'>Facebook</span>
          </Link>
          <Link
            to='/'
            className='bg-[#14137D] text-white p-2 rounded-full hover:bg-[#0f0f60] transition-colors'
          >
            <MessageCircle className='w-6 h-6' />
            <span className='sr-only'>WhatsApp</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
