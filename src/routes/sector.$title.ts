import { createFileRoute } from '@tanstack/react-router';

import Sector from '@/pages/sector/Sector.tsx';

export const Route = createFileRoute('/sector/$title')({
  component: Sector,
});
