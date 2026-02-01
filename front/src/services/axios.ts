import axios from "axios";

/**
 * Axios instance with base URL and headers
 */
export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 10_000,
    headers: {
        "Content-Type" : "application/json",
    },
});

// Simulate network latency
api.interceptors.response.use(
    async (response) => {
        // attend 1 seconde (1000 ms) avant de renvoyer la réponse
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return response;
    },
    (error) => {
        // tu peux aussi retarder les erreurs si tu veux
        return Promise.reject(error);
    }
);