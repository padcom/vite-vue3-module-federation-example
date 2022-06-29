import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    vue(),
    federation({
      remotes: {
        'library': 'http://localhost:5001/assets/remoteEntry.js',
      },
      shared: [
        'vue'
      ],
    }),
  ],
})
