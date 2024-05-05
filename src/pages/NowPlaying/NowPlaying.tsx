import { useEffect, useState } from "react"
import { IMovieResponse } from "../Popular/types"
import { getNowPlaying } from "../../services/movies";
import { MovieCard } from "../../components/MovieCard";
import { MovieGrid } from "../../components/MovieGrid";

const NowPlaying = () => {
  const [nowPlaying, setNowPlaying] = useState<IMovieResponse[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getNowPlayingMovies = async () => {
    try {
      setIsLoading(true);
      const response = await getNowPlaying();
      setNowPlaying(response.results);
    } catch (error) {
      setError('Error fetching now playing movies');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return (
    <div className="bg-[#f3f3f3]">
      {isLoading && <p>Loading...</p>}
      {
        error ? <p>{error}</p> :
          <div>
            <MovieGrid movies={nowPlaying} title='Now playing movies' />
          </div>
      }
    </div>
  )
}

export default NowPlaying