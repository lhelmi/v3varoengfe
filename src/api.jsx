import axios from 'axios';

const baseurl = import.meta.env.VITE_REACT_APP_API_URL;

export const getProduct = async (param) => {
    try {
        const search = await axios.get(`${baseurl}/api/public/product?params=${param}`);
        return search.data.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

// export const searchMovie = async (key) => {
//     const search = await axios.get(`${baseurl}/search/movie?page=1&query=${key}&api_key=${apikey}`);
//     return search.data.results;
// }