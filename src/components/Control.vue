<template>
    <div class="w-full">
        <input
                v-model="value"
                v-if="isInput"
                :id="id"
                :type="type"
                :class="classList"
                :placeholder="placeholder"
                @change="update"
                @input="update"
                class="control w-full h-10"
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
                :error="error"
                :current="value"
                :options="options"
        />
        <app-date-picker
                v-else-if="isDatePicker"
                v-model="value"
                :error="error"
        />
        <textarea
                v-else-if="isTextArea"
                v-model="value"
                :id="id"
                :class="classList"
                :placeholder="placeholder"
                @change="update"
                @input="update"
                class="control w-full h-24 py-2"
        />
    </div>
</template>

<script lang="ts">
export enum Type {
    TEXT = 'text',
    TEXTAREA = 'textarea',
    EMAIL = 'email',
    PASSWORD = 'password',
    BUTTON_SET = 'button-set',
    SELECT = 'select',
    DROPDOWN = 'dropdown',
    DATE_PICKER = 'date-picker',
}
</script>

<script setup lang="ts">
// @ts-ignore
import {computed, defineProps, defineEmits, ref, withDefaults, watch} from "vue"

import AppButtonSet, {Option} from './ButtonSet.vue'
import AppDropdown from './controls/Dropdown.vue'
import AppDatePicker from './controls/DatePicker.vue'

interface Emits {
    (e: 'update:modelValue', value: string): void;
}

interface Props {
    id?: string;
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
const isDatePicker = computed(() => type.value === Type.DATE_PICKER)
const isTextArea = computed(() => type.value === Type.TEXTAREA)
const classList = computed(() => ({
    'border rounded px-3 focus:bg-gray-100 focus:border-blue-500': isInput || isTextArea,
    'border-gray-200 hover:border-gray-300': (isInput || isTextArea) && !props.error,
    'border-red-500': (isInput || isTextArea) && props.error,
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
