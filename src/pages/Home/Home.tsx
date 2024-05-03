import { useEffect, useState } from "react";
import { MovieDisplayer } from "../../components/MovieDisplayer";
import { getNowPlaying, getPopular, getTopRated } from "../../services/movies";
import { IMovieResponse } from "../Popular/types";

const Home = () => {
    const [popularMovies, setPopularMovies] = useState<IMovieResponse[]>([]);
    const [topRatedMovies, setTopRatedMovies] = useState<IMovieResponse[]>([]);
    const [nowPlaying, setNowPlaying] = useState<IMovieResponse[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const getPopularMovies = async () => {
        try {
            const response = await getPopular();
            setPopularMovies(response.results);
        } catch (error) {
            setError('Error fetching popular movies');
        }
    }

    const getTopRatedMovies = async () => {
        try {
            const response = await getTopRated();
            setTopRatedMovies(response.results);
        } catch (error) {
            setError('Error fetching top rated movies');
        }
    }

    const getNowPlayingMovies = async () => {
        try {
            const response = await getNowPlaying();
            setNowPlaying(response.results);
        } catch (error) {
            setError('Error fetching now playing movies');
        }
    }

    useEffect(() => {
        setIsLoading(true);
        getPopularMovies();
        getTopRatedMovies();
        getNowPlayingMovies();
        setIsLoading(false);
    }, []);

    return (
        <div className="bg-[#f3f3f3]">
            {isLoading && <p>Loading...</p>}
            {
                error ? <p>{error}</p> :
                    <>
                        <MovieDisplayer title="POPULAR" movies={popularMovies} />
                        <MovieDisplayer title="TOP RATED" movies={topRatedMovies} />
                        <MovieDisplayer title="NOW PLAYING" movies={nowPlaying} />
                    </>
            }
        </div>
    );
}

export default Home;