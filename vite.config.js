import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],  // Here is where the 'react' import is used
  base: '/Portfolio/',
  build: {
    outDir: 'docs',
  },
  // Add other configurations as needed
});