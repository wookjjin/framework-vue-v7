/* eslint-disable perfectionist/sort-imports */
import './main.css'
import ui from '@nuxt/ui/vue-plugin'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'
import { router } from '~/router'
import App from './App.vue'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)
app.use(router)
app.use(ui)
app.use(pinia)
app.mount('#app')
