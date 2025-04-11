import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Set this to the root path for GitHub Pages
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure the build goes into 'dist'
    assetsDir: '', // Ensure assets go into the root of the 'dist' folder
    rollupOptions: {
      output: {
        assetFileNames: '[name]-[hash].[ext]', // This will output assets with proper names without any base path
        chunkFileNames: '[name]-[hash].js',
        entryFileNames: '[name]-[hash].js',
      },
    },
  },
});