import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import perfectionist from 'eslint-plugin-perfectionist';
import pluginRouter from '@tanstack/eslint-plugin-router';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      ...pluginRouter.configs['flat/recommended'],
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      react,
      perfectionist,
    },
    rules: {
      // react
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        2,
        { allowConstantExport: true },
      ],
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      'react/prop-types': 2,

      // Perfectionist plugin rules
      'perfectionist/sort-exports': [1, { order: 'asc', type: 'line-length' }],
      'perfectionist/sort-named-imports': [
        1,
        { order: 'asc', type: 'line-length' },
      ],
      'perfectionist/sort-named-exports': [
        1,
        { order: 'asc', type: 'line-length' },
      ],
      'perfectionist/sort-imports': [
        1,
        {
          order: 'asc',
          type: 'natural', // line-length, 'alphabetical', natural, none
          newlinesBetween: 'always',
          groups: [
            'type',
            'react',
            ['external', 'builtin', 'tanstack', 'tabler-icons', 'lucide-icons'],
            'custom-features',
            'custom-routes',
            'custom-types',
            'custom-hooks',
            'custom-utils',
            'internal',
            'custom-components',
            'custom-pages',
            'custom-auth',
            'style',
            ['parent', 'sibling', 'index'],
            ['parent-type', 'sibling-type', 'index-type'],
            'object',
            'unknown',
          ],
          customGroups: {
            value: {
              react: '^react',
              tanstack: '@tanstack/*',
              'lucide-icons': 'lucide-react',
              'tabler-icons': '@tabler/*',
              'custom-features': '@/features/',
              'custom-auth': '@/auth/*',
              'custom-hooks': '@/hooks/*',
              'custom-utils': '@/lib/*',
              'custom-types': '@/types/*',
              'custom-routes': '@/routes/*',
              'custom-pages': '@/pages/*',
              'custom-components': '@/sections/*',
            },
          },
          internalPattern: ['@/*'],
        },
      ],
    },
  }
);
