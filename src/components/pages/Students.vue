<template>
    <Teleport to="#app-context-buttons">
        <app-button
                @click="addStudent"
        >New Student</app-button>
    </Teleport>

    <Teleport to="#app-popup">
        <app-popup
                v-model:visible="visible"
        >
            <p>popup</p>
        </app-popup>
    </Teleport>
</template>

<script setup lang="ts">
// @ts-ignore
import {ref} from "vue";

import AppPopup from '../Popup.vue'
// @ts-ignore
import AppButton from '../Button.vue'

const addStudent = () => {
    visible.value = true
}

const visible = ref(false)
const name = 'Students'
</script>
