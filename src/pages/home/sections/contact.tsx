import { useTranslation } from 'react-i18next';

import { IconBrandFacebook } from '@tabler/icons-react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

import { LinkPreview } from '@/components/ui/link-preview.tsx';

import { ContactForm } from '@/pages/home/components/contact-form.tsx';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section
      className='bg-primary dark:bg-secondary py-10 sm:py-14'
      id='contact'
    >
      <div className='w-11/12 mx-auto transition-all duration-300'>
        <div className='grid sm:grid-cols-2 gap-12'>
          <div className='space-y-3'>
            <h2 className='text-background dark:text-primary font-serif text-2xl md:text-3xl lg:text-5xl font-bold capitalize transition-all'>
              {t('contact.title')}
            </h2>

            <p className='text-secondary dark:text-accent-foreground text-sm md:text-base lg:text-xl transition-all'>
              {t('contact.description')}
            </p>

            <div className='space-y-5'>
              <h3 className='text-background dark:text-primary font-serif text-xl md:text-2xl lg:text-3xl font-bold capitalize transition-all mt-5'>
                {t('contact.socials.title')}
              </h3>

              <div className='space-y-4'>
                <a
                  href='tel:+21628774410'
                  className='text-secondary dark:text-accent-foreground hover:underline flex items-center gap-3 transition-colors w-fit rtl:text-left'
                >
                  <Phone className='w-5 h-5' />
                  <p dir='ltr'>28 774 410</p>
                </a>
                <a
                  href='mailto:contact@ets-louaticollage.com'
                  className='text-secondary dark:text-accent-foreground hover:underline flex items-center gap-3 transition-colors w-fit'
                >
                  <Mail className='w-5 h-5' />
                  contact@ets-louaticollage.com
                </a>
                <a
                  href='https://www.google.com/maps/search/?api=1&query=34.783870, 10.797482'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-secondary dark:text-accent-foreground hover:underline flex items-center gap-3 transition-colors w-fit'
                >
                  <MapPin className='w-5 h-5 flex-shrink-0' />
                  {t('contact.socials.location')}
                </a>
              </div>

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
          </div>

          {/* Contact Form */}
          <div className='xl:w-4/5 xl:justify-self-center'>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

/*
* <form className='space-y-6'>
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
* */
