<template>
    <div>
        <ul>
            <li
                    v-for="option in options"
                    @click.prevent="change(option.value)"
            >
                {{ option.title }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
// @ts-ignore
import {ref, defineProps, defineEmits} from 'vue'

interface Emits {
    (event: 'change', value: string): void;
}

interface Option {
    title: string;
    value: string | number;
}

interface Props {
    options: Option[];
}

const emits = defineEmits<Emits>()
const {options} = defineProps<Props>()
const change = (value: string | number) => {
    emits('change', value.toString())
}
const name = 'DropdownMenu'
</script>
