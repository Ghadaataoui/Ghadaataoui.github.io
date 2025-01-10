import { defineConfig } from 'vite';

export default defineConfig({
  root: '.', // Set the root directory for the project
  build: {
    outDir: 'dist', // Specify the output directory
    emptyOutDir: true, // Clear the output directory before building
    rollupOptions: {
      input: './index.html', // Ensure Vite processes the correct entry point
    },
  },
});
