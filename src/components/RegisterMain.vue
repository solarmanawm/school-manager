<template>
    <div class="w-full flex-1 flex items-center justify-center">
        <app-card class="sm:max-w-sm">
            <app-alert
                    v-if="alertMessage"
                    :type="alertType"
            >{{ alertMessage }}
            </app-alert>
            <app-form @submit.prevent="submit()" ref="form">
                <app-form-group
                        class="w-full"
                        label="Username"
                        for="username"
                        :required="true"
                        :errors="registerValidator.username.$errors"
                >
                    <app-control
                            v-model="registerValidator.username.$model"
                            :error="registerValidator.username.$error"
                            class="w-full"
                            placeholder="Username..."
                            id="username"
                    />
                </app-form-group>
                <app-form-group
                        class="w-full"
                        label="Password"
                        for="password"
                        :required="true"
                        :errors="registerValidator.password.$errors"
                >
                    <app-control
                            v-model="registerValidator.password.$model"
                            :error="registerValidator.password.$error"
                            type="password"
                            placeholder="Password..."
                            class="w-full"
                            id="password"
                    />
                </app-form-group>
                <app-form-group
                        class="w-full"
                        label="Repeat password"
                        for="repeat-password"
                        :required="true"
                        :errors="registerValidator.repeatPassword.$errors"
                >
                    <app-control
                            v-model="registerValidator.repeatPassword.$model"
                            :error="registerValidator.repeatPassword.$error"
                            type="password"
                            placeholder="Repeat password..."
                            class="w-full"
                            id="repeat-password"
                    />
                </app-form-group>
                <app-form-group
                        class="w-full"
                        label="First name"
                        for="first-name"
                        :errors="registerValidator.firstName.$errors"
                >
                    <app-control
                            v-model="registerValidator.firstName.$model"
                            :error="registerValidator.firstName.$error"
                            class="w-full"
                            placeholder="First name"
                            id="first-name"
                    />
                </app-form-group>
                <app-form-group
                        class="w-full"
                        label="Last name"
                        for="last-name"
                        :required="true"
                        :errors="registerValidator.lastName.$errors"
                >
                    <app-control
                            v-model="registerValidator.lastName.$model"
                            :error="registerValidator.lastName.$error"
                            class="w-full"
                            placeholder="Last name"
                            id="last-name"
                    />
                </app-form-group>
                <app-form-group class="w-full">
                    <app-button
                            :loading="loading"
                            type="submit"
                            class="w-full"
                    >Create a Free Account
                    </app-button>
                </app-form-group>
            </app-form>
        </app-card>
    </div>
</template>

<script setup lang="ts">
// @ts-ignore
import {reactive, ref, toRef} from "vue";
import useVuelidate from "@vuelidate/core"
import {email, required} from "@vuelidate/validators";
import {helpers} from '@vuelidate/validators'
import {useRouter} from "vue-router";

// @ts-ignore
import AppButton from './AppButton.vue'
// @ts-ignore
import AppControl from './AppControl.vue'
import AppCard from './AppCard.vue'
import AppForm from './AppForm.vue'
import AppFormGroup from './AppFormGroup.vue'
import AppAlert from './AppAlert.vue'

import service from '../service'
import {useAuthStore} from "../store/auth";
import routeNames from "../router/names";

const router = useRouter()
const authStore = useAuthStore()
const alertType = ref('error')
const alertMessage = ref('')
const loading = ref(false)
const form = reactive({
    username: '',
    password: '',
    repeatPassword: '',
    firstName: '',
    lastName: '',
})
const registerValidator = useVuelidate({
    username: {
        required,
        email,
        $lazy: true,
    },
    password: {
        required,
        $lazy: true,
    },
    repeatPassword: {
        required,
        sameAs: helpers.withMessage('Password fields should match.', (value: string) => value === form.password),
        $lazy: true,
    },
    firstName: {
        $lazy: true,
    },
    lastName: {
        $lazy: true,
    },
}, form)

const clearForm = () => {
    registerValidator.value.username.$model = ''
    registerValidator.value.password.$model = ''
    registerValidator.value.repeatPassword.$model = ''
    registerValidator.value.firstName.$model = ''
    registerValidator.value.lastName.$model = ''
    registerValidator.value.$reset()
}

const errorHandler = (error: Error | any) => {
    if (error.name) {
        if (error.name === 'AxiosError') {
            const {message} = error.response.data
            alertMessage.value = message
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

    return registerValidator.value.$validate().then((isValid: boolean) => {
        if (isValid) {
            return service.user.create({
                username: form.username,
                password: form.password,
                firstName: form.firstName,
                lastName: form.lastName,
            })
        } else {
            throw new Error('Form is not valid.')
        }
    }).then((userInfo: {
        accessToken: string;
        refreshToken: string;
    }) => {
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

const name = 'Register'
</script>
