import routeNames from './names'

const routes: any[] = [
    {
        path: '/',
        name: routeNames.home,
        component: () => import('../components/HomeMain.vue'),
        meta: {
            requiresAuth: false,
            title: 'Home',
        },
    },
    {
        path: '/sign-in',
        name: routeNames.login,
        component: () => import('../components/LoginMain.vue'),
        meta: {
            requiresAuth: false,
            title: 'Sign In',
        },
    },
    {
        path: '/sign-up',
        name: routeNames.register,
        component: () => import('../components/RegisterMain.vue'),
        meta: {
            requiresAuth: false,
            title: 'Sign Up',
        },
    },
    {
        path: '/dashboard',
        name: routeNames.dashboard,
        component: () => import('../components/DashboardMain.vue'),
        meta: {
            requiresAuth: true,
            title: 'Dashboard',
        },
    },
    {
        path: '/fees',
        component: () => import('../components/FeesMain.vue'),
        name: routeNames.fees,
        meta: {
            requiresAuth: true,
            title: 'Fees',
        },
        children: [
            {
                path: '',
                name: routeNames.fees,
                component: () => import('../components/FeesList.vue'),
                meta: {
                    requiresAuth: true,
                    title: 'All Fee',
                },
            },
            {
                path: ':id',
                name: routeNames.fee,
                component: () => import('../components/FeesItemDetails.vue'),
                meta: {
                    requiresAuth: true,
                },
            },
        ],
    },
    {
        path: '/students',
        name: routeNames.students,
        component: () => import('../components/StudentsMain.vue'),
        meta: {
            requiresAuth: true,
            title: 'Students',
        },
    },
    {
        path: '/families',
        name: routeNames.families,
        component: () => import('../components/FamiliesMain.vue'),
        meta: {
            requiresAuth: true,
            title: 'Families',
        },
    },
]

export default routes
