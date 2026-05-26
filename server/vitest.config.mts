import { defineConfig } from 'vitest/config';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
  root: __dirname,
  cacheDir: '../node_modules/.vitest/server',
  plugins: [nxViteTsPaths()],
  test: {
    name: 'server',
    watch: false,
    globals: true,
    environment: 'node',
    include: ['src/**/*.{test,spec}.{ts,js,mts,mjs,cjs,cts}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: '../coverage/server',
      provider: 'v8',
      thresholds: {
        lines: 90,
        functions: 90,
        branches: 90,
        statements: 90,
      },
    },
  },
});
