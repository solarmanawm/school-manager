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
                class="md:ml-1 mt-2 md:mt-0"
                :variant="Variant.LIGHT"
                :size="Size.SMALL"
                @click="remove"
        >{{ $t('button.remove') }}
        </app-button>
    </Teleport>

    <app-grid-container>
        <app-grid-row>
            <app-grid-col>
                <div class="flex items-center justify-between mb-6">
                    <div class="flex flex-col item-start">
                        <p class="text-gray-300 text-sm mb-2">ID: {{ item.id }}</p>
                    </div>
                </div>
            </app-grid-col>
        </app-grid-row>
    </app-grid-container>

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
                        class="flex-1"
                >
                    <p class="font-bold text-sm mb-3">Details:</p>
                    <p>Some details go here...</p>
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

const name = 'StudentsItemDetails'
const emits = defineEmits<Emits>()
const route = useRoute()
const uiStore = useUIStore()
const dataStore = useDataStore()
const item = computed(() => dataStore.getStudentById(route.params.id as string))
const itemExists = computed(() => !!item.value)
const title = computed(() => itemExists.value ? item.value!.name : '')
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

if (itemExists.value) {
    updateTitle(item.value!.name)
}
watch(title, (value: string) => {
    if (value) {
        updateTitle(value)
    }
})
</script>
