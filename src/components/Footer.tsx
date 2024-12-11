import { useTranslation } from 'react-i18next';

import { IconBrandFacebook } from '@tabler/icons-react';
import { MessageCircle } from 'lucide-react';

import { Icons } from '@/components/icons.tsx';
import { LinkPreview } from '@/components/ui/link-preview.tsx';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-[url('/images/footer_bg.png')] bg-cover bg-center py-8">
      <div className='container mx-auto px-4 flex flex-col items-center gap-8'>
        {/* Logo */}
        <Icons.logo className='w-full text-primary' />

        {/* Tagline */}
        <div className='text-center text-xl tracking-wide uppercase text-black'>
          {t('footer.description')}
        </div>

        {/* Copyright */}
        <div className='text-[#14137D] text-center'>
          {t('footer.copyright', { year: new Date().getFullYear() })}
        </div>

        {/* Social Links */}
        <div className='flex gap-4'>
          <LinkPreview
            url='https://www.facebook.com/people/ETS-Louati-collage/61561505849810/'
            className='bg-background hover:bg-accent hover:text-accent-foreground p-2 rounded-full text-[#081394] transition-colors'
          >
            <IconBrandFacebook stroke={2} />
            <span className='sr-only'>Facebook</span>
          </LinkPreview>

          <LinkPreview
            url='https://web.whatsapp.com/'
            className='bg-background hover:bg-accent hover:text-accent-foreground p-2 rounded-full text-[#081394] transition-colors'
          >
            <MessageCircle className='w-6 h-6' />
            <span className='sr-only'>WhatsApp</span>
          </LinkPreview>
        </div>
      </div>
    </footer>
  );
}
