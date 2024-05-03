import { useNavigate, useParams } from 'react-router-dom';
import { MovieDetail } from '../../components/MovieDetail';
import { getDetail, getRecommendations } from '../../services/movies';
import { useEffect, useState } from 'react';
import { MovieDetailProps } from '../../components/MovieDetail/types';
import { IMovieResponse } from '../Popular/types';
import { MovieDisplayer } from '../../components/MovieDisplayer';

const Movie = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [movieDetail, setMovieDetail] = useState<MovieDetailProps>();
    const [recommendations, setRecommendations] = useState<IMovieResponse[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const getMovieDetail = async () => {
        if (!id) {
            navigate('/');
        } else {
            try {
                const response = await getDetail(id);
                setMovieDetail(response);
            } catch (error) {
                setError('Error fetching movie detail');
            }
        }
    }

    const getRecommendationsMovies = async () => {
        if (!id) {
            navigate('/');
        }
        else {
            try {
                const response = await getRecommendations(id);
                setRecommendations(response.results);
            } catch (error) {
                setError('Error fetching recommendations');
            }
        }
    }

    useEffect(() => {
        setIsLoading(true);
        getMovieDetail();
        getRecommendationsMovies();
        setIsLoading(false);
    }, [id]);

    return (
        <div className="bg-[#f3f3f3]">
            {isLoading && <p>Loading...</p>}
            {
                error ? <p>{error}</p> :
                    <div>
                        <MovieDetail id={id} {...movieDetail} />
                        <MovieDisplayer title='Recommendations' movies={recommendations} />
                    </div>
            }
        </div>
    )
}

export default Movie