import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import path from 'path';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';

import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    TanStackRouterVite(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint ./src/**/*.{ts,tsx}',
        useFlatConfig: true,
        dev: { logLevel: ['error'] },
      },
      overlay: {
        position: 'tr',
        initialIsOpen: false,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
