type genre = {
    id: number;
    name: string;
}

export interface MovieDetailProps {
    adult?: boolean;
    runtime?: number;
    release_date?: string;
    vote_average?: number;
    vote_count?: number;
    tagline?: string;
    overview?: string;
    genres?: genre[];
    title?: string;
    poster_path?: string;
    id?: string;
}