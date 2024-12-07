import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from './lang/i18n'
import './assets/styles/light-theme.scss'
import './assets/styles/dark-theme.scss'

const app = createApp(App)
app.use(i18n)
app.mount('#app')
