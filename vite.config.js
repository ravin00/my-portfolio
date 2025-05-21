import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio/',  // Ensure this exactly matches your repo name
  build: {
    outDir: 'dist',
    // Ensure assets use relative paths
    assetsInlineLimit: 0,
    cssCodeSplit: false, // Generate a single CSS file
    rollupOptions: {
      output: {
        // Force clean URLs
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
})