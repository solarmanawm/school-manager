<template>
    <Teleport to="#app-context-buttons">
        <div class="flex">
            <app-button
                    v-if="hasFamilies"
                    :variant="Variant.LIGHT"
                    @click="add"
                    class="whitespace-nowrap mr-3 capitalize"
            >{{ $t('student.new') }}</app-button>
            <app-control
                    v-model="viewMode"
                    class="w-full"
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
                    v-for="item in dataStore.students"
                    :class="viewMode === Views.CARD ? 'w-1/2' : 'w-full'"
            >
                <app-students-list-item
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
// @ts-ignore
import {defineEmits, defineProps, ref, withDefaults} from "vue";
import AppGridContainer from './AppGridContainer.vue'
import AppGridRow from './AppGridRow.vue'
import AppGridCol from './AppGridCol.vue'
// @ts-ignore
import AppControl from './AppControl.vue'
// @ts-ignore
import AppButton, {Variant, Size} from './AppButton.vue'
// @ts-ignore
import AppStudentsListItem, {Views} from "./StudentsListItem.vue";
import {useDataStore} from "../store/data";
import {useRouter} from "vue-router";
import routeNames from "../router/names";

interface Emits {
    (event: 'add'): void;
    (event: 'edit', id: string): void;
    (event: 'remove', id: string): void;
}

interface Props {
    hasFamilies: boolean;
}

const name = 'StudentsList'
const emits = defineEmits<Emits>()
const props = withDefaults(defineProps<Props>(), {
    hasFamilies: false,
})
const dataStore = useDataStore()
const router = useRouter()
const viewMode = ref(Views.CARD)
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
        name: routeNames.student,
        params: {
            id,
        },
    })
}
</script>
