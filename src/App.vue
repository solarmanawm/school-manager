<template>
    <div class="w-full flex flex-col items-start justify-between min-h-screen">
        <app-header/>
        <app-content>
            <router-view/>
        </app-content>
        <app-footer/>
    </div>
</template>

<script setup lang="ts">
import AppHeader from './components/shared/Header.vue'
import AppContent from './components/shared/Content.vue'
import AppFooter from './components/shared/Footer.vue'
</script>
