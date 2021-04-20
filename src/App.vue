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
 <div class="flex p-4 justify-evenly">
   <button
     v-if="page > 1"
     @click="decreasePage"
     class="button" >
     Prev Page
   </button>
   <button 
     v-if="page < 10"
     @click="increasePage"
     class="button">
     Next Page
   </button>
 </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import useSWRV from 'swrv'
import ArticleCard from './components/ArticleCard.vue'

export default defineComponent({
  name: 'App',
  components: {
    ArticleCard
  },
  setup() {
    const page = ref(1)
    const increasePage = () => {
      if (page.value < 10) {
        page.value++
        window.scrollTo({top: 0, behavior: "smooth"})
      }
    }
    const decreasePage = () => {
      if (page.value > 1) {
        page.value--
        window.scrollTo({top: 0, behavior: "smooth"})
      }
    }
    const { data, error } = useSWRV(() => page.value ? `https://dev.to/api/articles?page=${page.value}` : "https://dev.to/api/articles")
    return {
       articlesData: data,
       page,
       increasePage,
       decreasePage,
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
.button {
  @apply border rounded font-bold m-auto p-2 bg-white text-green-500 hover:text-white hover:bg-green-500
}
</style>
