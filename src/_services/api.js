import axios from 'axios';
const apiUrl = "http://localhost:3001/movies"
export async function getMovies() {
    return await axios.get(apiUrl);
}
export async function getMovie(id) {
    return await axios.get(`${apiUrl}/${id}`);
}
export async function addProduct(product) {
    return await axios.post(apiUrl, product);
}
export async function updateMovie(id, movie) {
    return await axios.put(`${apiUrl}/${id}`, movie)
}
export async function deleteProduct(id) {
    return await axios.delete(`${apiUrl}/${id}`);
}