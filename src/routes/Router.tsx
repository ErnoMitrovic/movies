import { RouteObject, createBrowserRouter } from "react-router-dom";

import PrivateRouter from "./PrivateRouter";
import { ROUTES } from "./constants";
import { Home, Upcoming, NowPlaying, Popular, TopRated } from "../pages";
import { Movie } from "../pages/Movie";
import { MyFavorites } from "../pages/MyFavorites";

const routes: RouteObject[] = [
    {
        path: ROUTES.HOME.path,
        element: <PrivateRouter />,
        children: [
            { path: ROUTES.HOME.path, element: <Home /> },
            { path: ROUTES.POPULAR.path , element: <Popular /> },
            { path: ROUTES.TOP_RATED.path, element: <TopRated /> },
            { path: ROUTES.NOW_PLAYING.path, element: <NowPlaying /> },
            { path: ROUTES.UPCOMING.path, element: <Upcoming /> },
            { path: ROUTES.MOVIE.path, element: <Movie />},
            { path: ROUTES.MY_FAVORITES.path, element: <MyFavorites />}, 
            { path: '*', element: <div>404</div>}
        ]
    },
];

export default createBrowserRouter(routes);