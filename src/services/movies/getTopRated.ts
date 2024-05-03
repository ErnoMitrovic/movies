import httpInstance from "../httpInstance";

export const getTopRated = async () => {
    try {
        const endpoint = "/top_rated"
        const response = await httpInstance.get(endpoint);
        return response.data;
    }
    catch (error) {
        throw new Error('Error fetching top rated movies');
    }
}