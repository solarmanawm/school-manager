<template>
    <ul
            v-if="authStore.isAuthenticated"
            class="flex"
            :class="ulClassList"
    >
        <li
                v-for="route of authRoutes"
                class="capitalize"
                :class="liClassList"
        >
            <router-link
                    :to="route.path"
                    @click="update"
            >{{ $t(`nav.${route.name}`) }}</router-link>
        </li>
        <li
                class="capitalize"
                :class="liClassList"
        >
            <a
                    href="#"
                    @click.prevent="logout"
            >{{ $t(`nav.logout`) }}</a>
        </li>
    </ul>
    <ul
            v-else
            class="flex"
            :class="ulClassList"
    >
        <li
                v-for="route of nonAuthRoutes"
                class="capitalize"
                :class="liClassList"
        >
            <router-link
                    :to="route.path"
                    @click="update"
            >{{ $t(`nav.${route.name}`) }}</router-link>
        </li>
    </ul>
</template>

<script setup lang="ts">
// @ts-ignore
import {computed, defineProps, defineEmits, withDefaults} from 'vue'
import {useRouter} from "vue-router";
import routes from "../router/routes";
import {useAuthStore} from "../store/auth";
import service from "../service";
import routeNames from '../router/names'

interface Props {
    type: 'desktop' | 'mobile';
}

interface Emits {
    (event: 'update'): void;
}

const router = useRouter()
const authStore = useAuthStore()
const emits = defineEmits<Emits>()
const props = withDefaults(defineProps<Props>(), {
    type: 'desktop',
})
const authRoutes = routes.filter((route) => typeof route.meta === 'object' && route.meta.requiresAuth)
const nonAuthRoutes = routes.filter((route) => typeof route.meta === 'undefined' || !route.meta.requiresAuth)
const isDesktop = computed(() => props.type === 'desktop')
const ulClassList = computed(() => ({
    'flex-row': isDesktop.value,
    'flex-col': !isDesktop.value,
}))
const liClassList = computed(() => ({
    'first:ml-0 ml-3': isDesktop.value,
    'first:mt-0 mt-3': !isDesktop.value,
}))
const name = 'Nav'
const update = () => {
    emits('update')
}
const logout = () => {
    update()

    return service.auth.logout().then(() => {
        authStore.updateAuthState();
    }).then(() => router.push({
        name: routeNames.login,
    }))
}
</script>
