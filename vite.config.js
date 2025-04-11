import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/e-plantShopping/',  // Keep this as it is for GitHub Pages
  plugins: [react()],
  build: {
    outDir: 'dist',             // Output directory
    assetsDir: '',              // Ensures assets go directly in the root of dist/ without the /e-plantShopping/ prefix
    rollupOptions: {
      output: {
        // Ensures that assets (JS, CSS) have the correct paths
        assetFileNames: '[name]-[hash].[ext]',
        chunkFileNames: '[name]-[hash].js',
        entryFileNames: '[name]-[hash].js',
      },
    },
  },
});