import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { IconBrandFacebook } from '@tabler/icons-react';
import { Link } from '@tanstack/react-router';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button.tsx';
import { Input } from '@/components/ui/input.tsx';
import { Textarea } from '@/components/ui/textarea.tsx';

export default function Contact() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  return (
    <section
      className='bg-primary dark:bg-secondary transition-colors py-20'
      id='contact'
    >
      <div className='container mx-auto px-4'>
        <div className='grid md:grid-cols-2 gap-12'>
          <div className='space-y-4'>
            <h2 className='text-background dark:text-primary transition-all duration-300 text-4xl md:text-5xl font-bold'>
              {t('contact.title')}
            </h2>

            <p className='text-lg font-Parkinsans font-medium text-muted-foreground dark:text-accent-foreground'>
              {t('contact.description')}
            </p>

            <div className='space-y-6'>
              <h3 className='text-2xl font-bold text-background dark:text-primary'>
                {t('contact.socials.title')}
              </h3>

              <div className='space-y-4'>
                <Link
                  href='tel:+21628774410'
                  className='flex items-center gap-3 hover:text-gray-200 transition-colors'
                >
                  <Phone className='w-5 h-5' />
                  +21628774410
                </Link>

                <Link
                  href='mailto:contact@ets-louaticollage.com'
                  className='flex items-center gap-3 hover:text-gray-200 transition-colors'
                >
                  <Mail className='w-5 h-5' />
                  contact@ets-louaticollage.com
                </Link>

                <div className='flex items-center gap-3 hover:text-gray-200 transition-colors'>
                  <MapPin className='w-5 h-5 flex-shrink-0' />
                  {t('contact.socials.location')}
                </div>
              </div>

              <div className='flex gap-4 pt-4'>
                <Link
                  href='/public'
                  className='bg-white p-2 rounded-full text-[#081394] hover:bg-gray-100 transition-colors'
                >
                  <IconBrandFacebook stroke={2} />
                  <span className='sr-only'>Facebook</span>
                </Link>
                <Link
                  to='/'
                  className='bg-white p-2 rounded-full text-[#081394] hover:bg-gray-100 transition-colors'
                >
                  <MessageCircle className='w-6 h-6' />
                  <span className='sr-only'>WhatsApp</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className='space-y-6'>
              <div>
                <label htmlFor='name' className='block text-white mb-2'>
                  {t('contact.form.name')}:
                </label>
                <Input
                  id='name'
                  type='text'
                  required
                  className='w-full bg-white/10 border-white/20 text-white placeholder:text-white/50'
                  value={formData.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFormData((prev) => ({ ...prev, name: e.target.value }));
                  }}
                />
              </div>

              <div>
                <label htmlFor='email' className='block text-white mb-2'>
                  {t('contact.form.email')}:
                </label>
                <Input
                  id='email'
                  type='email'
                  required
                  className='w-full bg-white/10 border-white/20 text-white placeholder:text-white/50'
                  value={formData.email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFormData((prev) => ({ ...prev, email: e.target.value }));
                  }}
                />
              </div>

              <div>
                <label htmlFor='message' className='block text-white mb-2'>
                  {t('contact.form.message')}:
                </label>
                <Textarea
                  id='message'
                  required
                  className='w-full bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[150px]'
                  value={formData.message}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                    setFormData((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }));
                  }}
                />
              </div>

              <Button
                className='bg-white text-[#081394] hover:bg-gray-100 w-full md:w-auto'
                onClick={() =>
                  toast.success('Votre message a été envoyé avec succès')
                }
              >
                {t('contact.form.send')}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
