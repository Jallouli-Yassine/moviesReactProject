import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, clearWishlist, removeFromWishlist } from "../state/wishlist/wishlistSlice.ts";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Wishlist(){



const { movies } = useSelector((state) => state.wishlist);
const dispatch = useDispatch();
    return (
        <div>
            <h1>Wishlist</h1>
            {
                movies.length === 0 ? <p>Your Wishlist is empty</p> : <ul> {movies.map((movie) => (
                    <li key={movie.id}>
                        <h3>{movie.title}</h3>
                        <p>{movie.year}</p>
                        <button onClick={() => dispatch(removeFromWishlist(movie))}>Remove from Wishlist</button>
                    </li>
                ))}
                    <button onClick={() => dispatch(clearWishlist())}>Clear Wishlist</button>

                </ul>

            }
        </div>
    )
}