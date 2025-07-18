import axios from "axios";

const api = axios.create({baseURL: import.meta.env.OTHER_API_URL});


export const apiGet = async (path, params) => {
    try {
        const response = await api.get(path, {params});
        console.log('response:: ', response)
        return response.data;
    } catch (error) {
        console.error(`Error fetching data from ${path} :: ${error}`);
        return null;
    }
}


export const apiPost = async (path, data) => {
    try {
        const response = await api.post(path, data);
        console.log('response:: ', response)
        return response.data;
    } catch (error) {
        console.error(`Error posting data to ${path} :: ${error}`);
        return null;
    }
}


export const apiPut = async (path, data) => {
    try {
        const response = await api.put(path, data);
        console.log('response:: ', response)
        return response.data;
    } catch (error) {
        console.error(`Error putting data to ${path} :: ${error}`);
        return null;
    }
}


export const apiDelete = async (path) => {
    try {
        const response = await api.put(path);
        console.log('response:: ', response)
        return response.data;
    } catch (error) {
        console.error(`Error deleteing data from ${path} :: ${error}`);
        return null;
    }
}