<template>
    <button
            :type="type"
            :class="classList"
            :disabled="loading"
            class="rounded font-bold flex items-center justify-center capitalize"
    >
        <svg v-if="loading" version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink"
             x="0px" y="0px"
             width="24" height="24"
             viewBox="0 0 100 100" xml:space="preserve"
        >
            <path fill="#fff"
                  d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
            >
                <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        dur="1s"
                        from="0 50 50"
                        to="360 50 50"
                        repeatCount="indefinite"/>
                </path>
            </svg>
        <slot v-else>Button</slot>
    </button>
</template>

<script lang="ts">
enum Type {
    BUTTON = 'button',
    SUBMIT = 'submit',
}

export enum Size {
    SMALL = 'small',
    NORMAL = 'normal',
    LARGE = 'large',
}

export enum Variant {
    PRIMARY = 'primary',
    LIGHT = 'light',
    SECONDARY = 'secondary',
    DANGER = 'danger',
}
</script>

<script setup lang="ts">
// @ts-ignore
import {defineProps, withDefaults, ref, computed, watch} from "vue";

interface Props {
    loading?: boolean;
    type?: "reset" | "submit" | "button";
    variant?: string;
    size?: string;
    outline?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    type: Type.BUTTON,
    variant: Variant.PRIMARY,
    size: Size.NORMAL,
    outline: false,
    loading: false,
})
const type = ref(Object.values(Type).map((s) => s.toString()).includes(props.type) ? props.type : Type.BUTTON)
const variant = ref(Object.values(Variant).map((s) => s.toString()).includes(props.variant) ? props.variant : Variant.PRIMARY)
const size = ref(Object.values(Size).map((s) => s.toString()).includes(props.size) ? props.size : Size.NORMAL)
const name = 'Button'
const classList = computed(() => ({
    // Small
    'h-8 px-4 text-sm': size.value === Size.SMALL,

    // Normal
    'h-10 px-6': size.value === Size.NORMAL,

    // Large
    'h-12 px-8': size.value === Size.LARGE,

    // Primary
    'bg-blue-500 text-white hover:bg-blue-700': variant.value === Variant.PRIMARY && !props.outline,
    'bg-transparent border border-blue-500 text-blue-500 hover:border-blue-700 text-blue-700': variant.value === Variant.PRIMARY && props.outline,

    // Secondary
    'bg-gray-500 text-white hover:bg-gray-700': variant.value === Variant.SECONDARY && !props.outline,
    'bg-transparent border border-gray-500 text-gray-500 hover:border-gray-700 text-gray-700': variant.value === Variant.SECONDARY && props.outline,

    // Light
    'bg-gray-100 text-gray-600 hover:bg-gray-300': variant.value === Variant.LIGHT && !props.outline,
    'bg-transparent border border-gray-500 text-gray-500 hover:border-gray-700 text-blue-700': variant.value === Variant.LIGHT && props.outline,

    // Danger
    'bg-red-500 text-white hover:bg-red-700': variant.value === Variant.DANGER && !props.outline,
    'bg-transparent border border-red-500 text-red-500 hover:border-red-700 text-red-700': variant.value === Variant.DANGER && props.outline,
}))

watch(() => props.variant, (value: string) => {
    variant.value = value
})
</script>
