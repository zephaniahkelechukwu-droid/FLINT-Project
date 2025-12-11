import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // --- ADDED POSTCSS CONFIGURATION FOR TAILWIND ---
  css: {
    postcss: {
      plugins: [
        // These plugins tell Vite how to process the Tailwind classes
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  // ------------------------------------------------
});