<template>
    <div class="px-3 mb-6 flex flex-col">
        <label
                v-if="label"
                :for="target"
                class="text-sm mb-2"
        >{{ label }} <span v-if="required" class="text-red-500 font-bold">*</span></label>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
// @ts-ignore
import {defineProps, withDefaults} from 'vue'

interface Props {
    label?: string;
    target?: string;
    required?: boolean;
}

const {label, target, required} = withDefaults(defineProps<Props>(), {
    required: false,
})
console.log({required})
const name = 'FormControl'
</script>
