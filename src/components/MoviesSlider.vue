<template>
  <div>
    <swiper-container
      class="swiper-container"
      :class="{'bg-color': background}"
      :effect="effect"
      :freeMode="true"
      mousewheel-force-to-axis="true"
      :space-between="spaceBetween"
      :slides-per-view="slidesByDefault"
      :centered-slides="false"
      :loop="loop"
      :breakpoints="{
        '769': {
          slidesPerView: slidesPerView,
        }
      }"
      :navigation="navigation"
    >
      <swiper-slide
        v-for="movie in movies"
        :key="movie.id"
      >
        <div class="swiper-slide">
          <img
            class="content-img img-poster"
            :src="imageBaseUrl + (posterImg ? movie.poster_path : movie.backdrop_path)"
            :alt="movie.title"
            :height="height"
            :width="width"
            @click="goToMovieCredits(movie)"
          >
          <span>
            {{ movie.title }}
          </span>
        </div>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<script setup lang="ts">
  // LIBRARIES AND SERVICES
  import { toRefs } from 'vue'
  import { register } from 'swiper/element/bundle'
  import { useRouter } from "vue-router"
  import { useMovies } from '@/composables/useMovies'
  import { imageBaseUrl } from '@/constants/globals';

  register()

  // VARIABLES
  // Component properties are defined
  const props = defineProps({
    background: { type: Boolean },
    effect: { type: String },
    height: { type: Number },
    navigation: { type: Boolean },
    movies: { type: Array, required: true },
    loop: { type: Boolean },
    posterImg: { type: Boolean },
    slidesPerView: { type: Number },
    slidesByDefault: { type: Number },
    spaceBetween: { type: Number },
    width: { type: Number }
  })
  const {
    background,
    effect,
    height,
    navigation,
    movies,
    loop,
    posterImg,
    slidesPerView,
    slidesByDefault,
    spaceBetween,
    width
  } = toRefs(props)
  const router = useRouter()
  const { movieSelected } = useMovies()

  // METHODS
  const goToMovieCredits = (movie: object) => {
    movieSelected.value = movie

    router.push({ name: 'credits', params: { id: movie.id } })
  }
</script>

<style scoped>
.swiper-container {
  padding: 16px 24px;

  &.bg-color {
    background: #ffffff4f;
    padding-bottom: 0;
  }
}
.swiper-slide  {
  text-align: center;
}
.content-img {
  cursor: pointer;
}
</style>