<template>
    <div
            v-if="visible"
            class="bg-white px-3 py-1 border border-gray-200 rounded-md shadow"
    >
        <ul class="-mx-3">
            <li
                    v-for="option in opts"
                    @click.prevent="change(option.value.toString())"
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

<script lang="ts">
export interface Option {
    title: string;
    value: string | number | string[] | number[];
}
</script>

<script setup lang="ts">
// @ts-ignore
import {ref, defineProps, defineEmits, computed, withDefaults, watch} from 'vue'

interface Emits {
    (event: 'change', option: string | string[]): void;
}

interface Props {
    current: string | string[];
    options: Option[];
    visible?: boolean;
    multiple?: boolean;
}

const emits = defineEmits<Emits>()
const props = withDefaults(defineProps<Props>(), {
    multiple: false,
})
const current = ref(props.current)
const opts = computed(() => {
    return props.options.map((option: Option) => ({
        ...option,
        selected: props.multiple
                ? current.value.includes(option.value.toString())
                : option.value.toString() === current.value,
    }))
})
const change = (value: string) => {
    if (props.multiple && Array.isArray(current.value)) {
        if (current.value.includes(value)) {
            current.value = current.value.filter((v: string) => v !== value)
            emits('change', current.value)
        } else {
            current.value.push(value)
            emits('change', [...current.value])
        }
    } else {
        current.value = value
        emits('change', current.value)
    }
}
const name = 'DropdownMenu'

watch(() => props.current, (value: string | string[]) => {
    current.value = value
})
</script>
