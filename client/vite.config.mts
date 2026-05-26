/// <reference types='vitest' />
import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../node_modules/.vite/client',
  plugins: [angular(), nxViteTsPaths()],
  test: {
    name: 'client',
    watch: false,
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    setupFiles: ['src/test-setup.ts'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: '../coverage/client',
      provider: 'v8' as const,
      include: ['src/app/**/*.ts'],
      exclude: ['src/**/*.spec.ts', 'src/test-setup.ts'],
      thresholds: {
        lines: 90,
        functions: 90,
        branches: 90,
        statements: 90,
      },
    },
  },
}));
