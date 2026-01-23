import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: 'src', // Standard Vite looks for index.html in root, but to match image structure often requires config tweaks or moving index.html. 
  // However, the image shows public/index.html which is CRA style. 
  // To make Vite work with index.html in public is non-standard.
  // I will write this config assuming we might want to point root to where index.html is, 
  // OR we stick to standard Vite and I put index.html in root PROJECT folder despite the image showing public/.
  // A safer bet for a "working" base is index.html in root. 
  // BUT the user asked for *this* base (image).
  // I will leave standard vite config for now and we'll place files where they asked.
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  publicDir: '../public', // If root is src, public is up one level
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  }
})
