import js from '@eslint/js';
import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier';
import jest from 'eslint-plugin-jest';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  js.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,spec.js,test.js}'],
    plugins: { jest },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
    },
    rules: {
      ...jest.configs.recommended.rules,
    },
  },
  {
    files: ['**/webpack*.js', '**/babel.config.js'],
    languageOptions: {
      globals: globals.node,
    },
  },
  eslintConfigPrettier,
]);
