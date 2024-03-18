import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
    ],
    define: {
        'process.env': process.env
    },
    build: {
        lib: {
            entry: 'src/main.jsx',
            formats: ['es']
        },
        cssCodeSplit: true, // inline css within the bundled js
        rollupOptions: {
            input: "src/main.jsx",
            preserveEntrySignatures: true,
            // external: ['react', 'react-dom'],
            output: {
                format: 'es',
                entryFileNames: 'main.js',
                esModule: true,
                // globals: {
                //     react: 'React',
                //     'react-dom': 'ReactDOM'
                // },
            }
        },
    },
    server: {
        port: 3000,
    },
})
