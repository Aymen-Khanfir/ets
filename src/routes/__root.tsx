import {
  Outlet,
  createRootRoute,
  ScrollRestoration,
} from '@tanstack/react-router';

import { TanStackRouterDevelopmentTools } from '@/components/TanStackRouterDevelopmentTools.tsx';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div>
      <ScrollRestoration />
      <Outlet />
      <TanStackRouterDevelopmentTools />
    </div>
  );
}
