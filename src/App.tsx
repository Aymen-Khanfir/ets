import { createRouter, RouterProvider } from '@tanstack/react-router';

import { ThemeProvider } from '@/context/theme-context.tsx';

import { routeTree } from './routeTree.gen';

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultNotFoundComponent: () => <div>Path Not Found :(</div>,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
