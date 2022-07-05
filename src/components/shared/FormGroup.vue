<template>
    <div class="px-3 mb-6 flex flex-col">
        <label
                v-if="label"
                :for="target"
                class="text-sm mb-2"
        >{{ label }} <span v-if="required" class="text-red-500 font-bold">*</span></label>
        <slot></slot>
        <ul v-if="errors.length">
            <li v-for="error in errors" class="text-red-500 mt-2 text-sm">{{ error }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
// @ts-ignore
import {defineProps, watch, withDefaults} from 'vue'

interface Props {
    label?: string;
    target?: string;
    required?: boolean;
    errors?: string[];
}

const props = withDefaults(defineProps<Props>(), {
    required: false,
    errors: [],
})

watch(() => props.errors, () => {

})

const name = 'FormControl'
</script>
