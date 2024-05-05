import React from 'react'
import { MovieDisplayerProps } from './types'
import { MovieCard } from '../MovieCard'
import { ShowButton } from '../ShowButton';
import { useNavigate } from 'react-router-dom';

const MovieDisplayer: React.FC<MovieDisplayerProps> = ({ title, movies }) => {

    const navigate = useNavigate();

    const parsedMovies = movies.map((movie) => {
        return {
            movieId: movie.id,
            posterPath: movie.poster_path,
            title: movie.title,
            voteAverage: movie.vote_average,
            genreId: movie.genre_ids[0]
        }
    });

    return (
        <div className='px-4 min-h-0 align-baseline mb-8'>
            {/* Add the title and the show button horizontally */}
            <div className='flex flex-row items-center justify-between' >
                <h2 className='text-2xl font-bold p-4 '>{title}</h2>
                <ShowButton onClick={() => navigate(title.toLowerCase())} />
            </div>
            <div className='overflow-x-scroll overflow-y-hidden w-full no-scrollbar'>
                <div className='m-0 p-0 relative leading-normal flex overflow-x-auto snap-mandatory no-scrollbar'>
                    {
                        parsedMovies.map((movie, index) => {
                            return (
                                <MovieCard key={index} {...movie} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieDisplayer