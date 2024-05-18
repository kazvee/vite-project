import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import postCssNesting from 'postcss-nesting';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import myPlugin from './plugins/my-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    myPlugin(),
    react(),
    splitVendorChunkPlugin(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
  css: {
    postcss: {
      plugins: [postCssNesting()],
    },
  },
  build: {
    // The target default of 'modules' is an alias for this array for modern browsers that support native es modules and dynamic imports:
    // ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14']
    // We can target older browsers like this:
    // target: 'es2015',
    // But we don't need to specify 'target' when using `legacy` plugin.
    // target: 'esnext',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        another: resolve(__dirname, 'another-route/index.html'),
      },
    },
  },
});
