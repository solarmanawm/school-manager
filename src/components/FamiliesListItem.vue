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
// @ts-ignore
import {computed, defineEmits, defineProps, ref, watch} from 'vue'
import {FamilyInterface} from "../classes/AbstractFamilyService"
// @ts-ignore
import AppButton, {Variant, Size} from "./AppButton.vue"
import AppCard from './AppCard.vue'

interface Props {
    view: string;
    item: FamilyInterface,
}

interface Emits {
    (event: 'edit', id: string): void;
    (event: 'remove', id: string): void;
    (event: 'details', id: string): void;
}

const name = 'FamiliesListItem'
const props = defineProps<Props>()
const emits = defineEmits<Emits>()
const view = ref(Views.CARD)
const isCardView = computed(() => view.value === Views.CARD)
const edit = () => {
    emits('edit', props.item.id)
}
const remove = () => {
    emits('remove', props.item.id)
}
const details = () => {
    emits('details', props.item.id)
}

watch(() => props.view, (value: string) => {
    view.value = value
})
</script>
