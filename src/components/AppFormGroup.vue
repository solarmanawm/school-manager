<template>
    <div class="px-3 mb-6 flex flex-col">
        <label
                v-if="label"
                :for="target"
                class="text-sm mb-2 flex items-center justify-between"
        >
            <span>{{ label }} <span v-if="required" class="text-red-500 font-bold">*</span></span>
            <slot name="context"></slot>
        </label>
        <slot></slot>
        <ul v-if="errors.length">
            <li v-for="error in errors" class="text-red-500 mt-2 text-sm">{{ error.$message }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
// @ts-ignore
import {defineProps, watch, withDefaults} from 'vue'
import {ErrorObject} from "@vuelidate/core";

interface Props {
    label?: string;
    target?: string;
    required?: boolean;
    errors?: ErrorObject[];
}

const props = withDefaults(defineProps<Props>(), {
    required: false,
    errors: () => ([]),
})
const name = 'FormControl'
</script>
