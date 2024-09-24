import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(viteConfig, defineConfig({
  test: {
    include: [
        'src/**/*.spec.ts',
        'test/**/*.e2e-spec.ts',
    ],
    coverage: {
      reporter: ['lcov', 'text', 'html', 'json'],
    },
  }
}));