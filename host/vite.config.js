import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@padcom/vite-plugin-federation'

export default defineConfig({
  build: {
    target: 'esnext',
  },
  plugins: [
    vue(),
    federation({ debug: true }),
  ],
})
