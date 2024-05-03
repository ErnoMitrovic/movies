import React, { useEffect } from 'react'
import { MovieDetailProps } from './types'
import { Pill } from '../Pill'
import { IMAGE_SOURCE } from '../../constants/moviesMock';
import FavoriteButton from '../FavoriteButton/FavoriteButton';

const MovieDetail: React.FC<MovieDetailProps> = (
    {
        adult,
        runtime,
        release_date,
        vote_average,
        vote_count,
        tagline,
        overview,
        genres,
        title,
        poster_path,
        id
    }
) => {

    const imageSourceComplete = IMAGE_SOURCE + poster_path;
    const [isFavorite, setIsFavorite] = React.useState<boolean>(false);

    const handleFavorite = () => {
        const favoriteMovies = localStorage.getItem('favoriteMovies') ? JSON.parse(localStorage.getItem('favoriteMovies') as string) : [];

        if (isFavorite) {
            // Remove from local storage
            const newFavorites = favoriteMovies.filter((movieId: string) => movieId !== id);
            localStorage.setItem('favoriteMovies', JSON.stringify(newFavorites));
        } else {
            // Add to local storage
            localStorage.setItem('favoriteMovies', JSON.stringify([...favoriteMovies, id]));
        }

        setIsFavorite(!isFavorite);
    }

    useEffect(() => {
        const favoriteMovies = localStorage.getItem('favoriteMovies') ? JSON.parse(localStorage.getItem('favoriteMovies') as string) : [];
        setIsFavorite(favoriteMovies.includes(id));
    }, [id]);

    return (
        <div className="mx-auto bg-white">
            <div className="flex items-center px-4 py-2">
                <img className="w-1/4 object-cover rounded-lg" src={imageSourceComplete} alt="Movie Poster" />

                <div className="px-4 py-2 mt-2">
                    <h2 className="text-3xl font-semibold text-gray-800">{title}</h2>
                    <p className="mt-2 text-sm text-gray-600">"{tagline}"</p>

                    <div className="flex items-center mt-2">
                        <span className="px-2 py-1 text-xs text-gray-800 bg-gray-200 rounded">18{adult ? '+' : '-'}</span>
                        <span className="mx-2 text-sm text-gray-600">{runtime}</span>
                        <span className="text-sm text-gray-600">{release_date?.slice(0, 3)}</span>
                        <span className="mx-2 text-sm text-yellow-500">★ {vote_average?.toPrecision(3)}</span>
                        <span className="text-sm text-gray-600">{vote_count}</span>
                    </div>

                    <p className="mt-2 text-gray-600">{overview}</p>

                    {genres?.map(genre => <Pill key={genre.id} title={genre.name} color='green' />)}

                    <FavoriteButton isFavorite={isFavorite} onClick={handleFavorite }/>

                </div>
            </div>
        </div>
    )
}

export default MovieDetail