<template>
    <div class="w-full flex-1 flex items-center justify-center">
        <app-card class="sm:max-w-sm">
            <app-form>
                <app-form-group
                        class="w-full"
                        label="Username"
                        for="username"
                        :required="true"
                >
                    <app-control
                            class="w-full"
                            id="username"
                    />
                </app-form-group>
                <app-form-group
                        class="w-full"
                        label="Password"
                        for="password"
                        :required="true"
                >
                    <app-control
                            type="password"
                            class="w-full"
                            id="password"
                    />
                </app-form-group>
                <app-form-group class="w-full">
                    <app-button class="w-full">Sign In</app-button>
                </app-form-group>
            </app-form>
        </app-card>
    </div>
</template>

<script setup lang="ts">
import AppButton from '../Button.vue'
import AppControl from '../Control.vue'
import AppCard from '../Card.vue'
import AppForm from '../shared/Form.vue'
import AppFormGroup from '../shared/FormGroup.vue'

const name = 'Login'
</script>
