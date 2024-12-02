import { useContext } from 'react';

import { ThemeProviderContext } from '@/context/theme-context';

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  const toggleTheme = () => {
    context.setTheme(context.theme === 'light' ? 'dark' : 'light');
  };

  return { ...context, toggleTheme };
};
