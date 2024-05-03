import { useEffect, useState } from "react"
import { IMovieResponse } from "../Popular/types";
import { getUpcoming } from "../../services/movies";
import { MovieCard } from "../../components/MovieCard";

const Upcoming = () => {
  const [upcoming, setUpcoming] = useState<IMovieResponse[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getUpcomingMovies = async () => {
    try {
      setIsLoading(true);
      const response = await getUpcoming();
      setUpcoming(response.results);
    } catch (error) {
      setError('Error fetching upcoming movies');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getUpcomingMovies();
  }, []);

  return (
    <div className="bg-[#f3f3f3]">
      {isLoading && <p>Loading...</p>}
      {
        error ? <p>{error}</p> :
          <div>
            {upcoming.map((movie) => (
              <MovieCard key={movie.id}
                title={movie.title}
                genreId={movie.genre_ids[0]}
                posterPath={movie.poster_path}
                movieId={movie.id}
                voteAverage={movie.vote_average} />
            ))}
          </div>
      }
    </div>
  )
}

export default Upcoming