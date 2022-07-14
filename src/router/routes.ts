import Home from '../components/pages/Home.vue'
import Login from '../components/pages/Login.vue'
import Register from '../components/pages/Register.vue'
import Dashboard from '../components/pages/Dashboard.vue'
import Families from '../components/pages/Families.vue'
import Students from '../components/pages/Students.vue'
import Fees from '../components/pages/Fees.vue'

import routeNames from './names'

const routes: any[] = [
    {
        path: '/',
        name: routeNames.home,
        component: Home,
        meta: {
            requiresAuth: false,
            title: 'Home',
        },
    },
    {
        path: '/sign-in',
        name: routeNames.login,
        component: Login,
        meta: {
            requiresAuth: false,
            title: 'Sign In',
        },
    },
    {
        path: '/sign-up',
        name: routeNames.register,
        component: Register,
        meta: {
            requiresAuth: false,
            title: 'Sign Up',
        },
    },
    {
        path: '/dashboard',
        name: routeNames.dashboard,
        component: Dashboard,
        meta: {
            requiresAuth: true,
            title: 'Dashboard',
        },
    },
    {
        path: '/fees',
        name: routeNames.fees,
        component: Fees,
        meta: {
            requiresAuth: true,
            title: 'Fees',
        },
    },
    {
        path: '/students',
        name: routeNames.students,
        component: Students,
        meta: {
            requiresAuth: true,
            title: 'Students',
        },
    },
    {
        path: '/families',
        name: routeNames.families,
        component: Families,
        meta: {
            requiresAuth: true,
            title: 'Families',
        },
    },
]

export default routes
