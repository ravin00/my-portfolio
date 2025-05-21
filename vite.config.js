import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio/', // Must exactly match your GitHub repository name
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        // Adding publicPath to ensure assets are loaded correctly
        // This is a backup approach
        manualChunks: undefined
      }
    }
  }
})