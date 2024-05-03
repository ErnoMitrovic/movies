import httpInstance from "../httpInstance";

export const getDetail = async (id: string) => {
    try {
        const endpoint = `/${id}`;
        const response = await httpInstance.get(endpoint);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching movie detail');
    }
}