<template>
    <Teleport to="#app-context-buttons">
        <div class="flex">
            <app-button
                    :variant="Variant.LIGHT"
                    @click="add"
                    class="whitespace-nowrap"
            >New Fee
            </app-button>
            <app-control
                    v-model="viewMode"
                    class="w-full ml-2"
                    id="sex"
                    type="button-set"
                    :variant="Variant.LIGHT"
                    :options="[
                        {icon: 'fa-solid fa-border-all', value: Views.CARD},
                        {icon: 'fa-solid fa-list', value: Views.LIST},
                ]"
            />
        </div>
    </Teleport>

    <app-grid-container>
        <app-grid-row>
            <app-grid-col
                    v-for="item in feeStore.items"
                    :class="viewMode === Views.CARD ? 'w-1/3' : 'w-full'"
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
import {useFeeStore} from "../store/fee";

interface Emits {
    (event: 'add'): void;
    (event: 'edit', id: string): void;
    (event: 'remove', id: string): void;
}

const feeStore = useFeeStore()
const emits = defineEmits<Emits>()
const router = useRouter()
const viewMode = ref(Views.CARD)
const filter = ref('')
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
