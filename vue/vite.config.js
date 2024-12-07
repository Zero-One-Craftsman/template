/*
 * @Author: 林崽爱吃糖 oncwnuPHraQE2iCPc4byZrcyKQ8s@git.weixin.qq.com
 * @Date: 2024-12-06 22:02:22
 * @LastEditors: 林崽爱吃糖 oncwnuPHraQE2iCPc4byZrcyKQ8s@git.weixin.qq.com
 * @LastEditTime: 2024-12-07 21:03:58
 * @FilePath: \template-vue\vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})

