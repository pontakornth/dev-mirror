<template>
    <div v-if="isSkeleton" class="border border-green-400 shadow-md p-4">
        <div class="block w-full h-500px bg-gray-500"  />
        <div class="w-full h-2.25rem bg-gray-500" />
    </div>
    <div v-else class="flex flex-col justify-between items-start border border-green-400 shadow-md p-4">
        <img class="block w-full" :src="imgSrc" />
        <h1 class="font-bold hover:text-indigo-500 underline py-4 text-4xl"><a :href="link">{{ title }}</a></h1>
        <div class="flex flex-wrap justi">
            <span v-for="tag in tags" :key="tag" class="p-2 m-1 text-indigo-600 hover:text-white hover:bg-indigo-500 border">
                <a 
                   class="underline"
                   :href="`https://dev.to/t/${tag}`" 
                   target="__blank">#{{tag}}</a>
            </span>
        </div>
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
        tags: {
            type: Array,
        },
        isSkeleton: {
            type: Boolean,
            default: false
        },
    }
})
</script>
