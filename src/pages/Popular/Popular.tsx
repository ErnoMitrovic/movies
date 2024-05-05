import { useEffect, useState } from 'react'
import { getPopular } from '../../services/movies';
import { IMovieResponse } from './types';
import { MovieGrid } from '../../components/MovieGrid';

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
          <MovieGrid movies={movies} title='Popular' />
      }
    </div>
  )
}

export default Popular