import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/e-plantShopping/',  // Keep the base path for GitHub Pages
  plugins: [react()],
  build: {
    outDir: 'dist',          // Ensure that the build outputs go to the 'dist' folder
    assetsDir: '',           // Place assets in the root of the dist folder, not inside an extra 'assets' subfolder
    rollupOptions: {
      output: {
        assetFileNames: '[name]-[hash].[ext]',  // This ensures that asset names do not include the `/e-plantShopping/` prefix
        chunkFileNames: '[name]-[hash].js',     // Same here for chunk files
        entryFileNames: '[name]-[hash].js',     // Same here for entry JS files
      },
    },
  },
});