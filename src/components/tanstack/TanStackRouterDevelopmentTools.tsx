import React from 'react';

import { isProduction } from '@/lib/is-production.ts';

export const TanStackRouterDevelopmentTools = isProduction
  ? (): null => null
  : React.lazy(() =>
      import('@tanstack/router-devtools').then((result) => ({
        default: result.TanStackRouterDevtools,
      }))
    );
