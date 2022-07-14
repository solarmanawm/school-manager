<template>
    <div
            :class="rootClassList"
            class="w-full"
    >
        <input
                v-model="value"
                v-if="isInput"
                :id="id"
                :type="type"
                :class="classList"
                :placeholder="placeholder"
                @change="update"
                @input="update"
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
                class="control w-full py-2"
        />
        <template v-else-if="isCheckbox">
            <label
                    v-for="option in options"
                    class="first:mt-0 mt-1"
            >
                <input
                        type="checkbox"
                        v-model="value"
                        :value="option.value"
                        @change="update"
                />
                {{ option.title }}
            </label>
        </template>
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
    CHECKBOX = 'checkbox',
}
</script>

<script setup lang="ts">
// @ts-ignore
import {computed, defineProps, defineEmits, ref, withDefaults, watch} from "vue"

import AppButtonSet, {Option} from './ButtonSet.vue'
import AppDropdown from './controls/Dropdown.vue'
import AppDatePicker from './controls/DatePicker.vue'

interface Emits {
    (e: 'update:modelValue', value: string | string[]): void;
}

interface Props {
    id?: string;
    type?: string;
    error?: boolean;
    placeholder?: string;
    modelValue: string | string[];
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
const isCheckbox = computed(() => type.value === Type.CHECKBOX)
const classList = computed(() => ({
    'control w-full border rounded px-3 focus:bg-gray-100 focus:border-blue-500': isInput.value || isTextArea.value,
    'border-gray-200 hover:border-gray-300': (isInput.value || isTextArea.value) && !props.error,
    'h-10': isInput.value,
    'h-24 py-2': isTextArea.value,
    'border-red-500': (isInput.value || isTextArea.value) && props.error,
}))
const rootClassList = computed(() => ({
    'flex flex-col items-start': isCheckbox.value,
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
