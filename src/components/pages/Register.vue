<template>
    <div class="w-full flex-1 flex items-center justify-center">
        <app-card class="sm:max-w-sm">
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
                            placeholder="Username..."
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
                        :errors="loginValidator.repeatPassword.$errors"
                >
                    <app-control
                            v-model="loginValidator.repeatPassword.$model"
                            :error="loginValidator.repeatPassword.$error"
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
                        :errors="loginValidator.firstName.$errors"
                >
                    <app-control
                            v-model="loginValidator.firstName.$model"
                            :error="loginValidator.firstName.$error"
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
                        :errors="loginValidator.lastName.$errors"
                >
                    <app-control
                            v-model="loginValidator.lastName.$model"
                            :error="loginValidator.lastName.$error"
                            class="w-full"
                            placeholder="Last name"
                            id="last-name"
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
// @ts-ignore
import {ref} from "vue";
import useVuelidate from "@vuelidate/core"
import {email, required, sameAs} from "@vuelidate/validators";

// @ts-ignore
import AppButton from '../Button.vue'
// @ts-ignore
import AppControl from '../Control.vue'
import AppCard from '../Card.vue'
import AppForm from '../shared/Form.vue'
import AppFormGroup from '../shared/FormGroup.vue'

const firstName = ref('')
const lastName = ref('')
const username = ref('')
const password = ref('')
const repeatPassword = ref('')
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
    repeatPassword: {
        required,
        sameAs: sameAs(password),
        $lazy: true,
    },
    firstName: {
        $lazy: true,
    },
    lastName: {
        $lazy: true,
    },
}, {
    username,
    password,
    repeatPassword,
    firstName,
    lastName,
})

const submit = () => {
    return loginValidator.value.$validate().then((isValid: boolean) => {
        console.log({isValid})
    })
}

const name = 'Register'
</script>
