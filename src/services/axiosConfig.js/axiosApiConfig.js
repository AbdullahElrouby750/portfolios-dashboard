import axios from "axios";

const api = axios.create({ baseURL: import.meta.env.VITE_OTHER_API_URL_LOCAL });


export const apiGet = async (path, params) => {
    try {
        const response = await api.get(path, { params: params, withCredentials: true });
        console.log('response:: ', response)
        return response.data;
    } catch (error) {
        console.error(`Error fetching data from ${path} :: ${error}`);
        throw error
    }
}


export const apiPost = async (path, data, params) => {
    try {
        const response = await api.post(path, data, { params: params, withCredentials: true });
        console.log('response:: ', response)
        return response.data;
    } catch (error) {
        console.error(`Error posting data to ${path} :: ${error}`);
        throw error
    }
}


export const apiPut = async (path, data, params) => {
    try {
        const response = await api.put(path, data, { params: params, withCredentials: true });
        console.log('response:: ', response)
        return response.data;
    } catch (error) {
        console.error(`Error putting data to ${path} :: ${error}`);
        throw error
    }
}


export const apiDelete = async (path, data, params) => {
    try {
        const response = await api.delete(path, {data, params, withCredentials: true });
        console.log('response:: ', response)
        return response.data;
    } catch (error) {
        console.error(`Error deleteing data from ${path} :: ${error}`);
        throw error
    }
}