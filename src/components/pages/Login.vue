<template>
    <div class="w-full flex-1 flex items-center justify-center">
        <app-card class="sm:max-w-sm">
            <app-form @submit.prevent="login.submit()">
                <app-form-group
                        class="w-full"
                        label="Username"
                        for="username"
                        :required="true"
                        :errors="login.$v.username.$errors"
                >
                    <app-control
                            v-model="login.$v.username.$model"
                            :error="login.$v.username.$error"
                            class="w-full"
                            id="username"
                    />
                </app-form-group>
                <app-form-group
                        class="w-full"
                        label="Password"
                        for="password"
                        :required="true"
                        :errors="login.$v.password.$errors"
                >
                    <app-control
                            v-model="login.$v.password.$model"
                            :error="login.$v.password.$error"
                            type="password"
                            class="w-full"
                            id="password"
                    />
                </app-form-group>
                <app-form-group class="w-full">
                    <app-button
                            type="submit"
                            class="w-full"
                    >Sign In</app-button>
                </app-form-group>
            </app-form>
        </app-card>
    </div>
</template>

<script setup lang="ts">
import {email, required} from "@vuelidate/validators";

import AppButton from '../Button.vue'
import AppControl from '../Control.vue'
import AppCard from '../Card.vue'
import AppForm from '../shared/Form.vue'
import AppFormGroup from '../shared/FormGroup.vue'

import {useForm} from '../../use/form'

interface LoginFormInterface {
    username: string;
    password: string;
}

const {form: login} = useForm<LoginFormInterface>({
    username: {
        value: '',
        validation: {
            required,
            email,
        },
    },
    password: {
        value: '',
        validation: {
            required,
        },
    },
})
const name = 'Login'
</script>
