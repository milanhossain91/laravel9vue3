import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from "@vitejs/plugin-vue";
const mix = require('laravel-mix');

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls:{
                    base: null,
                    includeAbsolute: false,
                }
            }
        }),
    ],
});

mix.js('resources/js/bc-manage/create-edit.js', 'public/js/bc-manage/create-edit.js');
