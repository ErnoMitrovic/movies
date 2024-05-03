import httpInstance from "../httpInstance";

export const getPopular = async () => {
    try {
        const endpoint = '/popular';
        const response = await httpInstance.get(endpoint);
        return response.data;
    } catch (error) {
        console.error("Error fetching popular movies", error);
        throw error;
    }
}