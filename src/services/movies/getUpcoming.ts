import httpInstance from "../httpInstance";

export const getUpcoming = async () => {
    try {
        const endpoint = '/upcoming';
        const response = await httpInstance.get(endpoint);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching upcoming movies');
    }
}