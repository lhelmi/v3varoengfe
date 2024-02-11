import axios from 'axios';
import { response } from './utils/response';

const baseurl = import.meta.env.VITE_REACT_APP_API_URL;

export const getProduct = async (param) => {
    try {
        const search = await axios.get(`${baseurl}/api/public/product?params=${param}`);
        return response(search.data.data, search.status);
    } catch (error) {
        return response(error.response.data, error.response.status)
    }
}

export const login = async (param) => {
    try {
        const res = await axios.post(`${baseurl}/api/users/login`, {
            username : param.username,
            password : param.password
        });
        
        return response(res.data.data, res.status);
    } catch (error) {
        return response(error.response.data, error.response.status);
    }
}

// export const searchMovie = async (key) => {
//     const search = await axios.get(`${baseurl}/search/movie?page=1&query=${key}&api_key=${apikey}`);
//     return search.data.results;
// }