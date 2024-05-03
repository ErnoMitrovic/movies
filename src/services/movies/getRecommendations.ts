import httpInstance from "../httpInstance";

export const getRecommendations = async (movieId: string) => {
    try {
        const response = await httpInstance.get(`/${movieId}/recommendations`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching recommendations');
    }
};