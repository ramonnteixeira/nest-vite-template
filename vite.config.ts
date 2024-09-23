import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';
import eslint from '@rollup/plugin-eslint';

export default defineConfig({
  server: {
    port: 3000
  },
  build: {
    rollupOptions: {
        input: 'src/main.ts',
        output: {
          compact: true,
          name: 'main',
          format: 'module',
        },
    },
  },
  plugins: [
    eslint({
      useEslintrc: true,
      fix: true,
    }),
    ...VitePluginNode({
      adapter: 'nest',
      appPath: './src/main.ts',
      exportName: 'app',
      tsCompiler: 'swc',
      initAppOnBoot: true,
      swcOptions: {
        minify: true,
      }
    })
  ],
});