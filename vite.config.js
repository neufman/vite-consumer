import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    exclude: ['vite-lib']
  },
  // Same error on browser with following
  // build: {
  //   rollupOptions: {
  //     external: ['google-libphonenumber'],
  //   }
  // }
})
