import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { dcsContentPlugin, dcsSeoPlugin } from '@duffcloudservices/cms-react/plugins';
export default defineConfig({
    plugins: [
        react(),
        dcsContentPlugin(),
        dcsSeoPlugin(),
    ],
    base: '/',
    build: {
        outDir: 'dist',
        emptyOutDir: true,
    },
});
