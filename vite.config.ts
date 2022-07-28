import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    root: path.join(__dirname, "src/frontend"),
    build: {
        outDir: '../../public'
    },
    define: {
        APP_ROOT: path.dirname(__filename),
    }
})
