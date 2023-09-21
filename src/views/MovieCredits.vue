<template>
    <div class="container-credits-img">
        <img
            :src="imgPath(movieSelected.value.backdrop_path)"
            :alt="movieSelected.title"
        >
        <span>{{ movieSelected.value.title }}</span>
    </div>
    <div class="container-credits-body">
        <img
            class="img-poster"
            :src="imgPath(movieSelected.value.poster_path)"
            :alt="movieSelected.title"
            height="180"
            width="120"
        >
        <div>
            <div>{{ movieSelected.value.title }}</div>
            <div>{{ movieSelected.value.original_title }}</div>
            <div>{{ movieSelected.value.vote_count }}</div>
        </div>
    </div>
</template>

<script setup lang='ts'>
// LIBRARIES AND SERVICES
import { onBeforeMount } from 'vue';
import { useRoute } from 'vue-router'
import { useMovies } from '@/composables/useMovies'
import { imageBaseUrl } from '@/constants/globals';

// VARIABLES
const route = useRoute()
const {
    movieCredits,
    movieSelected,
    loadCredits
} = useMovies()

onBeforeMount(() => {
    const movieId = Number(route.params.id)

    console.log(movieSelected.value)

    loadCredits(movieId)
})

// METHODS
const imgPath = (path: string) => imageBaseUrl + path

</script>

<style lang="scss" scoped>
.container-credits-img {
    text-align: center;

    & img {
        opacity: 0.5;
        width: 100%;
        height: 250px;
        border-bottom: 1px solid white;
    }

    & span {
        position: relative;
        top: -3.5rem;
        font-weight: 500;
        letter-spacing: 0.15em;
        word-spacing: 0.25em;
        font-size: larger;
    }
}
.container-credits-body {
    display: flex;
}
</style>