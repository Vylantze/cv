import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { globalIgnores } from 'eslint/config';
import stylistic from '@stylistic/eslint-plugin';

export default tseslint.config([
  globalIgnores(['dist']),
  {
    plugins: {
      '@stylistic': stylistic,
    },
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      'semi': ['error', 'always'],
      'quotes': ['error', 'single', { 'avoidEscape': true }],

      // stylistic
      '@stylistic/indent': ['error', 2],
      '@stylistic/quotes': ['error', 'single', { 'avoidEscape': true }],

      // spacing related
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/no-whitespace-before-property': 'error',
      '@stylistic/rest-spread-spacing': ['error', 'never'],
      '@stylistic/space-before-blocks': 'error',
      '@stylistic/space-before-function-paren': 'error',
      '@stylistic/spaced-comment': ['error', 'always'],
      '@stylistic/space-infix-ops': 'error',
      '@stylistic/switch-colon-spacing': ['error', { 'after': true, 'before': false }],
    }
  },
])
