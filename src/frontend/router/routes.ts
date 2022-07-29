import routeNames from './names'

const routes: any[] = [
    {
        path: '/',
        name: routeNames.home,
        component: () => import('../components/HomeMain.vue'),
        meta: {
            requiresAuth: false,
            title: 'home',
        },
    },
    {
        path: '/sign-in',
        name: routeNames.login,
        component: () => import('../components/LoginMain.vue'),
        meta: {
            requiresAuth: false,
            title: 'login',
        },
    },
    {
        path: '/sign-up',
        name: routeNames.register,
        component: () => import('../components/RegisterMain.vue'),
        meta: {
            requiresAuth: false,
            title: 'register',
        },
    },
    {
        path: '/dashboard',
        name: routeNames.dashboard,
        component: () => import('../components/DashboardMain.vue'),
        meta: {
            requiresAuth: true,
            title: 'dashboard',
        },
    },
    {
        path: '/fees',
        component: () => import('../components/FeesMain.vue'),
        name: routeNames.fees,
        meta: {
            requiresAuth: true,
            title: 'fees',
        },
        children: [
            {
                path: '',
                name: routeNames.fees,
                component: () => import('../components/FeesList.vue'),
                meta: {
                    requiresAuth: true,
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
            title: 'students',
        },
        children: [
            {
                path: '',
                name: routeNames.students,
                component: () => import('../components/StudentsList.vue'),
                meta: {
                    requiresAuth: true,
                },
            },
            {
                path: ':id',
                name: routeNames.student,
                component: () => import('../components/StudentsItemDetails.vue'),
                meta: {
                    requiresAuth: true,
                },
            },
        ],
    },
    {
        path: '/families',
        name: routeNames.families,
        component: () => import('../components/FamiliesMain.vue'),
        meta: {
            requiresAuth: true,
            title: 'families',
        },
        children: [
            {
                path: '',
                name: routeNames.families,
                component: () => import('../components/FamiliesList.vue'),
                meta: {
                    requiresAuth: true,
                },
            },
            {
                path: ':id',
                name: routeNames.family,
                component: () => import('../components/FamiliesItemDetails.vue'),
                meta: {
                    requiresAuth: true,
                },
            },
        ],
    },
]

export default routes
