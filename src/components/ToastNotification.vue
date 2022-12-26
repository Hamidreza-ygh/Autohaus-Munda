<script setup>
import {  watch, defineProps} from 'vue';
import { CheckIcon,} from '@heroicons/vue/24/outline';

const props = defineProps({
    show: {
        type: Boolean,
        default: false,
    },
    success: {
        type: Boolean,
        default: true,
    },
});

// const emit = defineEmits(['close']);

watch(() => props.show, () => {
    if (props.show) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = null;
    }
});

</script>

<template>

    <div v-show="show" class="w-[400px] h-[75px] flex flex-column justify-center items-center bg-white border-l-4 text-sm text-slate-600 rounded-md shadow-lg mt-2 ml-[-200px] absolute top-[70px] left-1/2 z-4 overflow-hidden" :class="success ? 'border-green-500' : 'border-red-500'">
        <div class="flex items-center justify-center rounded-[50%] text-white text-[20px] w-[35px] h-[35px]" :class="success ? 'bg-green-500' : 'bg-red-500'">
            <CheckIcon></CheckIcon>
            <!-- <i class="fa fa-check"></i> -->
        </div>
        <div v-show="show" class="mx-[20px]">
            <slot v-if="show" />
        </div>
        <div ref="progress" class="progress" :class="[{'active': show }, success ? 'before:bg-green-500' : 'before:bg-red-500']"></div>
    </div>

</template>

<style scoped>
.progress {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 100%;
    background-color: #ddd;
}
.progress::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
    /* background-color: #22c55e; */
}
.progress.active::before {
    animation: progress 5s linear forwards;
}
@keyframes progress {
    100%{
        right: 100%;
    }
}
</style>
