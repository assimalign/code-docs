import { defineConfig, Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import markdownIt from "./.vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/, /\.svg$/]
    }),
    markdownIt()
  ]
})
