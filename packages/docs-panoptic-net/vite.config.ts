import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation"


export default defineConfig({
    server: {
        host: '127.0.0.1',
        port: 5003
    },
    plugins: [
        vue(),
        federation({
            name: 'docs-panoptic-net',
            filename: 'remoteEntry.js',
            exposes: {
                './docs': './src/components/docs.vue'
            },
            shared: ['vue']
        })
    ],
    build: {
        target: 'esnext'
    }
})