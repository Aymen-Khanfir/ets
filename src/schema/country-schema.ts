import { z } from 'zod';

const CountryResponseSchema = z.object({
  country: z.string(),
  country_3: z.string(),
  name: z.string(),
});

type CountryResponse = z.infer<typeof CountryResponseSchema>;

export { type CountryResponse, CountryResponseSchema };
