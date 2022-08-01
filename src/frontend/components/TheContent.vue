<template>
    <div class="w-full flex-1 flex justify-center">
        <app-grid-container>
            <app-grid-row>
                <app-grid-col class="w-full mb-6 flex-col md:flex-row flex items-center justify-between">
                    <app-title :title="uiStore.title"/>
                    <div id="app-context-buttons" class="w-full md:w-auto mt-4 md:mt-0 flex flex-col md:flex-row"></div>
                </app-grid-col>
            </app-grid-row>
            <app-grid-row>
                <slot></slot>
            </app-grid-row>
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
