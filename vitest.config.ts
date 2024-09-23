import { defineConfig, mergeConfig } from 'vitest/config'
import { VitePluginNode } from 'vite-plugin-node'

export default defineConfig({
  test: {
    include: [
        'src/**/*.spec.ts',
        'test/**/*.e2e-spec.ts',
    ],
    coverage: {
      reporter: ['lcov', 'text', 'html', 'json'],
    },
  },
  plugins: [
    ...VitePluginNode({
      adapter: 'nest',
      appPath: './src/main.ts',
      exportName: 'app',
      tsCompiler: 'swc',
    })
  ]
})