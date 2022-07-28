<template>
    <div class="w-full relative z-10">
        <div
                :class="classList"
                @click="visible = !visible"
                class="w-full border rounded px-3 pb-2 cursor-pointer relative"
        >
            <template v-if="isEmpty">
                <span class="mt-2 inline-block">{{ placeholder }}</span>
            </template>
            <template v-else>
                <template v-if="isArray">
                    <span
                            v-for="item in title" :key="item"
                            class="mr-2 bg-gray-100 px-2 py-1 rounded border border-gray-200 inline-block mt-2"
                    >{{ item }}</span>
                </template>
                <span
                        v-else
                        class="mr-2 bg-gray-100 px-2 py-1 rounded border border-gray-200 inline-block mt-2"
                >{{ title }}</span>
            </template>
        </div>
        <app-dropdown-menu
                ref="dropdown"
                :visible="visible"
                :current="modelValue"
                :options="options"
                :multiple="multiple"
                @change="change"
                class="absolute top-full w-full"
        />
    </div>
</template>

<script setup lang="ts">
// @ts-ignore
import {ref, defineProps, defineEmits, computed, withDefaults, watch} from 'vue'
import {onClickOutside} from "@vueuse/core";

import AppDropdownMenu, {Option} from './AppDropdownMenu.vue'

interface Emits {
    (event: 'update:modelValue', value: string | string[]): void;
}

interface Props {
    error: boolean;
    modelValue: string | string[];
    options: Option[];
    multiple: boolean;
}

const emits = defineEmits<Emits>()
const props = defineProps<Props>()
const dropdown = ref(null)
const visible = ref()
const placeholder = computed(() => 'Please, select.')
const isArray = Array.isArray(props.modelValue)
const isEmpty = computed(() => isArray ? props.modelValue.length === 0 : props.modelValue === '')
const title = computed(() => isEmpty.value ?
        placeholder.value
        : isArray
                ? props.options.filter((option) => props.modelValue.includes(option.value.toString())).map((option) => option.title).sort()
                : props.options.filter((option) => option.value === props.modelValue).map((option) => option.title).shift()
)
const change = (value: string | string[]) => {
    if (isArray) {
        emits('update:modelValue', [...value])
    } else {
        visible.value = false
        emits('update:modelValue', value)
    }
}
const classList = computed(() => ({
    'focus:border-blue-500': visible.value,
    'border-gray-200 hover:border-gray-300': !props.error,
    'border-red-500': props.error,
    'text-gray-300': isEmpty.value,
}))
const name = 'Dropdown'

onClickOutside(dropdown, () => {
    visible.value = false
})
</script>
