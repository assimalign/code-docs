import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation"

export default defineConfig({
    server: {
        host: '127.0.0.1',
        port: 5000
    },
    plugins: [
        vue(),
        federation({
            name: 'docs-host',
            remotes: {
                'docs-panoptic-net': 'http://localhost:5003/assets/remoteEntry.js'
            },
            shared: ['vue']
        })
    ],
    build: {
        target: 'esnext'
    }
})