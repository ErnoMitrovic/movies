import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';
import { ROUTES } from './constants';
import { Home, Upcoming, NowPlaying, Popular, TopRated, Movie, MyFavorites, Login, SignUp } from '../pages';
import { useAppContext } from '../store/app_context';

const AppRouter = () => {
    const { user } = useAppContext();
    const isUserLoggedIn = Boolean(user);

    return (
        <Router>
            <Routes>
                {/* Private Routes */}
                <Route path={ROUTES.HOME.path} element={isUserLoggedIn ? <PrivateRouter /> : <Navigate to={ROUTES.LOGIN.path} />}>
                    <Route index element={<Home />} />
                    <Route path={ROUTES.POPULAR.path} element={<Popular />} />
                    <Route path={ROUTES.TOP_RATED.path} element={<TopRated />} />
                    <Route path={ROUTES.NOW_PLAYING.path} element={<NowPlaying />} />
                    <Route path={ROUTES.UPCOMING.path} element={<Upcoming />} />
                    <Route path={ROUTES.MOVIE.path} element={<Movie />} />
                    <Route path={ROUTES.MY_FAVORITES.path} element={<MyFavorites />} />
                    <Route path="*" element={<div>404</div>} />
                </Route>

                {/* Public Routes */}
                <Route path={ROUTES.HOME.path} element={isUserLoggedIn ? <Navigate to={ROUTES.HOME.path} /> : <PublicRouter />}>
                    <Route path={ROUTES.LOGIN.path} element={<Login />} />
                    <Route path={ROUTES.SIGN_UP.path} element={<SignUp />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default AppRouter;
