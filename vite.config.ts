import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Clean version relying on postcss.config.js
export default defineConfig({
  plugins: [react()],
});