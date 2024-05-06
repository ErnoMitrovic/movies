import { useEffect, useState } from "react"
import { IMovieResponse } from "../Popular/types";
import { getUpcoming } from "../../services/movies";
import { MovieGrid } from "../../components/MovieGrid";

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
          <MovieGrid title="Upcoming" movies={upcoming} />
      }
    </div>
  )
}

export default Upcoming