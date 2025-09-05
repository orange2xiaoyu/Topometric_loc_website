import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import mdx from '@mdx-js/rollup'
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    mdx({
      jsxImportSource: 'vue',
      remarkPlugins: [
        remarkMath,
        remarkGfm,
      ],
      rehypePlugins: [
        rehypeKatex,
      ],
    }),
  ],
  base:'/topometric_loc_website',
  server: {
    host: '0.0.0.0',  // 允许外部访问
    port: 3000,       // 指定端口号
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
