import React, { useEffect } from 'react'
import { getDetail } from '../../services/movies';
import { MovieCard } from '../../components/MovieCard';
import { IMovieResponse } from '../Popular/types';

const MyFavorites = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true)
  const [error, setError] = React.useState<string | null>(null)
  const [movies, setMovies] = React.useState<IMovieResponse[]>([])

  const favorites = localStorage.getItem('favoriteMovies') ? JSON.parse(localStorage.getItem('favoriteMovies') as string) : [];

  const getFavorites = async () => {
    const newMovies = await Promise.all(favorites.map(async (favorite: string) => {
      try {
        return await getDetail(favorite)
      } catch (error) {
        setError('Error fetching favorite movies');
      }
    }
    ));
    setMovies(newMovies);
    setIsLoading(false);
  }

  useEffect(() => {
    setIsLoading(true);
    getFavorites();
  }, []);

  return (
    <div>
      {isLoading ? <p>Loading...</p> :
        error ? <p>{error}</p> :
          !movies.length ? <p>No favorite movies</p> :
            movies.map((movie) => {
              return (
                <MovieCard key={movie.id}
                  title={movie.title}
                  genreId={movie.genre_ids[0]}
                  posterPath={movie.poster_path}
                  movieId={movie.id}
                  voteAverage={movie.vote_average}
                />
              )
            })
      }
    </div>

  )
}

export default MyFavorites