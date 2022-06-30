<template>
    <div class="w-full flex-1 flex items-center justify-center">
        <app-card class="sm:max-w-sm">
            <app-form>
                <app-form-control class="w-full">
                    <app-control class="w-full"/>
                </app-form-control>
                <app-form-control class="w-full">
                    <app-control class="w-full"/>
                </app-form-control>
                <app-form-control class="w-full">
                    <app-button class="w-full">Sign In</app-button>
                </app-form-control>
            </app-form>
        </app-card>
    </div>
</template>

<script setup lang="ts">
import AppButton from '../Button.vue'
import AppControl from '../Control.vue'
import AppCard from '../Card.vue'
import AppForm from '../shared/Form.vue'
import AppFormControl from '../shared/FormControl.vue'

const name = 'Login'
</script>
