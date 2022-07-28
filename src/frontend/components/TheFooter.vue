<template>
    <div class="w-full flex justify-center">
        <app-grid-container>
            <div class="w-full border-t border-t-gray-200 mt-6"></div>
            <app-grid-row>
                <app-grid-col class="w-full py-6 text-center">
                    <p>Footer</p>
                </app-grid-col>
            </app-grid-row>
        </app-grid-container>
    </div>
</template>

<script setup lang="ts">
import AppGridRow from './AppGridRow.vue'
import AppGridCol from './AppGridCol.vue'
import AppGridContainer from './AppGridContainer.vue'

const name = 'Footer'
</script>
