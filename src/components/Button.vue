<template>
    <button
            :type="type"
            :class="classList"
            class="rounded h-10 font-bold"
    >
        <slot>Button</slot>
    </button>
</template>

<script lang="ts">
enum Type {
    BUTTON = 'button',
    SUBMIT = 'submit',
}

enum Variant {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}
</script>

<script setup lang="ts">
// @ts-ignore
import {defineProps, withDefaults, ref, computed} from "vue";

interface Props {
    type?: string;
    variant?: string;
    outline?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    type: Type.BUTTON,
    variant: Variant.PRIMARY,
    outline: false,
})
const type = ref(Object.values(Type).includes(props.type) ? props.type : Type.BUTTON)
const variant = ref(Object.values(Variant).includes(props.variant) ? props.variant : Variant.PRIMARY)
const name = 'Button'

const classList = computed(() => ({
    'bg-blue-500 text-white hover:bg-blue-700': variant.value === Variant.PRIMARY && !props.outline,
    'bg-transparent border border-blue-500 text-blue-500 hover:border-blue-700 text-blue-700': variant.value === Variant.PRIMARY && props.outline,
}))
</script>
