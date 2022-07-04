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
            <template v-slot:title>
                Create a new student
            </template>
            <template v-slot:content>
                <p>popup</p>
            </template>
            <template v-slot:footer="props">
                <div class="w-full flex items-center justify-between">
                    <app-button
                            @click="props.close()"
                            variant="light"
                    >Cancel</app-button>
                    <app-button>Add</app-button>
                </div>
            </template>
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
