import { defineConfig } from 'vite'

export default defineConfig({
  base: '/ras-coiffeur/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true
  }
})
