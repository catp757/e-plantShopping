import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/e-plantShopping/',  // Keep base path for GitHub Pages
  plugins: [react()],
  build: {
    outDir: 'dist',           // Ensure that output goes into dist
    assetsDir: '',            // Make sure assets are placed without `/e-plantShopping/` prefix
    rollupOptions: {
      output: {
        // Ensure that the base path handling is correct during the build process
        assetFileNames: 'assets/[name]-[hash].[ext]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
  },
});