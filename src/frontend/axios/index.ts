import axios, {AxiosInstance, AxiosRequestConfig} from 'axios'
import {Router} from 'vue-router'

// import {useAuthStore} from '../store/auth'
// import routeNames from "../router/names";

const url = process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : ''

const config: AxiosRequestConfig = {
    baseURL: `${url}/api/v1`,
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    },
}

const requestInterceptor = () => async (config: AxiosRequestConfig) => {
    const accessToken = window.localStorage.getItem('accessToken');
    if (accessToken && typeof config !== 'undefined') {
        // eslint-disable-next-line no-param-reassign
        config.headers!.Authorization = `Bearer ${accessToken}`;
    }
    return config;
}

export const defineAxiosInstanceInterceptors = (router: Router) => {
    axiosInstance.interceptors.request.use(requestInterceptor(), (error) => {
        return Promise.reject(error);
    });

    axiosInstance.interceptors.response.use((response) => {
        return response;
    }, async (error) => {
        // const authStore = useAuthStore();
        if (typeof error === 'object' && (error.response.status === 401 || error.response.status === 403)) {
            // authStore.updateAuthState();
            // await router.push({
            //     name: routeNames.login,
            // });
        }
        return Promise.reject(error);
    });
}

const axiosInstance: AxiosInstance = axios.create(config)

export default axiosInstance
