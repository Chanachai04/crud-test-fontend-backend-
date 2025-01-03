import axios from "axios";

export const register = async (data) => {
    return await axios.post(import.meta.env.VITE_APP_API + "/register", data);
};
export const login = async (data) => {
    return await axios.post(import.meta.env.VITE_APP_API + "/login", data);
};

export const curentUser = async (authtoken) => {
    return await axios.post(
        import.meta.env.VITE_APP_API + "/current-user",
        {},
        {
            headers: {
                authtoken,
            },
        }
    );
};
export const curentAdmin = async (authtoken) => {
    return await axios.post(
        import.meta.env.VITE_APP_API + "/current-admin",
        {},
        {
            headers: {
                authtoken,
            },
        }
    );
};
