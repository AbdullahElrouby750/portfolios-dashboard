import axios from "axios";

const auth = axios.create({baseURL: import.meta.env.AUTH_API_URL});

export const authGet = async (path) => {
    try {
        const response = await auth.get(path);
        console.log('response:: ', response)
        return response.data;
    } catch (error) {
        console.error(`Error fetching data from ${path} :: ${error}`);
        return null;
    }
}

export const authPost = async (path, data) => {
    try {
        const response = await auth.post(path, data);
        console.log('response:: ', response)
        return response.data;
    } catch (error) {
        console.error(`Error fetching data from ${path} :: ${error}`);
        return null;
    }
}