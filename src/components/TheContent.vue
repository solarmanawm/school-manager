<template>
    <div class="w-full flex-1 flex justify-center">
        <app-container>
            <app-row>
                <app-col class="w-full mb-6 flex items-center justify-between">
                    <app-title :title="uiStore.title"/>
                    <div id="app-context-buttons"></div>
                </app-col>
            </app-row>
            <slot></slot>
        </app-container>
    </div>
</template>

<script setup lang="ts">
import AppRow from './AppGridRow.vue'
import AppCol from './AppGridCol.vue'
import AppTitle from './AppTitle.vue'
import AppContainer from './AppGridContainer.vue'

import {useUIStore} from "../store/ui";

const uiStore = useUIStore()
const name = 'Content'
</script>
