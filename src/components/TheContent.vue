<template>
    <div class="w-full flex-1 flex justify-center">
        <app-grid-container>
            <app-grid-row>
                <app-grid-col class="w-full mb-6 flex items-center justify-between">
                    <app-title :title="uiStore.title"/>
                    <div id="app-context-buttons"></div>
                </app-grid-col>
            </app-grid-row>
            <slot></slot>
        </app-grid-container>
    </div>
</template>

<script setup lang="ts">
import AppGridRow from './AppGridRow.vue'
import AppGridCol from './AppGridCol.vue'
import AppTitle from './AppTitle.vue'
import AppGridContainer from './AppGridContainer.vue'

import {useUIStore} from "../store/ui";

const uiStore = useUIStore()
const name = 'Content'
</script>
