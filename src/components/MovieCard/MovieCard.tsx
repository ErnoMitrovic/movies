import React from 'react'
import { IGenre, MovieCardProps } from './types'
import { IMAGE_SOURCE } from '../../constants/moviesMock'
import genres from '../../constants/genres.json'
import { Pill } from '../Pill'
import { useNavigate } from 'react-router-dom'

const MovieCard: React.FC<MovieCardProps> = ({
    title,
    genreId,
    movieId,
    voteAverage,
    posterPath
}) => {
    const navigate = useNavigate();
    const imageSourceComplete = IMAGE_SOURCE + posterPath;

    const getGenre = (genreId: number) => {
        const genre: IGenre | undefined = genres.genres.find(genre => genre.id === genreId);
        return genre ? genre.name : 'unclassified';
    }

    return (
        <div onClick={
            () => navigate(`/movie/${movieId}`)
        } className='relative overflow-hidden h-auto shadow shrink-0 bg-white float-left mr-5 mb-5 group rounded-lg scroll-smooth'>
            <div className="bg-black transition-opacity duration-300 overflow-hidden">
                <img src={imageSourceComplete} alt={title}
                    className="relative h-80 max-w-none transition duration-900 hover:opacity-75 hover:scale-105" />
            </div>
            <div className='absolute bottom-0 left-0 w-full  text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100' >
                <div className="bg-gradient-to-t from-black p-4">
                    <h2 className="text-xl font-bold">{title}</h2>
                    <Pill title={getGenre(genreId)} color='red' />
                    <p>★ {voteAverage.toPrecision(2)}</p>
                    <p>{movieId}</p>
                </div>
            </div>
        </div>

    )
}

export default MovieCard