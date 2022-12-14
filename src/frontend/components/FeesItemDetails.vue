<template>
    <Teleport
            v-if="itemExists"
            to="#app-context-buttons"
    >
        <app-button
                class="md:mr-1"
                :variant="Variant.LIGHT"
                :size="Size.SMALL"
                @click="edit"
        >{{ $t('button.edit') }}
        </app-button>
        <app-button
                class="mt-2 md:mt-0 md:ml-1"
                :variant="Variant.LIGHT"
                :size="Size.SMALL"
                @click="remove"
        >{{ $t('button.remove') }}
        </app-button>
        <app-button
                v-if="!item.completed"
                class="mt-2 md:mt-0 md:ml-2"
                :variant="Variant.PRIMARY"
                :size="Size.SMALL"
                @click="complete"
        ><i class="fa-solid fa-check mr-1"></i> {{ $t('button.complete') }}
        </app-button>
    </Teleport>

    <app-grid-container>
        <app-grid-row class="items-center">
            <app-grid-col class="w-1/2">
                <div class="flex flex-col item-start">
                    <p class="text-gray-300 text-sm mb-2">ID: {{ item.id }}</p>
                    <p class="mb-6 text-blue-500 font-bold text-4xl">{{ item.value }} <i
                            class="fa-solid fa-ruble-sign"></i></p>
                </div>
            </app-grid-col>
            <app-grid-col class="w-1/2 flex items-center justify-end">
                <p class="font-bold text-sm flex items-center capitalize">{{ $t('fee.status') }}: <span
                        class="ml-2 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center"><i
                        :class="item.completed ? 'fa-solid fa-check' : 'fa-solid fa-chart-line'"></i></span></p>
            </app-grid-col>
        </app-grid-row>
    </app-grid-container>

    <app-grid-container>
        <app-grid-row>
            <app-grid-col class="flex w-full md:w-1/3">
                <app-card
                        v-if="hasDescription"
                        class="flex-1"
                >
                    <p class="font-bold text-sm mb-3">{{ $t('common.description') }}:</p>
                    <p>{{ item.description }}</p>
                </app-card>
            </app-grid-col>

            <app-grid-col
                    :class="hasDescription ? 'w-full md:w-2/3 mt-6 md:mt-0' : 'w-full'"
                    class="flex"
            >
                <app-card
                        v-if="families.length"
                        class="flex-1"
                >
                    <p class="font-bold text-sm mb-3">{{ $t('nav.families') }}:</p>
                    <p>{{ families }}</p>
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
}

const name = 'FeesItemDetails'
const emits = defineEmits<Emits>()
const route = useRoute()
const uiStore = useUIStore()
const dataStore = useDataStore()
const item = computed(() => dataStore.getFeeById(route.params.id as string))
const itemExists = computed(() => !!item.value)
const title = computed(() => itemExists.value ? item.value!.name : '')
const families = computed(() => itemExists.value ? item.value!.families : [])
const hasDescription = computed(() => !!item.value!.description)
const updateTitle = (title: string) => {
    uiStore.title = title
}
const edit = () => {
    emits('edit', item.value!.id)
    updateTitle(item.value!.name)
}
const remove = () => {
    emits('remove', item.value!.id)
    updateTitle(item.value!.name)
}
const complete = () => {
}

if (itemExists.value) {
    updateTitle(item.value!.name)
}
watch(title, (value: string) => {
    if (value) {
        updateTitle(value)
    }
})
</script>
