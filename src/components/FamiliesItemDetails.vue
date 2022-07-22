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
        </div>
    </Teleport>

    <div class="flex items-center justify-between">
        <div class="flex flex-col item-start">
            <p class="text-gray-300 text-sm mb-2 mb-6">ID: {{ item.id }}</p>
            <p class="mb-6 text-blue-500 font-bold text-3xl">Income: {{ item.income }} <i class="fa-solid fa-ruble-sign"></i></p>
        </div>

        <div class="flex">
            <app-button
                    class="flex-1 ml-1 whitespace-nowrap"
                    :variant="Variant.PRIMARY"
                    :size="Size.SMALL"
                    @click="income"
            >Add income
            </app-button>
            <app-button
                    class="flex-1 ml-1 whitespace-nowrap"
                    :variant="Variant.DANGER"
                    :size="Size.SMALL"
                    @click="resetIncome"
            >Reset income
            </app-button>
        </div>
    </div>

    <app-grid-container>
        <app-grid-row>
            <app-grid-col
                    v-if="hasDescription"
                    :class="{
                        'w-1/3': hasFees,
                        'w-full': !hasFees,
                    }"
                    class="flex"
            >
                <app-card class="flex-1">
                    <p class="font-bold text-sm mb-3">Description:</p>
                    <p>{{ item.description }}</p>
                </app-card>
            </app-grid-col>

            <app-grid-col
                    v-if="hasFees"
                    :class="{
                        'w-2/3': hasDescription,
                        'w-full': !hasDescription,
                    }"
                    class="flex"
            >
                <app-card class="flex-1">
                    <app-grid-row>
                        <app-grid-col
                                :class="{
                                    'w-1/2': hasDescription,
                                    'w-2/3': !hasDescription,
                                }"
                        >
                            <p class="font-bold text-sm mb-3">Fees:</p>
                            <div
                                    v-for="fee of fees"
                                    :key="fee.id"
                                    class="mt-3 first:mt-0 bg-gray-100 rounded-md px-4 py-2 border border-gray-200"
                            >
                                <p class="text-sm font-bold capitalize mb-1">{{ fee.name }}</p>
                                <p class="font-bold text-blue-500">{{ fee.value }} <i class="fa-solid fa-ruble-sign"></i></p>
                            </div>
                        </app-grid-col>
                        <app-grid-col
                                :class="{
                                    'w-1/2': hasDescription,
                                    'w-1/3': !hasDescription,
                                }"
                        >
                        </app-grid-col>
                    </app-grid-row>
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
    (event: 'income', id: string): void;
    (event: 'reset-income', id: string): void;
}

const name = 'FamiliesItemDetails'
const emits = defineEmits<Emits>()
const route = useRoute()
const uiStore = useUIStore()
const dataStore = useDataStore()
const item = computed(() => dataStore.getFamilyById(route.params.id))
const itemExists = computed(() => !!item.value)
const title = computed(() => itemExists.value ? item.value.name : '')
const fees = computed(() => itemExists.value
        ? item.value.fees.map((feeId: string) => {
            const fee = dataStore.getFeeById(feeId)
            return {
                id: fee.id,
                name: fee.name,
                value: fee.value,
            }
        })
        : []
)
const totalFees = computed(() => fees.value.reduce((acc: number, current: {value: number}) => {
    acc += +current.value
    return acc
}, 0))
const hasDescription = computed(() => !!item.value.description)
const hasFees = computed(() => fees.value.length > 0)
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
    emits('income', item.value.id)
}
const resetIncome = () => {
    emits('reset-income', item.value.id)
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
