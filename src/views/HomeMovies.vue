<template>
  <div class="movies-header">
    <h3>Películas en cines</h3>
  </div>
  <hr>
  
  <MoviesSlider
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

  <div class="movies-body">
    <span>
      Populares
    </span>
    <MoviesSlider
      :movies="popularMovies"
      :slides-per-view="10"
      :slides-by-default="3"
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
  import MoviesSlider from '@/components/MoviesSlider.vue'

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
.movies-header {
  text-align: center;
  padding: 20px 16px 16px;

  & h3 {
    margin: 0;
  }
}
.movies-body {
  margin: 24px;
}

hr {
  margin: 0;
}
</style>
