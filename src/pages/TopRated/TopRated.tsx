import { useEffect, useState } from 'react'
import { getTopRated } from '../../services/movies';
import { MovieCard } from '../../components/MovieCard';
import { IMovieResponse } from '../Popular/types';

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
            {movies.map((movie) => (
              <MovieCard key={movie.id}
                title={movie.title}
                genreId={movie.genre_ids[0]}
                posterPath={movie.poster_path}
                movieId={movie.id}
                voteAverage={movie.vote_average}
              />
            ))}
          </div>
      }
    </div>
  )
}

export default TopRated;