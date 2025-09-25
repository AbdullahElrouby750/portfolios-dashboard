import axios from "axios";

const envMode = import.meta.env.MODE
const baseURL = envMode === 'development' ? import.meta.env.VITE_AUTH_API_URL_LOCAL : import.meta.env.VITE_AUTH_API_URL_SERVER


const auth = axios.create({ baseURL });

export const authGet = async (path) => {
    try {
        const response = await auth.get(path, { withCredentials: true });
        console.log('response:: ', response)
        return response.data;
    } catch (error) {
        console.error(`Error fetching data from ${path} :: ${error}`);
        throw error
    }
}

export const authPost = async (path, data) => {
    try {
        const response = await auth.post(path, data, { withCredentials: true });
        console.log('response:: ', response)
        return response.data;
    } catch (error) {
        console.error(`Error fetching data from ${path} :: ${error}`);
        throw error
    }
}