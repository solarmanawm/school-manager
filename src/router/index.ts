import {createRouter, createWebHistory, Router} from 'vue-router'
// @ts-ignore
import {nextTick} from "vue";
import {useAuthStore} from '../store/auth';
import {useUIStore} from "../store/ui";
import routes from './routes'
import routeNames from "./names";

export default () => {
    /**
     * @type {Router}
     */
    const router = createRouter({
        history: createWebHistory(),
        routes,
    });

    router.afterEach(async (to, from) => {
        const title = ''
        await nextTick(() => {
            document.title = title;
        });
    });

    router.beforeEach((to, from) => {
        console.log('beforeEach')
        const authStore = useAuthStore()
        const uiStore = useUIStore()
        const {requiresAuth, title} = to.meta || {}
        if (title) {
            uiStore.title = title
        }
        if (!authStore.isAuthenticated && requiresAuth) {
            return {
                name: routeNames.login,
            }
        }
        if (authStore.isAuthenticated && [
            routeNames.login,
            routeNames.register,
        ].includes(to.name!.toString())) {
            return {
                name: routeNames.home,
            }
        }
    })

    return router;
};
