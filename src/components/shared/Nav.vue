<template>
    <ul v-if="authStore.isAuthenticated">
        <li v-for="route of authRoutes">
            <router-link :to="route.path">{{ route.name }}</router-link>
        </li>
    </ul>
    <ul v-else>
        <li v-for="route of nonAuthRoutes">
            <router-link :to="route.path">{{ route.name }}</router-link>
        </li>
    </ul>
</template>

<script setup lang="ts">
import routes from "../../router/routes";
import {useAuthStore} from "../../store/auth";

const authStore = useAuthStore()
const authRoutes = routes.filter((route) => typeof route.meta === 'object' && route.meta.requiresAuth)
const nonAuthRoutes = routes.filter((route) => typeof route.meta === 'undefined' || !route.meta.requiresAuth)
const name = 'Nav'
</script>

<style scoped>

</style>
