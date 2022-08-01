<template>
    <Teleport to="#app-context-buttons">
        <app-button
                :variant="Variant.LIGHT"
                @click="add"
                class="whitespace-nowrap capitalize"
        >{{ $t('fee.new') }}
        </app-button>
        <app-control
                v-if="mdAndLarger"
                v-model="viewMode"
                class="w-full mt-2 md:mt-0 md:ml-2"
                id="sex"
                type="button-set"
                :variant="Variant.LIGHT"
                :options="[
                        {icon: 'fa-solid fa-border-all', value: Views.CARD},
                        {icon: 'fa-solid fa-list', value: Views.LIST},
                ]"
        />
    </Teleport>

    <app-grid-container>
        <app-grid-row>
            <app-grid-col
                    v-for="item in dataStore.fees"
                    :class="viewMode === Views.CARD ? 'w-full md:w-1/2' : 'w-full'"
                    class="flex"
            >
                <app-fees-list-item
                        :view="viewMode"
                        :key="item.id"
                        :item="item"
                        @edit="edit"
                        @remove="remove"
                        @details="details"
                        class="w-full mb-6"
                />
            </app-grid-col>
        </app-grid-row>
    </app-grid-container>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router"
import {breakpointsTailwind, useBreakpoints} from '@vueuse/core'
// @ts-ignore
import {computed, ref, watch, defineProps, defineEmits} from 'vue'
// @ts-ignore
import AppButton, {Variant} from "./AppButton.vue";
// @ts-ignore
import AppFeesListItem, {Views} from './FeesListItem.vue'
import AppGridContainer from './AppGridContainer.vue'
import AppGridRow from './AppGridRow.vue'
import AppGridCol from './AppGridCol.vue'
// @ts-ignore
import AppControl from './AppControl.vue'
import routeNames from '../router/names'
import {useDataStore} from "../store/data";

interface Emits {
    (event: 'add'): void;

    (event: 'edit', id: string): void;

    (event: 'remove', id: string): void;
}

const dataStore = useDataStore()
const emits = defineEmits<Emits>()
const router = useRouter()
const viewMode = ref(Views.CARD)
const breakpoints = useBreakpoints(breakpointsTailwind)
const mdAndLarger = breakpoints.greater('md')
const add = () => {
    emits('add')
}
const edit = (id: string) => {
    emits('edit', id)
}
const remove = (id: string) => {
    emits('remove', id)
}
const details = (id: string) => {
    return router.push({
        name: routeNames.fee,
        params: {
            id,
        },
    })
}
const name = 'FeesList'
</script>
