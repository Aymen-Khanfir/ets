import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { useForm, FieldMeta } from '@tanstack/react-form';
import { useLoaderData } from '@tanstack/react-router';
import { ZodValidator, zodValidator } from '@tanstack/zod-form-adapter';
import { AlertOctagon } from 'lucide-react';
import { toast } from 'sonner';

import { useCharacterLimit } from '@/hooks/use-character-limit.ts';

import {
  stripPhoneNumber,
  formatPhoneNumber,
} from '@/lib/helpers/format-phone-number.ts';
import { isFromTunisia } from '@/lib/is-from-tunisia.ts';

import {
  ContactFormType,
  createContactSchema,
} from '@/schema/contact-schema.ts';
import emailjs from '@emailjs/browser';

import { Button } from '@/components/ui/button.tsx';
import { Input } from '@/components/ui/input.tsx';
import { Label } from '@/components/ui/label.tsx';
import { Textarea } from '@/components/ui/textarea.tsx';

export function ContactForm() {
  const { t } = useTranslation();
  const { countryData, error } = useLoaderData({ from: '/' });
  const formRef = useRef<HTMLFormElement>(null);

  const contactSchema = createContactSchema(t);

  const {
    characterCount,
    handleChange,
    minLength: limit,
  } = useCharacterLimit({ minLength: 50 });

  const { Field, Subscribe, reset, handleSubmit } = useForm<
    ContactFormType,
    ZodValidator
  >({
    defaultValues: {
      username: '',
      email: '',
      phone: '+216 ',
      message: '',
      country: countryData?.country ?? '',
    },
    validatorAdapter: zodValidator(),
    validators: {
      onChange: contactSchema,
    },
    asyncDebounceMs: 500,
    onSubmitInvalid: () => {
      toast.error(t('contact.form.submit', { context: 'invalid' }));
    },
    onSubmit: async ({ value }) => {
      value = { ...value, phone: stripPhoneNumber(value.phone) };

      if (formRef.current) {
        try {
          await emailjs.send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            value.country === 'TN'
              ? import.meta.env.VITE_APP_EMAILJS_TUNISIAN_TEMPLATE_ID
              : import.meta.env.VITE_APP_EMAILJS_FOREIGN_TEMPLATE_ID,
            {
              ...value,
              country: countryData?.name,
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
          );

          toast.success(t('contact.form.submit', { context: 'success' }));

          reset();
        } catch (error) {
          console.error('EmailJS Error:', error);
          toast.error(t('contact.form.email', { context: 'service_error' }));
        }
      }
    },
  });

  if (error) {
    return (
      <section className='grid items-center h-full'>
        <div className='flex flex-col items-center justify-center p-8 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto'>
          <AlertOctagon className='w-16 h-16 text-yellow-500 mb-4' />
          <h2 className='text-2xl font-bold text-gray-800 mb-2'>
            {t('contact.form.error')}
          </h2>
          <p className='text-gray-600 text-center'>
            {t('contact.form.error', { context: 'description' })}
          </p>
        </div>
      </section>
    );
  }

  return (
    <form
      className='flex flex-col gap-4'
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        handleSubmit().catch(() => {
          console.error('Error submitting form');
        });
      }}
      ref={formRef}
    >
      <Field name='username'>
        {(field) => (
          <div>
            <Label
              htmlFor={field.name}
              className='text-secondary dark:text-secondary-foreground'
            >
              {t('contact.form.name')}
            </Label>
            <Input
              id={field.name}
              className='border-white text-white placeholder:text-white'
              name={field.name}
              autoComplete={field.name}
              value={field.state.value}
              onChange={(e) => {
                field.handleChange(e.target.value);
              }}
            />
            <FieldInfo fieldMeta={field.state.meta} />
          </div>
        )}
      </Field>

      <Field name='email'>
        {(field) => (
          <div className={isFromTunisia(countryData) ? 'hidden' : ''}>
            <Label
              htmlFor={field.name}
              className='text-secondary dark:text-secondary-foreground'
            >
              {t('contact.form.email')}
            </Label>
            <Input
              id={field.name}
              name={field.name}
              type='email'
              autoComplete={field.name}
              value={field.state.value}
              className='border-white text-white placeholder:text-white'
              onChange={(e) => {
                field.handleChange(e.target.value);
              }}
            />
            <FieldInfo fieldMeta={field.state.meta} />
          </div>
        )}
      </Field>

      <Field name='phone'>
        {(field) => (
          <div className={!isFromTunisia(countryData) ? 'hidden' : ''}>
            <Label
              htmlFor={field.name}
              className='text-secondary dark:text-secondary-foreground'
            >
              {t('contact.form.phone')}
            </Label>
            <Input
              id={field.name}
              name={field.name}
              type='tel'
              className='border-white text-white placeholder:text-white'
              maxLength={15}
              autoComplete='phone'
              value={field.state.value}
              onChange={(e) => {
                field.handleChange(formatPhoneNumber(e.target.value));
              }}
            />
            <FieldInfo fieldMeta={field.state.meta} />
          </div>
        )}
      </Field>

      <Field name='message'>
        {(field) => (
          <div>
            <Label
              htmlFor={field.name}
              className='flex justify-between mb-1 text-secondary dark:text-secondary-foreground'
            >
              {t('contact.form.message')}
              <p
                id='characters-left-textarea'
                className='text-right text-xs text-muted-foreground tabular-nums'
                role='status'
                aria-live='polite'
              >
                {t('contact.form.message', {
                  count: limit - characterCount,
                  context: 'characters_left',
                })}
              </p>
            </Label>
            <Textarea
              id={field.name}
              name={field.name}
              className='border-white text-white placeholder:text-white min-h-[150px]'
              autoComplete={field.name}
              maxLength={200}
              value={field.state.value}
              onChange={(e) => {
                handleChange(e);
                field.handleChange(e.target.value);
              }}
            />
            <FieldInfo fieldMeta={field.state.meta} />
          </div>
        )}
      </Field>

      <div className='flex justify-end gap-6'>
        <Button
          type='button'
          variant='outline'
          onClick={() => {
            reset();
          }}
        >
          {t('contact.form.reset')}
        </Button>
        <Subscribe
          selector={(state) => ({
            isValidating: state.isValidating,
            canSubmit: state.canSubmit,
            isSubmitting: state.isSubmitting,
          })}
        >
          {({ canSubmit, isValidating, isSubmitting }) => (
            <Button
              className='bg-white text-[#081394] hover:bg-gray-100'
              disabled={!canSubmit || isValidating}
              type='submit'
            >
              {isSubmitting
                ? t('contact.form.is_sending')
                : t('contact.form.submit')}
            </Button>
          )}
        </Subscribe>
      </div>
    </form>
  );
}

function FieldInfo({ fieldMeta }: { fieldMeta: FieldMeta | undefined }) {
  const { t } = useTranslation();
  if (!fieldMeta) return null;

  return (
    <>
      {fieldMeta.isTouched && fieldMeta.errors.length
        ? fieldMeta.errors.map((error, index) => (
            <p key={index} className='text-destructive text-sm mt-1'>
              {error}
            </p>
          ))
        : null}
      {fieldMeta.isValidating ? t('contact.form.is_validating') : null}
    </>
  );
}
