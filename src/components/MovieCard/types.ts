export interface MovieCardProps { 
    /**
     * The title of the movie.
     */
    title: string;
    /**
     * The genre ID of the movie.
     */
    genreId: number;
    /**
     * The movie ID.
     */
    movieId: number;
    /**
     * The average vote of the movie.
     */
    voteAverage: number;
    /**
     * The path to the poster image of the movie.
     */
    posterPath: string;
}

export interface IGenre {
    id: number;
    name: string;
}