import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),vueJsx(),AutoImport({
    imports:['vue'],
    dts:"src/auto-import.d.ts"
  })],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/css/bem.scss";`
      }
    }
  }
})
