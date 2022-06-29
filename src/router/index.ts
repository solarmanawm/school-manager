import {createRouter, createWebHistory, Router} from 'vue-router'
import {nextTick} from "vue";
import {useAuthStore} from '../store/auth';
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
        const authStore = useAuthStore();
        const {requiresAuth} = to.meta || {requiresAuth: false};
        if (!authStore.isAuthenticated && requiresAuth) {
            return {
                name: routeNames.login,
            };
        }
        if (authStore.isAuthenticated && [
            routeNames.login,
            routeNames.register,
        ].includes(to.name!.toString())) {
            return {
                name: routeNames.dashboard,
            };
        }
    });

    return router;
};
