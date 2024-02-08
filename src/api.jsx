import axios from 'axios';
import { response } from './utils/response';



const baseurl = import.meta.env.VITE_REACT_APP_API_URL;

export const getProduct = async (param) => {
    try {
        const search = await axios.get(`${baseurl}/api/public/product?params=${param}`);
        return response(search.data.data, search.status);
    } catch (error) {
        console.log(error);
        return response(error.response.data, error.response.status)
    }
}

// export const searchMovie = async (key) => {
//     const search = await axios.get(`${baseurl}/search/movie?page=1&query=${key}&api_key=${apikey}`);
//     return search.data.results;
// }