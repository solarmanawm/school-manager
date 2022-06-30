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
</template>

<script lang="ts">
enum Type {
    TEXT = 'text',
    EMAIL = 'email',
    PASSWORD = 'password',
    SELECT = 'select',
}
</script>

<script setup lang="ts">
// @ts-ignore
import {computed, defineProps, defineEmits, ref, withDefaults} from "vue";

interface Emits {
    (e: 'update:modelValue', value: string): void;
}

interface Props {
    type?: string;
    error?: boolean;
    placeholder?: string;
    modelValue: string;
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
const classList = computed(() => ({
    'border h-10 rounded px-3 focus:bg-gray-100 focus:border-blue-500': isInput,
    'border-gray-200 hover:border-gray-300': isInput && !props.error,
    'border-red-500': isInput && props.error,
}))
const name = 'Control'

const update = () => {
    emit('update:modelValue', value.value)
}
</script>

<style lang="css" scoped>
.control {
    outline: none;
}

.control:focus {
    outline: none;
}
</style>
