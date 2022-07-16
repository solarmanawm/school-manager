<template>
    <div class="flex">
        <app-button
                v-for="option in opts"
                :variant="option.variant"
                class="flex-1 rounded-none first:rounded-bl-md first:rounded-tl-md last:rounded-br-md last:rounded-tr-md"
                @click="change(option.value)"
        >
            <template v-if="option.icon">
                <i :class="option.icon"></i>
            </template>
            <template v-else>
                {{ option.title }}
            </template>
        </app-button>
    </div>
</template>

<script setup lang="ts">
import {computed, defineProps, defineEmits} from 'vue'
// @ts-ignore
import AppButton, {Variant} from './AppButton.vue'

export interface Option {
    icon?: string;
    title: string;
    value: string;
}

interface Emits {
    (event: 'update:modelValue', value: string): void;
}

interface Props {
    variant?: string;
    modelValue: string;
    options: Option[];
}

const emit = defineEmits<Emits>()
const props = defineProps<Props>()
const opts = computed(() => {
    return props.options.map((option) => ({
        ...option,
        variant: props.modelValue === option.value ? Variant.PRIMARY : props.variant || Variant.SECONDARY,
    }))
})
const change = (value: string) => {
    emit('update:modelValue', value)
}
const name = 'ButtonSet'
</script>
