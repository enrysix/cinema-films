<template>
    <span
        class="btn-back"
        @click="goBack()"
    >
        &lt;
    </span>
    <div class="container-credits-img">
        <img
            :src="imgPath(movieSelected.value.backdrop_path)"
            :alt="movieSelected.title"
        >
        <span>{{ movieSelected.value.title }}</span>
    </div>
    <div class="body-content">
        <div class="container-title">
            <div class="credits-img">
                <img
                    class="img-poster"
                    :src="imgPath(movieSelected.value.poster_path)"
                    :alt="movieSelected.title"
                    height="180"
                    width="120"
                >
            </div>
            <div>
                <div class="credits-title">{{ movieSelected.value.title }}</div>
                <div class="credits-subtitle">{{ movieSelected.value.original_title }}</div>
                <div class="credits-subtitle color-darkgray">
                    ☆
                    {{ movieSelected.value.vote_count }}
                </div>
            </div>
        </div>
        <div>
            <p class="container-description">
                {{ movieSelected.value.overview }}
            </p>
        </div>
        <div>
            <span>
                Reparto de actores
            </span>
            <ItemsSlider
                :movies="creditsItems(movieCredits.cast)"
                :slides-per-view="10"
                :slides-by-default="2"
                :navigation="true"
                :height="180"
                :width="120"
                :profile-img="true"
                :noClick="true"
            />
        </div>
        <div>
            <span>
                Equipo Técnico
            </span>
            <ItemsSlider
                :movies="creditsItems(movieCredits.crew)"
                :slides-per-view="10"
                :slides-by-default="2"
                :navigation="true"
                :height="180"
                :width="120"
                :profile-img="true"
                :noClick="true"
            />
        </div>
    </div>
</template>

<script setup lang='ts'>
// LIBRARIES AND SERVICES
import { onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import { useMovies } from '@/composables/useMovies'
import { imageBaseUrl } from '@/constants/globals';
// COMPONENTS
import ItemsSlider from '@/components/ItemsSlider.vue'

// VARIABLES
const route = useRoute()
const router = useRouter()
const {
    movieCredits,
    movieSelected,
    loadCredits
} = useMovies()

onBeforeMount(() => {
    const movieId = Number(route.params.id)

    loadCredits(movieId)
})

// METHODS
const imgPath = (path: string) => imageBaseUrl + path
const goBack = () => router.push({ path: '/' })
const creditsItems = (credits: []) => credits.filter((movie: []) => movie.profile_path);
</script>

<style lang="scss" scoped>
.btn-back {
    position: absolute;
    margin: 2rem;
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 1;
}
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
        letter-spacing: 0.1em;
        word-spacing: 0.1em;
        font-size: larger;
    }
}
.container-title {
    display: flex;
    align-items: center;
}
.credits-img {
    padding: 0 2rem 0 0;
}
.credits-title {
    font-size: larger;
}
.credits-subtitle {
    font-size: small;
}
.color-darkgray {
    color: darkgray;
}
.container-description {
    padding: 0 3rem;
}
</style>