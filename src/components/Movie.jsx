import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {updateMovie} from "../_services/api.js";
import {useDispatch, useSelector} from "react-redux";
import {addToWishlist, clearWishlist, removeFromWishlist} from "../state/wishlist/wishlistSlice.ts";

import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Movie({movie}) {
    const [formData, setFormData] = useState({});
    const [averageRating, setAverageRating] = useState(0);

    const {movies} = useSelector((state) => state.wishlist);
    const dispatch = useDispatch();

    console.log("wishlist : " + movies + "size : " + movies.length);
    const handleChange = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value});
    }
    const handleSubmit = async (event) => {
        //event.preventDefault();
        const updatedMovie = {
            ...movie,
            note: [...movie.note, formData.note],
        };
        await updateMovie(movie.id, updatedMovie);
    };

    const handleAddToWishlist = async (event) => {
        event.preventDefault();
        dispatch(addToWishlist(movie));
        toast.success("Added to wishlist", {autoClose: 3000});
    };

    const calculateAverageRating = () => {
        let total = 0;
        movie.note.forEach((note) => {
            total += parseInt(note); // Convert note to number before adding
        });
        return total / movie.note.length; // Return average rating
    };

    useEffect(() => {
        setAverageRating(calculateAverageRating());
    }, [movie, setAverageRating]);

    return (
        <>
            <ToastContainer/>
            <br/> <br/> <br/>
            <div>
                <Link
                    to={`/nav/movie-details/${movie.id}`}
                    style={{
                        textDecoration: "none",
                        color: "white",
                    }}
                >
                    <p>{movie.title}</p>
                </Link>
                <form onSubmit={handleSubmit}>
                    <label className="form-label">rating</label>
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        onChange={handleChange}
                        id="note"
                    />
                    <button type="submit">Rate</button>
                </form>
                {
                    movie.note.length === 0 && <p>No rating</p>
                }
                {
                    movie.note.length > 0 && <p>Average Rating: {averageRating}</p>
                }
            </div>
            <div>
                <button onClick={handleAddToWishlist}>Add to Wishlist</button>
            </div>
        </>
    )
}
