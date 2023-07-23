import { createApp } from 'vue'
import App from './App.vue'
import '@/styles/normalize.scss'
import router from '@/router'

const app = createApp(App)
app.use(router).mount('#app')
