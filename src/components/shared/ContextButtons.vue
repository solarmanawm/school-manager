<template>
    <Teleport to="#app-context-buttons">
        <slot></slot>
    </Teleport>
</template>

<script setup lang="ts">
const name = 'ContextButtons'
</script>
