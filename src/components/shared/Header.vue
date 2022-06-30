<template>
    <div class="w-full flex justify-center">
        <app-container>
            <app-row>
                <app-col class="w-full flex items-center justify-between py-6">
                    <app-logo/>
                    <app-nav/>
                </app-col>
            </app-row>
            <div class="w-full border-b border-b-gray-200 mb-6"></div>
        </app-container>
    </div>
</template>

<script setup lang="ts">
import AppRow from './Row.vue'
import AppCol from './Col.vue'
import AppContainer from './Container.vue'
import AppNav from './Nav.vue'
import AppLogo from './Logo.vue'

const name = 'Header'
</script>
