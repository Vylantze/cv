import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import {
  configDefaults,
  coverageConfigDefaults
} from 'vitest/config';

const testExcludes = [
  '/dist/**',
  'src/main.tsx',
  'public/**',
];

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/resume/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@test': path.resolve(__dirname, './tests'),
    },
  },
  test: {
    ...configDefaults,
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/vitest.setup.ts',
    silent: true,
    css: true,
    mockReset: true,
    restoreMocks: true,
    clearMocks: true,
    exclude: [
      ...configDefaults.exclude,
      ...testExcludes
    ],
    coverage: {
      ...coverageConfigDefaults,
      exclude: [
        ...coverageConfigDefaults.exclude,
        ...testExcludes,
      ]
    }
  }
});

