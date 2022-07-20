<template>
    <Teleport
            v-if="itemExists"
            to="#app-context-buttons"
    >
        <div class="flex">
            <app-button
                    class="flex-1 mr-1"
                    :variant="Variant.LIGHT"
                    :size="Size.SMALL"
                    @click="edit"
            >Edit
            </app-button>
            <app-button
                    class="flex-1 mr-1 ml-1"
                    :variant="Variant.LIGHT"
                    :size="Size.SMALL"
                    @click="remove"
            >Remove
            </app-button>
            <app-button
                    class="flex-1 ml-1 whitespace-nowrap"
                    :variant="Variant.PRIMARY"
                    :size="Size.SMALL"
                    @click="income"
            >Add income
            </app-button>
        </div>
    </Teleport>

    <div class="flex items-center justify-between mb-6">
        <div class="flex flex-col item-start">
            <p class="text-gray-300 text-sm mb-2">ID: {{ item.id }}</p>
        </div>
    </div>

    <app-grid-container>
        <app-grid-row>
            <app-grid-col class="flex w-1/3">
                <app-card
                        v-if="hasDescription"
                        class="flex-1"
                >
                    <p class="font-bold text-sm mb-3">Description:</p>
                    <p>{{ item.description }}</p>
                </app-card>
            </app-grid-col>

            <app-grid-col
                    :class="hasDescription ? 'w-2/3' : 'w-full'"
                    class="flex"
            >
                <app-card
                        v-if="fees.length"
                        class="flex-1"
                >
                    <p class="font-bold text-sm mb-3">Fees:</p>
                    <p>{{ fees }}</p>
                </app-card>
            </app-grid-col>
        </app-grid-row>
    </app-grid-container>
</template>

<script setup lang="ts">
// @ts-ignore
import {computed, defineEmits, watch} from 'vue'
import {useRoute} from "vue-router"
// @ts-ignore
import AppButton, {Variant, Size} from './AppButton.vue'
import AppCard from './AppCard.vue'
import AppGridContainer from './AppGridContainer.vue'
import AppGridRow from './AppGridRow.vue'
import AppGridCol from './AppGridCol.vue'
import {useUIStore} from "../store/ui"
import {useDataStore} from "../store/data"

interface Emits {
    (event: 'edit', id: string): void;
    (event: 'remove', id: string): void;
    (event: 'income'): void;
}

const name = 'FamiliesItemDetails'
const emits = defineEmits<Emits>()
const route = useRoute()
const uiStore = useUIStore()
const dataStore = useDataStore()
const item = computed(() => dataStore.getFamilyById(route.params.id))
const itemExists = computed(() => !!item.value)
const title = computed(() => itemExists.value ? item.value.name : '')
const fees = computed(() => itemExists.value ? item.value.fees : [])
const hasDescription = computed(() => !!item.value.description)
const updateTitle = (title: string) => {
    uiStore.title = title
}
const edit = () => {
    emits('edit', item.value.id)
    updateTitle(item.value.name)
}
const remove = () => {
    emits('remove', item.value.id)
    updateTitle(item.value.name)
}
const income = () => {
    emits('income')
}

if (itemExists.value) {
    updateTitle(item.value.name)
}
watch(title, (value: string) => {
    if (value) {
        updateTitle(value)
    }
})
</script>
