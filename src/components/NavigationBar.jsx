import { Link, NavLink, Outlet } from "react-router-dom";

export default function NavigationBar() {
    return (
        <div>
            <Link to="movies">movies</Link> <br></br>
            <Link to="wishlist">wishlist</Link> <br></br>
            <Outlet />
        </div>

    )
}