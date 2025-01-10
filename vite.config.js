import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // For custom domain
  build: {
    rollupOptions: {
      input: './main.js',
    },
  },
});
