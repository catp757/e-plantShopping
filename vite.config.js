import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/e-plantShopping/',  // This should be correct
  plugins: [react()],
  build: {
    outDir: 'dist',  // Make sure the build output is in 'dist'
    assetsDir: '',    // Ensures assets are placed in the correct directory without /e-plantShopping/ prefix
  },
});