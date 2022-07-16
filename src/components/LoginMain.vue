<template>
    <div class="w-full flex-1 flex items-center justify-center">
        <app-card class="sm:max-w-sm">
            <app-alert
                    v-if="alert.message"
                    :type="alert.type"
            >{{ alert.message }}
            </app-alert>
            <app-form @submit.prevent="submit()">
                <app-form-group
                        class="w-full"
                        label="Username"
                        for="username"
                        :required="true"
                        :errors="loginValidator.username.$errors"
                >
                    <app-control
                            v-model="loginValidator.username.$model"
                            :error="loginValidator.username.$error"
                            class="w-full"
                            id="username"
                    />
                </app-form-group>
                <app-form-group
                        class="w-full"
                        label="Password"
                        for="password"
                        :required="true"
                        :errors="loginValidator.password.$errors"
                >
                    <app-control
                            v-model="loginValidator.password.$model"
                            :error="loginValidator.password.$error"
                            type="password"
                            class="w-full"
                            id="password"
                    />
                </app-form-group>
                <app-form-group class="w-full">
                    <app-button
                            :loading="loading"
                            type="submit"
                            class="w-full"
                    >Sign In
                    </app-button>
                </app-form-group>
            </app-form>
        </app-card>
    </div>
</template>

<script setup lang="ts">
// @ts-ignore
import {reactive, ref} from "vue";
import useVuelidate from "@vuelidate/core";
import {email, required} from "@vuelidate/validators";
import {useRouter} from "vue-router";

// @ts-ignore
import AppButton from './AppButton.vue'
// @ts-ignore
import AppControl from './AppControl.vue'
import AppCard from './AppCard.vue'
import AppForm from './AppForm.vue'
import AppFormGroup from './AppFormGroup.vue'
import AppAlert from './AppAlert.vue'

import {useAuthStore} from '../store/auth'
import routeNames from "../router/names";
import service from "../service";

const router = useRouter()
const authStore = useAuthStore()
const alert = reactive({
    type: 'error',
    message: '',
})
const loading = ref(false)
const form = reactive({
    username: '',
    password: '',
})
const loginValidator = useVuelidate({
    username: {
        required,
        email,
        $lazy: true,
    },
    password: {
        required,
        $lazy: true,
    },
}, form)

const clearForm = () => {
    loginValidator.value.username.$model = ''
    loginValidator.value.password.$model = ''
    loginValidator.value.$reset()
}

const errorHandler = (error: Error | any) => {
    if (error.name) {
        if (error.name === 'AxiosError') {
            const {message} = error.response.data
            alert.message = message
            clearForm()
        } else {
            console.warn(error.message)
        }
    } else {
        console.error(error)
    }
}

const submit = () => {
    loading.value = true

    return loginValidator.value.$validate().then((isValid: boolean) => {
        if (isValid) {
            return service.auth.login({
                username: form.username,
                password: form.password,
            })
        } else {
            throw new Error('Form is not valid.')
        }
    }).then((userInfo: {
        accessToken: string;
        refreshToken: string;
    }) => {
        alert.type = 'success'
        alert.message = 'You\'ve successfully signed in into your account.'
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, 1000)
        }).then(() => {
            authStore.updateAuthState(true, userInfo.accessToken, userInfo.refreshToken)
        }).then(() => router.push({
            name: routeNames.dashboard,
        }))
    }).catch(errorHandler).finally(() => {
        loading.value = false
    })
}

const name = 'Login'
</script>
