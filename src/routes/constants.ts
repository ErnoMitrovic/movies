import { RouteElement } from "./types";

export const ROUTES: Record<string, RouteElement> = {
    HOME: {
        name: 'Home',
        path: '/'
    },
    POPULAR: {
        name: 'Popular',
        path: '/popular'
    },
    TOP_RATED: {
        name: 'Top Rated',
        path: '/top_rated'
    },
    NOW_PLAYING: {
        name: 'Now Playing',
        path: '/now_playing'
    },
    UPCOMING: {
        name: 'Upcoming',
        path: '/upcoming'
    },
    MY_FAVORITES: {
        name: 'My Favorites',
        path: '/my-favorites'
    },
    MOVIE: {
        name: 'Movie',
        path: '/movie/:id',
        notIncludeInMenu: true
    }, 
    LOGIN: {
        name: 'Login',
        path: '/login',
        notIncludeInMenu: true
    },
    SIGN_UP: {
        name: 'Sign Up',
        path: '/sign-up',
        notIncludeInMenu: true
    }
}