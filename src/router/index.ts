import {createRouter, createWebHistory, Router} from 'vue-router'
// @ts-ignore
import {nextTick} from "vue";
import {useAuthStore} from '../store/auth';
import {useUIStore} from "../store/ui";
import {useDataStore} from "../store/data";
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
        const authStore = useAuthStore()
        const uiStore = useUIStore()
        const dataStore = useDataStore()
        const {requiresAuth, title} = to.meta || {}

        if (title) {
            uiStore.title = title
        }

        if (!authStore.isAuthenticated && requiresAuth) {
            return {
                name: routeNames.login,
            }
        }

        if (to.name === routeNames.family) {
            const family = dataStore.getFamilyById(to.params.id)

            if (!family) {
                return {
                    name: routeNames.dashboard,
                }
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
