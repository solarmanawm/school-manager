<template>
    <app-card>
        <p>{{ item.lastName }}</p>
    </app-card>
</template>

<script setup lang="ts">
import {defineProps} from 'vue'

import AppCard from './Card.vue'

interface Props {
    item: {
        id: string;
        firstName: string;
        lastName: string;
        fatherName?: string;
        dateOfBirth?: string;
    };
}

const {item} = defineProps<Props>()
const name = 'Student'
</script>
