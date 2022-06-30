import {defineStore} from 'pinia'

import {DecodeAccessTokenRequestInterface} from '../classes/FirebaseAuthService'
import RequestBuilder from "../classes/RequestBuilder";

export const useAuthStore = defineStore('auth', {
    state: () => {
        return {
            isAuthenticated: false,
            name: '',
            uid: '',
        };
    },
    actions: {
        async initAuth() {
            const accessToken = window.localStorage.getItem('accessToken');
            const refreshToken = window.localStorage.getItem('refreshToken');

            if (accessToken && refreshToken) {
                try {
                    const {
                        data: {
                            details: {
                                firstName,
                                lastName,
                                uid
                            }
                        }
                    } = await new RequestBuilder<DecodeAccessTokenRequestInterface>()
                        .method('post')
                        .url('auth/decodeAccessToken')
                        .data({accessToken})
                        .send();
                    this.name = `${firstName} ${lastName}`;
                    this.uid = uid;
                    this.updateAuthState(true, accessToken, refreshToken)
                } catch (error) {
                    console.log(error)
                    this.updateAuthState();
                }
            }
        },
        updateAuthState(isAuthenticated: boolean = false, accessToken: string = '', refreshToken: string = '') {
            this.isAuthenticated = isAuthenticated;
            if (isAuthenticated) {
                window.localStorage.setItem('accessToken', accessToken);
                window.localStorage.setItem('refreshToken', refreshToken);
            } else {
                window.localStorage.removeItem('accessToken');
                window.localStorage.removeItem('refreshToken');
            }
        },
    },
});
