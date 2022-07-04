<template>
    <app-context-buttons>
        <app-button
                @click="addStudent"
        >New Student</app-button>
    </app-context-buttons>
</template>

<script setup lang="ts">
import AppContextButtons from '../shared/ContextButtons.vue'
// @ts-ignore
import AppButton from '../Button.vue'

const addStudent = () => {
}

const name = 'Students'
</script>
