<template>
  <div class="header-content">
    <h3>Películas en cines</h3>
  </div>
  <hr>
  
  <ItemsSlider
    :movies="moviesNowPlaying"
    effect="coverflow"
    :space-between="-150"
    :slides-per-view="3"
    :slides-by-default="1"
    :loop="true"
    :height="281"
    :width="500"
    :background="true"
  />

  <hr>

  <div class="body-content">
    <span>
      Populares
    </span>
    <ItemsSlider
      :movies="popularMovies"
      :slides-per-view="10"
      :slides-by-default="2"
      :navigation="true"
      :height="180"
      :width="120"
      :poster-img="true"
    />
  </div>
</template>

<script setup lang='ts'>
// LIBRARIES AND SERVICES
import { onBeforeMount } from 'vue'
import { useMovies } from '@/composables/useMovies'
// COMPONENTS
import ItemsSlider from '@/components/ItemsSlider.vue'

const {
    moviesNowPlaying,
    popularMovies,
    loadNowPlaying,
    loadPopular,
} = useMovies()

onBeforeMount(() => {
  loadNowPlaying()
  loadPopular()
})
</script>

<style lang='scss' scoped>
.header-content {
  text-align: center;
  padding: 20px 16px 16px;

  & h3 {
    margin: 0;
  }
}

hr {
  margin: 0;
}
</style>
