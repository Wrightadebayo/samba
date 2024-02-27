import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

// vite.config.js
export default {
  plugins: [react()],
  // Other configuration options...
  assetsInclude: ['**/*.JPG', '**/*.png', '**/*.jpg', '**/*.svg'], // Include .JPG files
};

