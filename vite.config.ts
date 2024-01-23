import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@lib': path.resolve('./src/lib'),
        },
    },

    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000/',
                changeOrigin: true,
            },
        },
    },
})
