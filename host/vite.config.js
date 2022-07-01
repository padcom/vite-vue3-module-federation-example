import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'
import packageJson from './package.json' assert { type: 'json' }

export default defineConfig({
  build: {
    target: 'esnext',
  },
  plugins: [
    vue(),
    federation({
      name: 'host',
      remotes: {
        'library': 'http://localhost:5001/assets/remoteEntry.js'
      },
      shared: packageJson.dependencies
    })
  ],
})
