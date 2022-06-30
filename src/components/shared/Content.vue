<template>
    <div class="w-full flex-1 flex justify-center">
        <app-container>
            <app-row>
                <app-col>
                    <app-title :title="uiStore.title"/>
                </app-col>
            </app-row>
            <slot></slot>
        </app-container>
    </div>
</template>

<script setup lang="ts">
import AppRow from './Row.vue'
import AppCol from './Col.vue'
import AppTitle from './Title.vue'
import AppContainer from './Container.vue'

import {useUIStore} from "../../store/ui";

const uiStore = useUIStore()
const name = 'Content'
</script>
