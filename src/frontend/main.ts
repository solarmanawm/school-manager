import './index.css'

import {createApp} from 'vue'
import {createPinia} from 'pinia'
import {createI18n} from "vue-i18n"

import defineRouter from './router'
import {defineAxiosInstanceInterceptors} from "./axios"
import {useAuthStore} from './store/auth'

import messages from './i18n'

import App from './App.vue'

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages,
})

const app = createApp(App)
app.use(createPinia())

Promise.resolve().then(() => {
    const authStore = useAuthStore()
    return authStore.initAuth()
}).then(() => {
    const router = defineRouter()
    defineAxiosInstanceInterceptors(router)
    app.use(router)
    app.use(i18n)
    app.mount('#app')
});
