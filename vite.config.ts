import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',   // 👈 critical for GitHub Pages
  server: {
    port: 3000,
    open: true,           // Automatically open browser
    hmr: {
      overlay: true       // Show errors in browser overlay
    },
    watch: {
      usePolling: true,   // Better file watching on some systems
      interval: 100       // Check for changes every 100ms
    }
  },
  build: {
    watch: {
      include: ['src/**'],
      exclude: ['node_modules/**', 'dist/**']
    }
  }
})