/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
    plugins: [vue(), vueJsx()],
    test: {
        globals: true,
        environment: 'happy-dom',
        transformMode: {
            web: [/.[tj]sx$/]
        }
    },
    server: {
        host: '0.0.0.0'
    }
})
