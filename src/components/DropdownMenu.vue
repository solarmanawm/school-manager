<template>
    <div
            v-if="visible"
            class="bg-white px-3 py-1 border border-gray-200 rounded-md shadow"
    >
        <ul class="-mx-3">
            <li
                    v-for="option in opts"
                    @click.prevent="change(option)"
                    :class="{
                        'bg-blue-500 text-white': option.selected,
                        'hover:bg-gray-100': !option.selected,
                    }"
                    class="px-3 py-1 cursor-pointer"
            >
                {{ option.title }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
// @ts-ignore
import {ref, defineProps, defineEmits, computed} from 'vue'

interface Emits {
    (event: 'change', option: Option): void;
}

export interface Option {
    title: string;
    value: string | number;
}

interface Props {
    visible?: boolean;
    current?: string;
    options: Option[];
}

const emits = defineEmits<Emits>()
const props = defineProps<Props>()
const current = ref(props.current || '')
const opts = computed(() => {
    return props.options.map((option) => ({
        ...option,
        selected: option.value === current.value,
    }))
})
const change = (option: Option) => {
    current.value = option.value
    emits('change', option)
}
const name = 'DropdownMenu'
</script>
