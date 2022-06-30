<template>
    <div class="w-full flex-1 flex justify-center">
        <app-container>
            <slot></slot>
        </app-container>
    </div>
</template>

<script setup lang="ts">
import AppContainer from './Container.vue'
const name = 'Content'
</script>
