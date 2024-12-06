import axios from "axios";

export const remove = async (id) => {
    return await axios.delete(import.meta.env.VITE_APP_API + "/product/" + id);
};

export const create = async (data) => {
    return await axios.post(import.meta.env.VITE_APP_API + "/product", data);
};
export const list = async () => {
    return await axios.get(import.meta.env.VITE_APP_API + "/product");
};
export const read = async (id) => {
    return await axios.get(import.meta.env.VITE_APP_API + "/product/" + id);
};
export const update = async (id, data) => {
    return await axios.put(import.meta.env.VITE_APP_API + "/product/" + id, data);
};
