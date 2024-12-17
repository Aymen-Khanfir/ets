import { createFileRoute } from '@tanstack/react-router';

import {
  type CountryResponse,
  CountryResponseSchema,
} from '@/schema/country-schema.ts';

import Home from '@/pages/home/Home.tsx';

export const Route = createFileRoute('/')({
  loader: async (): Promise<{
    countryData?: CountryResponse;
    error?: string;
  }> => {
    try {
      const response = await fetch('https://get.geojs.io/v1/ip/country.json');
      const data: unknown = await response.json();

      const countryData = CountryResponseSchema.parse(data);

      return { countryData };
    } catch (error) {
      console.error('Error validating country response:', error);
      return { error: 'Failed to fetch or validate country data' };
    }
  },
  component: Home,
});
