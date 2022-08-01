<template>
    <Teleport to="#app-context-buttons">
        <app-button
                class="mt-2 md:mt-0 md:mr-1"
                :variant="Variant.LIGHT"
                :size="Size.SMALL"
                @click="edit"
        >{{ $t('button.edit') }}
        </app-button>
        <app-button
                class="mt-2 md:mt-0 md:mr-1 md:ml-1"
                :variant="Variant.LIGHT"
                :size="Size.SMALL"
                @click="remove"
        >{{ $t('button.remove') }}
        </app-button>
        <app-button
                class="mt-2 md:mt-0 md:mr-1 md:ml-1 whitespace-nowrap"
                :variant="Variant.PRIMARY"
                :size="Size.SMALL"
                @click="income"
        >{{ $t('family.incomePopup.title.add') }}
        </app-button>
        <app-button
                class="mt-2 md:mt-0 md:ml-1 whitespace-nowrap"
                :variant="Variant.DANGER"
                :size="Size.SMALL"
                @click="resetIncome"
        >{{ $t('family.incomePopup.title.reset') }}
        </app-button>
    </Teleport>

    <app-grid-container>
        <app-grid-row>
            <app-grid-col>
                <div class="flex items-center justify-between">
                    <div class="flex flex-col item-start">
                        <p class="text-gray-300 text-sm mb-2 mb-6">ID: {{ item.id }}</p>
                        <p class="mb-6 text-blue-500 font-bold text-3xl capitalize">
                            {{ $t('family.income') }}: {{ item.income }} <i class="fa-solid fa-ruble-sign"></i>
                        </p>
                    </div>
                </div>
            </app-grid-col>
        </app-grid-row>
    </app-grid-container>

    <app-grid-container>
        <app-grid-row>
            <app-grid-col
                    v-if="hasDescription"
                    :class="{
                        'w-full md:w-1/3': hasFees,
                        'w-full': !hasFees,
                    }"
                    class="flex"
            >
                <app-card class="flex-1">
                    <p class="font-bold text-sm mb-3 capitalize">{{ $t('common.description') }}:</p>
                    <p>{{ item.description }}</p>
                </app-card>
            </app-grid-col>

            <app-grid-col
                    v-if="hasFees"
                    :class="{
                        'w-full md:w-2/3 mt-6 md:mt-0': hasDescription,
                        'w-full': !hasDescription,
                    }"
                    class="flex"
            >
                <app-card class="flex-1">
                    <app-grid-row>
                        <app-grid-col
                                :class="{
                                    'w-full md:w-1/2 order-2 md:order-1': hasDescription,
                                    'w-full md:w-2/3': !hasDescription,
                                }"
                        >
                            <p class="font-bold text-sm mb-3 capitalize">{{ $t('family.popup.content.fees') }}:</p>
                            <div
                                    v-for="fee of fees"
                                    :key="fee ? fee.id : 'NO_VALUE'"
                                    class="mt-3 first:mt-0 bg-gray-100 rounded-md px-4 py-2 border border-gray-200"
                            >
                                <p class="text-sm font-bold capitalize mb-1">{{ fee ? fee.name : 'NO_VALUE' }}</p>
                                <p class="font-bold text-blue-500">{{ fee ? fee.value : 'NO_VALUE' }} <i
                                        class="fa-solid fa-ruble-sign"></i></p>
                            </div>
                        </app-grid-col>
                        <app-grid-col
                                :class="{
                                    'w-full md:w-1/2 order-1 md:order-2': hasDescription,
                                    'w-full md:w-1/3': !hasDescription,
                                }"
                        >
                            <canvas id="myChart" width="400" height="400"></canvas>
                        </app-grid-col>
                    </app-grid-row>
                </app-card>
            </app-grid-col>
        </app-grid-row>
    </app-grid-container>
</template>


<script setup lang="ts">
import {Chart, registerables} from 'chart.js';
import {computed, defineEmits, onMounted, watch} from 'vue'
import {useRoute} from "vue-router"
import AppButton, {Variant, Size} from './AppButton.vue'
import AppCard from './AppCard.vue'
import AppGridContainer from './AppGridContainer.vue'
import AppGridRow from './AppGridRow.vue'
import AppGridCol from './AppGridCol.vue'
import useUIStore from "../store/ui"
import useDataStore from "../store/data"

interface Emits {
    (event: 'edit', id: string): void;

    (event: 'remove', id: string): void;

    (event: 'income', id: string): void;

    (event: 'reset-income', id: string): void;
}

let chart: any = null
const name = 'FamiliesItemDetails'
const emits = defineEmits<Emits>()
const route = useRoute()
const uiStore = useUIStore()
const dataStore = useDataStore()
const {id} = route.params
const item = computed(() => dataStore.getFamilyById(id as string))
const title = computed(() => item.value!.name)
const feesLength = computed(() => item.value!.fees.length)
const fees = computed(() => item.value!.fees.map((feeId: string) => {
    const fee = dataStore.getFeeById(feeId)

    return fee ? {
        id: fee.id,
        name: fee.name,
        value: fee.value,
    } : null
}))
const totalFees = computed(() => {
    let total = 0

    for (let i = 0; i < feesLength.value; i++) {
        if (fees.value[i]) {
            total += +fees.value[i]!.value
        }
    }

    return total
})
const chartData = computed(() => ([totalFees.value - +item.value!.income, +item.value!.income]))
const hasDescription = computed(() => !!item.value!.description)
const hasFees = computed(() => feesLength.value > 0)
const updateTitle = (title: string) => {
    uiStore.title = title
}
const edit = () => {
    emits('edit', item.value!.id)
}
const remove = () => {
    emits('remove', item.value!.id)
}
const income = () => {
    emits('income', item.value!.id)
}
const resetIncome = () => {
    emits('reset-income', item.value!.id)
}
const createChart = () => {
    new Promise<HTMLCanvasElement>((resolve) => {
        const interval = setInterval(() => {
            const ctx = document.getElementById('myChart') as HTMLCanvasElement

            if (ctx) {
                clearInterval(interval)
                resolve(ctx)
            }
        }, 200)
    }).then((ctx) => {
        Chart.register(...registerables)
        chart = new Chart(ctx.getContext('2d')!, {
            type: 'doughnut',
            data: {
                labels: [
                    'Rest',
                    'Income',
                ],
                datasets: [{
                    label: 'My First Dataset',
                    data: chartData.value,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                    ],
                }]
            },
        })
    })
}

updateTitle(title.value)
watch(title, (value: string) => {
    updateTitle(value)
})
watch(() => item.value!.income, (value: number) => {
    if (chart) {
        chart.data.datasets![0].data![0] = totalFees.value - value
        chart.data.datasets![0].data![1] = value
        chart.update()
    }
})
watch(feesLength, () => {
    if (chart) {
        chart.data.datasets![0].data![0] = totalFees.value - item.value!.income
        chart.data.datasets![0].data![1] = item.value!.income
        chart.update()
    }
})
watch(hasFees, (value: boolean) => {
    if (value && !chart) {
        createChart()
    }
})

onMounted(() => {
    if (hasFees.value) {
        createChart()
    }
})
</script>
