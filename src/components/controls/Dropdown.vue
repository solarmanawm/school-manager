<template>
    <div class="w-full relative z-10">
        <input
                :class="classList"
                :value="title"
                @click="visible = !visible"
                class="w-full control border h-10 rounded px-3 cursor-pointer relative"
                readonly
        />
        <app-dropdown-menu
                ref="dropdown"
                :visible="visible"
                :current="modelValue"
                :options="options"
                @change="change"
                class="absolute top-full w-full"
        />
    </div>
</template>

<script setup lang="ts">
// @ts-ignore
import {ref, defineProps, defineEmits, computed} from 'vue'
import {onClickOutside} from "@vueuse/core";

import AppDropdownMenu, {Option} from '../DropdownMenu.vue'

interface Emits {
    (event: 'update:modelValue', value: string): void;
}

interface Props {
    error: boolean;
    modelValue: string;
    options: Option[];
}

const emits = defineEmits<Emits>()
const props = defineProps<Props>()
const dropdown = ref(null)
const visible = ref()
const title = ref()
const change = (option: Option) => {
    visible.value = false
    title.value = option.title
    emits('update:modelValue', option.value.toString())
}
const classList = computed(() => ({
    'focus:border-blue-500': visible.value,
    'border-gray-200 hover:border-gray-300': !props.error,
    'border-red-500': props.error,
}))
const name = 'Dropdown'

onClickOutside(dropdown, () => {
    visible.value = false
})
</script>

<style lang="css" scoped>
.control {
    outline: none;
}

.control:focus {
    outline: none;
}
</style>
