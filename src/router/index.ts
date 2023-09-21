import { createRouter, createWebHistory, Router } from 'vue-router'

// VIEWS
import HomeMovies from '@/views/HomeMovies.vue'
import MovieCredits from '@/views/MovieCredits.vue'

/**
 * Define Web Router
 */
const router: Router = createRouter({
    history: createWebHistory(),
    routes: [
        {   path: '/', component: HomeMovies },
        {   path: '/movie/:id', name: 'credits', component: MovieCredits },
        {   path: '/:catchAll(.*)', redirect: { name: 'HomeMovies' } }
    ]
})

export default router