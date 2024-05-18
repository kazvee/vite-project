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
    // The target default of 'modules' is an alias for this array for modern browsers that support native es modules and dynamic imports:
    //  ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14']
    // We can target older browsers like this:
    target: 'es2015',
    // target: 'esnext',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        another: resolve(__dirname, 'another-route/index.html'),
      },
    },
  },
});
