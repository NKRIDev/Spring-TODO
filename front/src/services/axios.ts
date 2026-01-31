import axios from "axios";

/**
 * Axios instance with base URL and headers
 */
export const API = axios.create({
    baseURL: import.meta.env.API_URL,
    timeout: 300000,
    headers: {
        "Content-Type" : "application/json",
    },
});