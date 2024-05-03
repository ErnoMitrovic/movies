import Config from "../config";
import axios from "axios";

const httpInstance = axios.create({
    baseURL: Config.API_URL,
    headers: {
        "Content-Type": "application/json",
    },
    params: {
        api_key: Config.API_KEY,
    }
});

export default httpInstance;