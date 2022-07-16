import routeNames from './names'

const routes: any[] = [
    {
        path: '/',
        name: routeNames.home,
        component: () => import('../components/pages/Home.vue'),
        meta: {
            requiresAuth: false,
            title: 'Home',
        },
    },
    {
        path: '/sign-in',
        name: routeNames.login,
        component: () => import('../components/pages/Login.vue'),
        meta: {
            requiresAuth: false,
            title: 'Sign In',
        },
    },
    {
        path: '/sign-up',
        name: routeNames.register,
        component: () => import('../components/pages/Register.vue'),
        meta: {
            requiresAuth: false,
            title: 'Sign Up',
        },
    },
    {
        path: '/dashboard',
        name: routeNames.dashboard,
        component: () => import('../components/pages/Dashboard.vue'),
        meta: {
            requiresAuth: true,
            title: 'Dashboard',
        },
    },
    {
        path: '/fees',
        component: () => import('../components/pages/Fees.vue'),
        name: routeNames.fees,
        meta: {
            requiresAuth: true,
            title: 'Fees',
        },
        children: [
            {
                path: '',
                name: routeNames.fees,
                component: () => import('../components/pages/FeesList.vue'),
                meta: {
                    requiresAuth: true,
                    title: 'All Fee',
                },
            },
            {
                path: ':id',
                name: routeNames.fee,
                component: () => import('../components/pages/FeesItemDetails.vue'),
                meta: {
                    requiresAuth: true,
                    title: 'Single Fee',
                },
            },
        ],
    },
    {
        path: '/students',
        name: routeNames.students,
        component: () => import('../components/pages/Students.vue'),
        meta: {
            requiresAuth: true,
            title: 'Students',
        },
    },
    {
        path: '/families',
        name: routeNames.families,
        component: () => import('../components/pages/Families.vue'),
        meta: {
            requiresAuth: true,
            title: 'Families',
        },
    },
]

export default routes
