import Axios from "axios";

export const API = Axios.create({
    baseURL: 'https://api.zapaudios.com'
})