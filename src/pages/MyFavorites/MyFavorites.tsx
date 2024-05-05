import React, { useEffect } from 'react'
import { getDetail } from '../../services/movies';
import { MovieCard } from '../../components/MovieCard';
import { MovieDetailProps } from '../../components/MovieDetail/types';

const MyFavorites = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true)
  const [error, setError] = React.useState<string | null>(null)
  const [movies, setMovies] = React.useState<MovieDetailProps[]>([])

  const favorites = localStorage.getItem('favoriteMovies') ? JSON.parse(localStorage.getItem('favoriteMovies') as string) : [];

  const getFavorites = async () => {
    setIsLoading(true);
    const newMovies = await Promise.all(favorites.map(async (favorite: string) => {
      try {
        const response = await getDetail(favorite);
        return response;
      } catch (error) {
        setError("An error occurred while fetching the data. Please try again later.");
        return undefined;
      }
    }));
    const filteredMovies = newMovies.filter(movie => movie !== undefined);
    setMovies(filteredMovies as MovieDetailProps[]);
    setIsLoading(false);
  }

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <div>
      {isLoading ? <p>Loading...</p> :
        error ? <p>{error}</p> :
          !movies.length ? <p>No favorite movies</p> :
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pl-8 pr-8'>
              {
                movies.map((movie, index) => {
                  return (
                    <MovieCard key={movie.id || index}
                      title={movie.id || ""}
                      genreId={movie.genres?.at(0)?.id || 0}
                      movieId={Number(movie.id) || Number(index)}
                      voteAverage={movie.vote_average || 0}
                      posterPath={movie.poster_path || ""}
                    />
                  )
                })
              }
            </div>
      }
    </div>

  )
}

export default MyFavorites