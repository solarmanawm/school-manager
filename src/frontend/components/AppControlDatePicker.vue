<template>
    <Datepicker
            v-model="date"
            placeholder="Start Typing ..."
            textInput
            :format="format"
    />
</template>

<script setup lang="ts">
// @ts-ignore
import {ref, defineEmits, defineProps, watch} from "vue";
import Datepicker from '@vuepic/vue-datepicker';

interface Emits {
    (event: 'update:modelValue', value: string): void;
}

interface Props {
    error: boolean;
    modelValue: string | string[];
}

const emits = defineEmits<Emits>()
const props = defineProps<Props>()
const date = ref(props.modelValue.toString())
const format = (date: Date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
}
const name = 'DatePicker'

watch(date, (value: string) => {
    emits('update:modelValue', value.toString())
})
</script>

<style lang="scss">
@import '@vuepic/vue-datepicker/src/VueDatePicker/style/main.scss';
</style>
