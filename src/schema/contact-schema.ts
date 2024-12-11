import { z } from 'zod';

import { isFromTunisia } from '@/lib/isFromTunisia.ts';

const ContactSchema = z
  .object({
    username: z
      .string()
      .min(3, 'Your name must contain at least 3 characters long'),
    email: z.string().optional(),
    phone: z.string().optional(),
    message: z
      .string()
      .min(50, { message: 'Your message must contain at least 50 characters' }),
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
      message: 'Phone number must be composed from 8 numbers',
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
      message: 'Invalid email format.',
      path: ['email'],
    }
  );

type ContactFormType = z.infer<typeof ContactSchema>;

export { ContactSchema, type ContactFormType };
