<template>
    <div
            v-if="visible"
            class="inset-0 fixed z-10 flex items-center justify-center"
    >
        <div class="inset-0 absolute bg-gray-800 opacity-90 z-0"></div>
        <div ref="popupRef" class="w-full relative z-10 xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <div
                    @click="close"
                    class="h-10 w-10 rounded-full bg-white flex items-center justify-center absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 shadow cursor-pointer hover:scale-110"
            >
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 94.926 94.926"
                        xml:space="preserve"
                >
                    <g>
                        <path d="M55.931,47.463L94.306,9.09c0.826-0.827,0.826-2.167,0-2.994L88.833,0.62C88.436,0.224,87.896,0,87.335,0
		c-0.562,0-1.101,0.224-1.498,0.62L47.463,38.994L9.089,0.62c-0.795-0.795-2.202-0.794-2.995,0L0.622,6.096
		c-0.827,0.827-0.827,2.167,0,2.994l38.374,38.373L0.622,85.836c-0.827,0.827-0.827,2.167,0,2.994l5.473,5.476
		c0.397,0.396,0.936,0.62,1.498,0.62s1.1-0.224,1.497-0.62l38.374-38.374l38.374,38.374c0.397,0.396,0.937,0.62,1.498,0.62
		s1.101-0.224,1.498-0.62l5.473-5.476c0.826-0.827,0.826-2.167,0-2.994L55.931,47.463z"/>
                    </g>
                </svg>
            </div>
            <div class="w-full border border-gray-200 p-8 rounded bg-white">
                <h3
                        v-if="titleHasContent"
                        class="font-bold pb-6 mb-6 border-b text-xl capitalize border-b-gray-200"
                >
                    <slot name="title"></slot>
                </h3>
                <slot name="content"></slot>
                <div
                        v-if="footerHasContent"
                        class="pt-6 mt-6 border-t border-t-200"
                >
                    <slot name="footer" :close="close"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// @ts-ignore
import {ref, defineProps, defineEmits, useSlots, computed, onBeforeMount, onUnmounted} from "vue";
import {onClickOutside} from "@vueuse/core";

interface Props {
    visible: boolean;
}

interface Emits {
    (e: 'update:visible', value: boolean): void;
}

const slots = useSlots()
const props = defineProps<Props>()
const emit = defineEmits<Emits>()
const popupRef = ref(null)
const titleHasContent = computed(() => {
    const title = slots.title!()

    return title ? title.length : 0
})
const footerHasContent = computed(() => {
    const footer = slots.footer!()

    return footer ? footer.length : 0
})
const close = () => {
    emit('update:visible', false)
}
const closeEventListener = (event: {key: string}) => {
    if(event.key === "Escape"){
        close()
    }
}
const name = 'Popup'

onClickOutside(popupRef, () => {
    close()
})
onBeforeMount(() => {
    document.addEventListener('keydown', closeEventListener);
})
onUnmounted(() => {
    document.removeEventListener('keydown', closeEventListener);
})
</script>
