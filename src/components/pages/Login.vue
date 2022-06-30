<template>
    <div class="w-full flex-1 flex items-center justify-center">
        <app-card class="sm:max-w-sm">
            <app-form>
                <app-control class="w-full">
                    <p>control</p>
                </app-control>
                <app-control class="w-full">
                    <p>control</p>
                </app-control>
                <app-control class="w-full">
                    <app-button class="w-full">Sign In</app-button>
                </app-control>
            </app-form>
        </app-card>
    </div>
</template>

<script setup lang="ts">
import AppButton from '../Button.vue'
import AppCard from '../Card.vue'
import AppForm from '../shared/Form.vue'
import AppControl from '../shared/Control.vue'

const name = 'Login'
</script>
