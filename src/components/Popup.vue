<template>
    <div
            v-if="visible"
            class="inset-0 fixed z-10 flex items-center justify-center"
    >
        <div
                @click="close"
                class="inset-0 absolute bg-gray-800 opacity-90 z-0"
        ></div>
        <div class="w-full relative z-10 xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <app-card class="bg-white">
                <slot></slot>
            </app-card>
        </div>
    </div>
</template>

<script setup lang="ts">
import {defineProps, defineEmits} from "vue";

import AppCard from './Card.vue'

interface Props {
    visible: boolean;
}

interface Emits {
    (e: 'update:visible', value: boolean): void;
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const close = () => {
    emit('update:visible', false)
}

const name = 'Popup'
</script>
