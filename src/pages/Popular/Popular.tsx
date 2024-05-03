import { useEffect, useState } from 'react'
import { getPopular } from '../../services/movies';
import { IMovieResponse } from './types';
import { MovieCard } from '../../components/MovieCard';

const Popular = () => {
  const [movies, setMovies] = useState<IMovieResponse[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getPopularMovies = async () => {
    try {
      const response = await getPopular();
      setMovies(response.results);
    } catch (error) {
      setError('Error fetching popular movies');
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getPopularMovies();
    setIsLoading(false);
  }, [])

  return (
    <div>
      {isLoading ? <p>Loading...</p> :
        error ? <p>{error}</p> :
          movies.map((movie) => {
            console.log(movie)
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

export default Popular