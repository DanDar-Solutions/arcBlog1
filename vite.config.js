import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  plugins: [react()],
  root: resolve(__dirname, './src'),
  publicDir: resolve(__dirname, './public'),
  build: {
    outDir: '../dist',
    assetsDir: 'assets',
    emptyOutDir: true
  },
  server: {
    port: 5000,
    open: true
  },
  css: {
    devSourcemap: true
  }
}) 