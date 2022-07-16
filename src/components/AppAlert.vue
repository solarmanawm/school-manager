<template>
    <div class="rounded px-3 py-2 text-sm mb-6 text-white" :class="classList">
        <p class="uppercase font-bold mb-1">{{ type }}</p>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import {computed, defineProps} from "vue";

interface Props {
    type: string;
}

const props = defineProps<Props>()
const classList = computed(() => ({
    'bg-red-500': props.type === 'error',
    'bg-green-500': props.type === 'success',
    'bg-yellow-500': props.type === 'warning',
}))
const name = 'Alert'
</script>
