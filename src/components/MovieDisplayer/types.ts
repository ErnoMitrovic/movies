import { IMovieResponse } from "../../pages/Popular/types";

export interface MovieDisplayerProps {
    title: string;
    movies: IMovieResponse[];
};