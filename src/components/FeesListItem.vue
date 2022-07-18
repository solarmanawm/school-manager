<template>
    <app-card
            :class="{
                'flex-col': isCardView,
                'mb-3 py-3 items-center': !isCardView,
            }"
            class="relative flex justify-between shadow-sm hover:shadow-lg"
    >
        <div :class="isCardView ? 'mb-6' : 'flex-1 flex items-center justify-between mr-6'">
            <p class="text-xl font-bold mb-1">{{ item.name }}</p>
            <p class="text-3xl text-blue-500 font-bold mb-1">{{ item.value }} <i class="fa-solid fa-ruble-sign"></i></p>
        </div>
        <div>
            <p class="flex justify-between">
                <app-button
                        class="flex-1 mr-2"
                        :variant="Variant.PRIMARY"
                        :size="Size.SMALL"
                        @click="details"
                >Details
                </app-button>
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
        </div>
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
import AppButton, {Variant, Size} from './AppButton.vue'
import AppCard from './AppCard.vue'

interface Emits {
    (event: 'edit', id: string): void;
    (event: 'remove', id: string): void;
    (event: 'details', id: string): void;
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
    emit('edit', props.item.id)
}
const remove = () => {
    emit('remove', props.item.id)
}
const details = () => {
    emit('details', props.item.id)
}
const name = 'FeesListItem'

watch(() => props.view, (value: string) => {
    view.value = value
})
</script>
