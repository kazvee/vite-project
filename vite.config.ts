import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import postCssNesting from 'postcss-nesting';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [postCssNesting()],
    },
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        another: resolve(__dirname, 'another-route/index.html'),
      },
    },
  },
});
