import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getMovie} from "../_services/api.js";

export default function MoviesDetails() {
    const [movie, setMovie] = useState("");
    const param = useParams();
    const fetchMovie = async () => {
        const fetchedMovie = (await getMovie(param.id)).data;

        setMovie(fetchedMovie);

    };
    useEffect(() => {
        fetchMovie();
    }, [])
    if(movie === "") {
        return <div>movie not found </div>
    }
    return (
        <div>

            <h1>MoviesDetails</h1>
            <h2>{movie.title}</h2>
            <h2>{movie.year}</h2>
        </div>
    )
}