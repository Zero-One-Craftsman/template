/*
 * @Author: 林崽爱吃糖 oncwnuPHraQE2iCPc4byZrcyKQ8s@git.weixin.qq.com
 * @Date: 2024-12-07 20:58:17
 * @LastEditors: 林崽爱吃糖 oncwnuPHraQE2iCPc4byZrcyKQ8s@git.weixin.qq.com
 * @LastEditTime: 2024-12-07 20:58:31
 * @FilePath: \template-vue\src\store\theme.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// src/stores/theme.ts
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    theme: localStorage.getItem('theme') || 'light', // 默认从 localStorage 获取主题，若没有则为 'light'
  }),
  actions: {
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', this.theme) // 保存到 localStorage
      document.body.classList.remove('light-mode', 'dark-mode')
      document.body.classList.add(this.theme === 'dark' ? 'dark-mode' : 'light-mode') // 更新 body 的主题类
    },
  },
})
