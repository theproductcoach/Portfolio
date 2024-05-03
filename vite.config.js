import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Portfolio/',  // Ensure this matches the GitHub Pages subpath
  build: {
    outDir: 'dist',  // This should match the directory name you're deploying
  },
  // Add other configurations as needed
});