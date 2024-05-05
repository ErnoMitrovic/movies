import React from 'react'
import { MovieGridProps } from './types'
import { MovieCard } from '../MovieCard'
import { GridHeader } from '../GridHeader'
import { SortType } from '../GridHeader/types'

const MovieGrid: React.FC<MovieGridProps> = ({ movies, title }) => {
    const [sortType, setSortType] = React.useState<SortType>('');

    const sortedMovies = React.useMemo(() => {
        if (sortType === '') {
            return movies;
        }

        return [...movies].sort((movieA, movieB) => {
            if (sortType === 'name') {
                return movieA.title.localeCompare(movieB.title);
            } else if (sortType === 'rating') {
                return movieA.vote_average - movieB.vote_average;
            } else if (sortType === 'release') {
                return movieA.release_date < movieB.release_date ? -1 : 1;
            } else {
                return 0;
            }
        });
    }, [sortType, movies]);

    return (
        <>
            <GridHeader title={title} sortType={sortType} setSortType={setSortType} />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pl-8 pr-8'>
                {
                    sortedMovies.map((movie) => (
                        <MovieCard key={movie.id}
                            title={movie.title}
                            genreId={movie.genre_ids[0]}
                            posterPath={movie.poster_path}
                            movieId={movie.id}
                            voteAverage={movie.vote_average}
                        />
                    ))
                }
            </div>
        </>
    );
};

export default MovieGrid;
