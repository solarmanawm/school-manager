<template>
    <ul
            v-if="authStore.isAuthenticated"
            class="flex"
    >
        <li
                v-for="route of authRoutes"
                class="first:ml-0 ml-3 capitalize"
        >
            <router-link :to="route.path">{{ $t(`nav.${route.name}`) }}</router-link>
        </li>
        <li class="ml-3 capitalize">
            <a href="#" @click.prevent="logout">{{ $t(`nav.logout`) }}</a>
        </li>
    </ul>
    <ul
            v-else
            class="flex"
    >
        <li
                v-for="route of nonAuthRoutes"
                class="first:ml-0 ml-3"
        >
            <router-link :to="route.path">{{ route.name }}</router-link>
        </li>
    </ul>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import routes from "../router/routes";
import {useAuthStore} from "../store/auth";
import service from "../service";
import routeNames from '../router/names'

const router = useRouter()
const authStore = useAuthStore()
const authRoutes = routes.filter((route) => typeof route.meta === 'object' && route.meta.requiresAuth)
const nonAuthRoutes = routes.filter((route) => typeof route.meta === 'undefined' || !route.meta.requiresAuth)
const name = 'Nav'

const logout = () => {
    return service.auth.logout().then(() => {
        authStore.updateAuthState();
    }).then(() => router.push({
        name: routeNames.login,
    }))
}
</script>
