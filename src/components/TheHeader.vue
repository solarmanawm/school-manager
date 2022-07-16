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
import AppRow from './AppGridRow.vue'
import AppCol from './AppGridCol.vue'
import AppContainer from './AppGridContainer.vue'
import AppNav from './TheNav.vue'
import AppLogo from './TheLogo.vue'

const name = 'Header'
</script>
