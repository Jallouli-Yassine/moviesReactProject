import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Movies from './components/Movies';
import Movie from './components/Movie';
import MoviesDetails from './components/MovieDetails';
import { NotFound } from './components/NotFound';
import Wishlist from './components/Wishlist';


const AppRouter = () => {
    return (
        <Router>
            <Routes>

                <Route path="/nav" element={<NavigationBar />}>
                    <Route path="movies" element={<Movies />}>
                        <Route path="movie" element={<Movie />} />
                    </Route>

                    <Route path="movie-details" element={<MoviesDetails />} />
                    <Route path="wishlist" element={<Wishlist />} />
                    <Route path="*" element={<NotFound />} />

                </Route>


            </Routes>
        </Router>


    );
};

export default AppRouter;
