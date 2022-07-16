<template>
    <div class="w-full flex justify-center">
        <app-grid-container>
            <app-grid-row>
                <app-grid-col class="w-full flex items-center justify-between py-6">
                    <app-logo/>
                    <app-nav/>
                </app-grid-col>
            </app-grid-row>
            <div class="w-full border-b border-b-gray-200 mb-6"></div>
        </app-grid-container>
    </div>
</template>

<script setup lang="ts">
import AppGridRow from './AppGridRow.vue'
import AppGridCol from './AppGridCol.vue'
import AppGridContainer from './AppGridContainer.vue'
import AppNav from './TheNav.vue'
import AppLogo from './TheLogo.vue'

const name = 'Header'
</script>
