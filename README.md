
1. npm i vue@next

2.npm i @vitejs/plugin-vue


3 . Begin by installing Laravel Mix 

npm install laravel-mix --save-dev

4.vite.comfig.js

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

mix.js('resources/js/category/list.js', 'public/js/category/list.js');