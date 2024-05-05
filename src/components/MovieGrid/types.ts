import { IMovieResponse } from "../../pages/Popular/types";

export interface MovieGridProps {
    movies: IMovieResponse[];
    title: string;
}