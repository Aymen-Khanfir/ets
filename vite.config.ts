import react from '@vitejs/plugin-react';

import path from 'path';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
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
