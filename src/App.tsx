import { I18nextProvider } from 'react-i18next';

import { createRouter, RouterProvider } from '@tanstack/react-router';

import { useLocales } from '@/hooks/use-locales.ts';

import { useAllLanguages } from '@/config/language-config.tsx';
import { ThemeProvider } from '@/context/theme-context.tsx';
import i18n from '@/i18n/i18n.ts';

import { Toaster } from '@/components/ui/sonner.tsx';

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
  const allLanguages = useAllLanguages();
  const { dir } = useLocales(allLanguages);

  return (
    <I18nextProvider i18n={i18n} defaultNS={'translation'}>
      <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
        <RouterProvider router={router} />
        <Toaster position={dir === 'ltr' ? 'bottom-right' : 'bottom-left'} />
      </ThemeProvider>
    </I18nextProvider>
  );
}

export default App;
