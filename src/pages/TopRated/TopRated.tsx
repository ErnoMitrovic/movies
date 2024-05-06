import { useEffect, useState } from 'react'
import { getTopRated } from '../../services/movies';
import { IMovieResponse } from '../Popular/types';
import { MovieGrid } from '../../components/MovieGrid';

const TopRated = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [movies, setMovies] = useState<IMovieResponse[]>([]);
  const [error, setError] = useState<string | null>(null);

  const getTopRatedMovies = async () => {
    try {
      setIsLoading(true);
      const response = await getTopRated();
      setMovies(response.results);
    } catch (error) {
      setError('Error fetching top rated movies');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  return (
    <div className="bg-[#f3f3f3]">
      {isLoading && <p>Loading...</p>}
      {
        error ? <p>{error}</p> :
          <div>
            <MovieGrid movies={movies} title='Top rated movies' />
          </div>
      }
    </div>
  )
}

export default TopRated;