<template>
    <p>card</p>
</template>

<script lang="ts">
// @ts-ignore
export enum Views {
    CARD = 'CARD',
    LIST = 'LIST',
}
</script>

<script setup lang="ts">
// @ts-ignore
import {ref} from "vue";

// @ts-ignore
export interface Family {
    id: string;
    name: string;
}

const viewMode = ref(Views.CARD)
const name = 'FamilyCard'
</script>
