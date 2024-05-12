import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    movies: [],
    size: 0,
};

export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            const movieToAdd = action.payload;
            if (!state.movies.some(movie => movie.id === movieToAdd.id)) {
                state.movies.push(movieToAdd);
                state.size++;
            }
        },
        removeFromWishlist: (state, action) => {
            const movieToRemove = action.payload;
            state.movies = state.movies.filter(movie => movie.id !== movieToRemove.id);
            state.size--;
        },
        clearWishlist: state => {
            state.movies = [];
            state.size = 0;
        },
    },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;