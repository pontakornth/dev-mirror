<template>
    <div class="border border-green-400 shadow-md p-4">
        <img class="block w-full" :src="imgSrc" />
        <h1 class="font-bold py-4 text-4xl"><a :href="link">{{ title }}</a></h1>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        title: {
            type: String,
            required: true
        },
        imgSrc: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        }
    }
})
</script>
