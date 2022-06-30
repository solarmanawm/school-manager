import Home from '../components/pages/Home.vue'
import Login from '../components/pages/Login.vue'
import Register from '../components/pages/Register.vue'

import routeNames from './names'

const routes: any[] = [
    {
        path: '/',
        name: routeNames.home,
        component: Home,
        meta: {
            requiresAuth: false,
        },
    },
    {
        path: '/sign-in',
        name: routeNames.login,
        component: Login,
        meta: {
            requiresAuth: false,
        },
    },
    {
        path: '/sign-up',
        name: routeNames.register,
        component: Register,
        meta: {
            requiresAuth: false,
        },
    },
]

export default routes
