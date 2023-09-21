import { ref, reactive, toRefs } from 'vue'
import { Movie, MovieCredits } from '@/interfaces/movieInterface'
import {
    getNowPlaying,
    getPopular,
    getCredits
} from '@/services/moviesService'

const moviesNowPlaying = ref<Movie[]>([]);
const popularMovies = ref<Movie[]>([]);
const movieCredits = ref<MovieCredits>({});
const movieSelected = reactive<Movie>({});

/**
 * Main function to manage movie data.
 */
export const useMovies = () => {
    /**
     * Load movies playing now by calling the service
     *
     */
    const loadNowPlaying = async (): Promise<void> => {
        try {
            const { data } = await getNowPlaying();

            if (data) {
                moviesNowPlaying.value = data.results;
            }
        } catch (err) {
            console.log('ERROR: ', err);
        }
    };

    /**
     * Load popular movies by calling the service
     *
     */
    const loadPopular = async (): Promise<void> => {
        try {
            const { data } = await getPopular();

            if (data) {
                popularMovies.value = data.results;
            }
        } catch (err) {
            console.log('ERROR: ', err);
        }
    };

    /**
     * Load the detail of a movie by its movie id
     * @param {number} movieId
     *
     */
    const loadCredits = async (movieId: number): Promise<void> => {
        try {
            const { data } = await getCredits(movieId);

            if (data) {
                movieCredits.value = data;
            }
        } catch (err) {
            console.log('ERROR: ', err);
        }
    };

    return {
        //! Properties
        movieCredits,
        movieSelected,
        moviesNowPlaying,
        popularMovies,

        //! Methods
        loadCredits,
        loadNowPlaying,
        loadPopular
    }
}