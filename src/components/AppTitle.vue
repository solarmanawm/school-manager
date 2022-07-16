<template>
    <p
            v-if="title"
            class="text-xl font-bold"
    >{{ title }}</p>
</template>

<script setup lang="ts">
import {defineProps} from 'vue'

interface Props {
    title: string;
}

const {title} = defineProps<Props>()
</script>
