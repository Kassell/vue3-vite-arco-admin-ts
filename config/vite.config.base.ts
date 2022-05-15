import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

import configArcoResolverPlugin from './plugin/arcoResolver';   // 按需引入arco的组件
import configStyleImportPlugin from './plugin/styleImport';     // 按需引入arco的样式
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    configArcoResolverPlugin(),
    configStyleImportPlugin(),

  ],
  resolve: {  // 文件系统路径别名
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, '../src'),
      },
      {
        find: 'assets',
        replacement: resolve(__dirname, '../src/assets'),
      },
    ]
  }
})
