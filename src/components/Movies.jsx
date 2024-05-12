import { useEffect, useState } from "react";
import { getMovies } from "../_services/api";
import Movie from "./Movie";

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [noResults, setNoResults] = useState(false);

    const fetchMovies = async (searchTerm = "") => {
        const response = await getMovies();
        const allMovies = response.data;

        if (searchTerm.trim() === "") {
            setFilteredMovies([]);
            setMovies(allMovies);
        } else {
            const filtered = allMovies.filter(movie =>
                movie.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setMovies([]);
            setFilteredMovies(filtered);
        }

        setNoResults(filteredMovies.length === 0 && searchTerm !== "");
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    const handleSearch = () => {
        fetchMovies(searchTerm);
    };

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        handleSearch();
    };

    return (
        <div>
            <h1>Movies</h1>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                <button type="submit">Search</button>
            </form>
            {
                (filteredMovies.length > 0 ? filteredMovies : movies).map(movie => (
                    <Movie key={movie.id} movie={movie} />
                ))


            }

        </div>
    );
}
