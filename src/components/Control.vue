<template>
    <input
            v-model="value"
            v-if="isInput"
            :type="type"
            :class="classList"
            :placeholder="placeholder"
            @change="update"
            @input="update"
            class="control"
    />
    <app-button-set
            v-else-if="isButtonSet"
            v-model="value"
            :variant="variant"
            :options="options"
            @change="update"
    />
    <app-dropdown
            v-else-if="isDropdown"
            v-model="value"
            :current="value"
            :options="options"
    />
</template>

<script lang="ts">
export enum Type {
    TEXT = 'text',
    EMAIL = 'email',
    PASSWORD = 'password',
    BUTTON_SET = 'button-set',
    SELECT = 'select',
    DROPDOWN = 'dropdown',
}
</script>

<script setup lang="ts">
// @ts-ignore
import {computed, defineProps, defineEmits, ref, withDefaults, watch} from "vue"

import AppButtonSet, {Option} from './ButtonSet.vue'
import AppDropdown from './controls/Dropdown.vue'

interface Emits {
    (e: 'update:modelValue', value: string): void;
}

interface Props {
    type?: string;
    error?: boolean;
    placeholder?: string;
    modelValue: string;
    variant?: string;
    options?: Option[];
}

const emit = defineEmits<Emits>()
const props = withDefaults(defineProps<Props>(), {
    type: Type.TEXT,
    placeholder: '...',
    error: false,
})
const type = ref(Object.values(Type).includes(props.type) ? props.type : Type.TEXT)
const value = ref(props.modelValue)
const isInput = computed(() => type.value === Type.TEXT || type.value === Type.EMAIL || type.value === Type.PASSWORD)
const isDropdown = computed(() => type.value === Type.DROPDOWN)
const isButtonSet = computed(() => type.value === Type.BUTTON_SET)
const classList = computed(() => ({
    'border h-10 rounded px-3 focus:bg-gray-100 focus:border-blue-500': isInput,
    'border-gray-200 hover:border-gray-300': isInput && !props.error,
    'border-red-500': isInput && props.error,
}))
const name = 'Control'

const update = () => {
    emit('update:modelValue', value.value)
}

watch(value, update)
watch(() => props.modelValue, (newValue: string) => {
    value.value = newValue
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
