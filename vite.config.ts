import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';
import eslint from '@rollup/plugin-eslint';

export default defineConfig({
  server: {
    port: 3000
  },
  base: './',
  build: {
    minify: 'terser',
    terserOptions: {
      compress: true,
      keep_classnames: true,
      keep_fnames: true,
    },
  },
  plugins: [
    eslint({
      useEslintrc: true,
      fix: true,
    }) as any,
    VitePluginNode({
      adapter: 'nest',
      appPath: './src/main.ts',
      exportName: 'app',
      tsCompiler: 'swc',
      swcOptions: {
        minify: true,
      }
    })
  ],
});