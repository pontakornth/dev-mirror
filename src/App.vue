<template>
 <h1 class="font-bold text-5xl">DEV posts</h1>
 <p v-if="error" class="text-red-500">{{error}}</p>
 <p v-if="!articlesData" class="text-indigo-400">Loading...</p>
 <main v-else class="container py-4 gap-4 mx-auto grid grid-cols-1 lg:grid-cols-3">
   <article-card v-for="article in articlesData"
     :key="article.id"
     :link="article.url"
     :imgSrc="article.social_image"
     :title="article.title"
     />
 </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useSWRV from 'swrv'
import ArticleCard from './components/ArticleCard.vue'

export default defineComponent({
  name: 'App',
  components: {
    ArticleCard
  },
  setup() {
    const { data, error } = useSWRV("https://dev.to/api/articles")
    return {
       articlesData: data,
       error
    }
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
