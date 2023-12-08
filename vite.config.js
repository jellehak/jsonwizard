import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue({
      script: {
        defineModel: true
      }
    })
  ],
  server: {
    proxy: {
      '/devices': {
        target: 'http://localhost:3000',
      }
    }
  }
})
