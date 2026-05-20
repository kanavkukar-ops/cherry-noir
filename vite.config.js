import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [],
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: { main: './index.html' }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})
