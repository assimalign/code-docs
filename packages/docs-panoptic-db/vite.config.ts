import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'


export default defineConfig({
    server: {
        port: 5002
    },
    plugins: [
        vue(),
        federation({

        })
    ],
    build: {
        minify: false,
        target: ["chrome89", "edge89", "firefox89", "safari15"]
    }
})