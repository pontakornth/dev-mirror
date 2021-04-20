<template>
    <div v-if="isSkeleton" class="border border-green-400 shadow-md p-4">
        <div class="block w-full h-500px bg-gray-500"  />
        <div class="w-full h-2.25rem bg-gray-500" />
    </div>
    <div v-else class="border border-green-400 shadow-md p-4">
        <img class="block w-full" :src="imgSrc" />
        <h1 class="font-bold hover:text-indigo-500 underline py-4 text-4xl"><a :href="link">{{ title }}</a></h1>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        title: {
            type: String,
        },
        imgSrc: {
            type: String,
        },
        link: {
            type: String,
        },
        isSkeleton: {
            type: Boolean,
            default: false
        }
    }
})
</script>
