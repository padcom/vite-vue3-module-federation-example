import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

import { dependencies } from './package.json'

export default defineConfig({
  build: {
    target: 'esnext',
  },
  plugins: [
    vue(),
    federation({
      remotes: {
        library: 'http://localhost:5001/assets/remoteEntry.js',
      },
      shared: dependencies,
    }),
  ],
})
