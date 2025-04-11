import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/e-plantShopping/', // This ensures assets are correctly served from this base path
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory
    assetsDir: '', // Ensure assets are placed in the root of the 'dist' folder
    rollupOptions: {
      output: {
        assetFileNames: '[name]-[hash].[ext]',  // Ensures assets are named correctly
        chunkFileNames: '[name]-[hash].js',
        entryFileNames: '[name]-[hash].js',
      },
    },
  },
});