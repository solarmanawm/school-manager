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
                    class="flex-1 ml-1"
                    :variant="Variant.LIGHT"
                    :size="Size.SMALL"
                    @click="remove"
            >Remove
            </app-button>
        </div>
    </Teleport>

    <pre>{{ item }}</pre>
</template>

<script setup lang="ts">
// @ts-ignore
import {computed, defineEmits, watch} from 'vue'
import {useRoute} from "vue-router"
// @ts-ignore
import AppButton, {Variant, Size} from './AppButton.vue'
import {useUIStore} from "../store/ui"
import {useFeeStore} from "../store/fee"

interface Emits {
    (event: 'edit', id: string): void;
    (event: 'remove', id: string): void;
}

const name = 'FeesItemDetails'
const emits = defineEmits<Emits>()
const route = useRoute()
const uiStore = useUIStore()
const feeStore = useFeeStore()
const item = computed(() => feeStore.getById(route.params.id))
const itemExists = computed(() => !!item.value)
const title = computed(() => itemExists.value ? item.value.name : '')
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

if (itemExists.value) {
    updateTitle(item.value.name)
}
watch(title, (value: string) => {
    if (value) {
        updateTitle(value)
    }
})
</script>
