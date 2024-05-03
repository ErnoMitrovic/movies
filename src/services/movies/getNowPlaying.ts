import httpInstance from "../httpInstance";

export const getNowPlaying = async () => {
    try {
        const endpoint = '/now_playing';
        const response = await httpInstance.get(endpoint);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching now playing movies');
    }
}