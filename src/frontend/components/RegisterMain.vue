<template>
    <app-grid-container>
        <app-grid-row>
            <app-grid-col class="w-full">
                <app-card class="sm:max-w-sm">
                    <app-alert
                            v-if="alertMessage"
                            :type="alertType"
                    >{{ alertMessage }}
                    </app-alert>
                    <app-form @submit.prevent="submit()" ref="form">
                        <app-form-group
                                class="w-full"
                                for="username"
                                :label="$t('common.username')"
                                :required="true"
                                :errors="registerValidator.username.$errors"
                        >
                            <app-control
                                    v-model="registerValidator.username.$model"
                                    :error="registerValidator.username.$error"
                                    :placeholder="$t('common.username')"
                                    class="w-full"
                                    id="username"
                            />
                        </app-form-group>
                        <app-form-group
                                class="w-full"
                                for="password"
                                :label="$t('common.password')"
                                :required="true"
                                :errors="registerValidator.password.$errors"
                        >
                            <app-control
                                    v-model="registerValidator.password.$model"
                                    :error="registerValidator.password.$error"
                                    :placeholder="$t('common.password')"
                                    type="password"
                                    class="w-full"
                                    id="password"
                            />
                        </app-form-group>
                        <app-form-group
                                class="w-full"
                                for="repeat-password"
                                :label="$t('common.passwordRepeat')"
                                :required="true"
                                :errors="registerValidator.repeatPassword.$errors"
                        >
                            <app-control
                                    v-model="registerValidator.repeatPassword.$model"
                                    :error="registerValidator.repeatPassword.$error"
                                    :placeholder="$t('common.passwordRepeat')"
                                    type="password"
                                    class="w-full"
                                    id="repeat-password"
                            />
                        </app-form-group>
                        <app-form-group
                                class="w-full"
                                for="first-name"
                                :label="$t('common.firstName')"
                                :errors="registerValidator.firstName.$errors"
                        >
                            <app-control
                                    v-model="registerValidator.firstName.$model"
                                    :error="registerValidator.firstName.$error"
                                    :placeholder="$t('common.firstName')"
                                    class="w-full"
                                    id="first-name"
                            />
                        </app-form-group>
                        <app-form-group
                                class="w-full"
                                for="last-name"
                                :label="$t('common.lastName')"
                                :errors="registerValidator.lastName.$errors"
                        >
                            <app-control
                                    v-model="registerValidator.lastName.$model"
                                    :error="registerValidator.lastName.$error"
                                    :placeholder="$t('common.lastName')"
                                    class="w-full"
                                    id="last-name"
                            />
                        </app-form-group>
                        <app-form-group class="w-full">
                            <app-button
                                    :loading="loading"
                                    type="submit"
                                    class="w-full"
                            >{{ $t('register.create') }}
                            </app-button>
                        </app-form-group>
                    </app-form>
                </app-card>
            </app-grid-col>
        </app-grid-row>
    </app-grid-container>
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
import AppGridContainer from "./AppGridContainer.vue";
import AppGridRow from "./AppGridRow.vue";
import AppGridCol from "./AppGridCol.vue";

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
                resolve(undefined)
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
