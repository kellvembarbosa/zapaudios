import Axios from "axios";

export const API = Axios.create({
    baseURL: process.env.BASE_URL
})