<template>
    <p>single fee</p>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import {useUIStore} from "../../store/ui";
import {FeeServiceCreateParamsInterface} from "../../classes/AbstractFeeService";

interface Props {
    fees: FeeServiceCreateParamsInterface[];
}

const name = 'FeesItemDetails'
const props = defineProps<Props>()
const uiStore = useUIStore()

uiStore.title = 'new title'
</script>
