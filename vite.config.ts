import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// This configuration is clean and relies on postcss.config.js for Tailwind processing,
// avoiding the "require" command that crashes the Vercel build.

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});