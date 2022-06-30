import './index.css'

import {createApp} from 'vue'
import {createPinia} from 'pinia';

import defineRouter from './router';
import {defineAxiosInstanceInterceptors} from "./axios";
import {useAuthStore} from './store/auth';

import App from './App.vue'


const app = createApp(App)
app.use(createPinia())

Promise.resolve().then(() => {
    const authStore = useAuthStore();
    return authStore.initAuth();
}).then(() => {
    const router = defineRouter();
    defineAxiosInstanceInterceptors(router);
    // app.use(i18n);
    app.use(router);
    app.mount('#app');
});
