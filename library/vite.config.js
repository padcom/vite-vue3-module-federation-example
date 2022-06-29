import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  build: {
    target: 'esnext'
  },
  plugins: [
    vue(),
    federation({
      name: 'my_library',
      exposes: {
        './remote-simple-button': './src/MyButton.vue',
      },
      shared: [
        'vue'
      ]
    })
  ]
})
