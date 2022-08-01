<template>
    <div class="w-full flex justify-center">
        <app-grid-container>
            <app-grid-row>
                <app-grid-col class="w-full flex items-center justify-between py-6">
                    <app-logo/>

                    <app-nav
                            v-if="mdAndLarger"
                            @update="closeMobileMenu"
                    />
                    <app-button
                            v-else
                            :variant="Variant.LIGHT"
                            @click="toggleMobileMenu"
                    ><i class="fa-solid fa-bars"></i></app-button>
                </app-grid-col>
            </app-grid-row>
            <div class="w-full border-b border-b-gray-200 mb-6"></div>
        </app-grid-container>
    </div>

    <Teleport to="#app-popup">
        <app-popup v-model:visible="showMobileMenu">
            <template v-slot:content>
                <app-nav
                        @update="toggleMobileMenu"
                        type="mobile"
                />
            </template>
        </app-popup>
    </Teleport>
</template>

<script setup lang="ts">
// @ts-ignore
import {ref} from 'vue'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
// @ts-ignore
import AppButton, {Variant} from './AppButton.vue'
import AppPopup from './AppPopup.vue'
import AppGridRow from './AppGridRow.vue'
import AppGridCol from './AppGridCol.vue'
import AppGridContainer from './AppGridContainer.vue'
import AppNav from './TheNav.vue'
import AppLogo from './TheLogo.vue'

const name = 'Header'
const breakpoints = useBreakpoints(breakpointsTailwind)
const mdAndLarger = breakpoints.greater('md')
const showMobileMenu = ref(false)
const toggleMobileMenu = () => {
    showMobileMenu.value = !showMobileMenu.value
}
const closeMobileMenu = () => {
    if (showMobileMenu.value) {
        showMobileMenu.value = false
    }
}
</script>
