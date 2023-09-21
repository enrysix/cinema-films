type Credits = {
    adult?: boolean,
    gender?: number,
    id?: number,
    known_for_department?: string,
    name?: string,
    original_name?: string,
    popularity?: number,
    profile_path?: string,
    cast_id?: number,
    character: string,
    credit_id?: string,
    department?: string,
    job?: string,
    order?: number
}

export interface Movie {
    adult?: boolean,
    backdrop_path?: string,
    genre_ids?: number[],
    id?: number,
    original_language?: string,
    original_title?: string,
    overview?: string,
    popularity?: number,
    poster_path?: string,
    release_date?: string,
    title?: string,
    video?: boolean,
    vote_average?: number,
    vote_count?: number
}

export interface MovieCredits {
    id?: number,
    cast?: Credits[],
    crew?: Credits[]
}