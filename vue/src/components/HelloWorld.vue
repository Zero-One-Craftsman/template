<!--
 * @Author: 林崽爱吃糖 oncwnuPHraQE2iCPc4byZrcyKQ8s@git.weixin.qq.com
 * @Date: 2024-12-06 22:02:22
 * @LastEditors: 林崽爱吃糖 oncwnuPHraQE2iCPc4byZrcyKQ8s@git.weixin.qq.com
 * @LastEditTime: 2024-12-07 21:01:45
 * @FilePath: \template-vue\src\components\HelloWorld.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { ref,onMounted  } from 'vue'
import { useI18n } from 'vue-i18n'

// 通过 theme 数据来控制当前主题，默认为 light
    const theme = ref(localStorage.getItem('theme') || 'light')

    // 切换主题
    const toggleTheme = () => {
      theme.value = theme.value === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', theme.value) // 保存到 localStorage
      document.documentElement.setAttribute('theme-data', theme.value) // 更新 html 标签的 theme-data 属性
    }

    // 初始化时设置主题
    onMounted(() => {
      document.documentElement.setAttribute('theme-data', theme.value)
    })


    const { locale } = useI18n()

    const changeLanguage = (lang) => {
      locale.value = lang // 切换语言
    }
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button @click="toggleTheme">{{ $t('themeBtn') }}</button>
    <button @click="changeLanguage('zh')">{{ $t('zh') }}</button>
    <button @click="changeLanguage('en')">{{ $t('en') }}</button>
      <p>{{ $t('message.hello') }}</p>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped lang="scss">

.read-the-docs {
  color: #888;
}
button:not(:last-child){
  margin-right: 4px;
}
</style>
