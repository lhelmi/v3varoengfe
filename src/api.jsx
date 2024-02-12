import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { response } from './utils/response';

const baseurl = import.meta.env.VITE_REACT_APP_API_URL;


const header = (token) => {
    return {
        'Content-Type': 'application/json',
        'Authorization': `${token}`
    }
}

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

export const createProduct = async (param) => {
    try {
        const token = param.token
        delete param.token;
        
        const res = await axios.post(
            `${baseurl}/api/products`, param, {
                headers: header(token)
            }
        );
        return response(res.data.data, res.status);
    } catch (error) {
        console.log(error)
        return response(error.response.data, error.response.status);
    }
}

export const findProduct = async (token, query) => {
    try {
        const res = await axios.get(
            `${baseurl}/api/product/list?params=${query}`, {
                headers: header(token)
            }
        );
        return response(res.data.data, res.status);
    } catch (error) {
        return response(error.response.data, error.response.status);
    }
}