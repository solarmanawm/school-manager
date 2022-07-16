<template>
    <div class="w-full flex justify-center">
        <app-container>
            <div class="w-full border-t border-t-gray-200 mt-6"></div>
            <app-row>
                <app-col class="w-full py-6 text-center">
                    <p>Footer</p>
                </app-col>
            </app-row>
        </app-container>
    </div>
</template>

<script setup lang="ts">
import AppRow from './AppGridRow.vue'
import AppCol from './AppGridCol.vue'
import AppContainer from './AppGridContainer.vue'

const name = 'Footer'
</script>
