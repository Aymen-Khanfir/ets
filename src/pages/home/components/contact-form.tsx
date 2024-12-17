import { useTranslation } from 'react-i18next';

import { useForm, FieldMeta } from '@tanstack/react-form';
import { useLoaderData } from '@tanstack/react-router';
import { ZodValidator, zodValidator } from '@tanstack/zod-form-adapter';
import { toast } from 'sonner';

import { useCharacterLimit } from '@/hooks/use-character-limit.ts';

import {
  stripPhoneNumber,
  formatPhoneNumber,
} from '@/lib/helpers/format-phone-number.ts';
import { isFromTunisia } from '@/lib/is-from-tunisia.ts';

import { Button } from '@/components/ui/button.tsx';
import { Input } from '@/components/ui/input.tsx';
import { Label } from '@/components/ui/label.tsx';
import { Textarea } from '@/components/ui/textarea.tsx';
import {
  ContactFormType,
  createContactSchema,
} from '@/schema/contact-schema.ts';

export function ContactForm() {
  const { t } = useTranslation();
  const { countryData, error } = useLoaderData({ from: '/' });

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
      toast.error(t('contact.form.submit', { context: 'invalid' }), {
        richColors: true,
      });
    },
    onSubmit: ({ value }) => {
      value = { ...value, phone: stripPhoneNumber(value.phone) };

      toast.success(t('contact.form.submit', { context: 'success' }), {
        richColors: true,
        description: <pre>{JSON.stringify(value, null, 2)}</pre>,
      });
    },
  });

  if (error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error}</p>
      </div>
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
              className='border-white text-white placeholder:text-white'
              type='email'
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
              id='phone'
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
                ? t('contact.form.is_validating')
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
