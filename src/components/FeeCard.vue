<template>
    <app-card
            :class="{
                'flex-col': isCardView,
                'mb-3 py-3 items-center': !isCardView,
            }"
            class="relative flex justify-between shadow-sm hover:shadow-lg"
    >
        <div :class="isCardView ? 'mb-6' : 'flex-1 flex items-center justify-between'">
            <p class="text-xl font-bold mb-1">{{ item.name }}</p>
        </div>
        <p class="flex justify-between">
            <app-button
                    class="flex-1 mr-1"
                    :variant="Variant.LIGHT"
                    :size="Size.SMALL"
                    @click="edit"
            >Edit
            </app-button>
            <app-button
                    class="flex-1 ml-1"
                    :variant="Variant.LIGHT"
                    :size="Size.SMALL"
                    @click="remove"
            >Remove
            </app-button>
        </p>
    </app-card>
</template>

<script lang="ts">
// @ts-ignore
export enum Views {
    CARD = 'CARD',
    LIST = 'LIST',
}
</script>

<script setup lang="ts">
import {FeeServiceCreateParamsInterface} from "../classes/AbstractFeeService";
// @ts-ignore
import {computed, defineEmits, defineProps, ref, watch} from "vue";
// @ts-ignore
import AppButton, {Variant, Size} from './Button.vue'
import AppCard from './Card.vue'

interface Emits {
    (event: 'edit', item: FeeServiceCreateParamsInterface): void;

    (event: 'remove', id: string): void;
}

interface Props {
    view: string;
    item: FeeServiceCreateParamsInterface;
}

const emit = defineEmits<Emits>()
const props = defineProps<Props>()
const view = ref(Views.CARD)
const isCardView = computed(() => view.value === Views.CARD)
const edit = () => {
    emit('edit', props.item)
}
const remove = () => {
    emit('remove', props.item.id)
}
const name = 'FeeCard'

watch(() => props.view, (value: string) => {
    view.value = value
})
</script>
