import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import postcssPxToViewport from "postcss-px-to-viewport-8-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue'],
      dts: 'src/auto-import.d.ts',
    }),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  css: {
    postcss: {
      plugins: [
        postcssPxToViewport({
          viewportWidth: 375,
        }),
      ]
    }
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    host: true,
    proxy: {
      "/api": {
        target: 'https://mock.apifox.cn/m1/2414200-0-default',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  },
})
