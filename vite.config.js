import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/e-plantShopping/',  // Keep this for GitHub Pages routing
  plugins: [react()],
  build: {
    outDir: 'dist',  // Output directory
    assetsDir: '',   // This ensures assets are placed directly inside dist, not in a separate folder
    rollupOptions: {
      output: {
        assetFileNames: '[name]-[hash].[ext]',  // Ensure assets are named properly without extra prefixes
        chunkFileNames: '[name]-[hash].js',
        entryFileNames: '[name]-[hash].js',
      },
    },
  },
});