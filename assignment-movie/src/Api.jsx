import axios from "axios";

const baseUrl = import.meta.env.VITE_APP_BASEURL
const apiKey = import.meta.env.VITE_APP_APIKEY
export const getMovies = async () => {
    const movie = await axios.get(`${baseUrl}${apiKey}&s=man`)
    return movie.data.Search
}
export const searchMovies = async (q) => {
    const search = await axios.get(`${baseUrl}${apiKey}&s=${q}`);
    console.log({search : search})
    return search.data.Search
}