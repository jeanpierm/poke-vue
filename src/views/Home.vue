<template>
  <div class="home text-center">
    <Search />
    <Cards />
  </div>
</template>

<script>
// @ is an alias to /src
import Search from '@/components/Search.vue'
import Cards from '@/components/Cards.vue'

export default {
  name: 'Home',
  components: {
    Search,
    Cards
  }
}
</script>
