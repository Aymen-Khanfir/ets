import { TFunction } from 'i18next';
import { z } from 'zod';

import { isFromTunisia } from '@/lib/is-from-tunisia.ts';

export const createContactSchema = (t: TFunction) =>
  z
    .object({
      username: z.string().min(3, t('contact.form.name_error', { count: 3 })),
      email: z.string().optional(),
      phone: z.string().optional(),
      message: z
        .string()
        .min(50, t('contact.form.message_error', { count: 50 })),
      country: z.string(),
    })
    .refine(
      (data) => {
        if (isFromTunisia({ country: data.country })) {
          return z.string().length(15).safeParse(data.phone).success;
        }
        return true;
      },
      {
        message: t('contact.form.phone_error'),
        path: ['phone'],
      }
    )
    .refine(
      (data) => {
        if (!isFromTunisia({ country: data.country })) {
          return z.string().email().safeParse(data.email).success;
        }
        return true;
      },
      {
        message: t('contact.form.email_error'),
        path: ['email'],
      }
    );

export type ContactFormType = z.infer<ReturnType<typeof createContactSchema>>;
