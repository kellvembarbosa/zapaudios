import Axios from "axios";
import DirectusSDK from "@directus/sdk-js";

export const API = Axios.create({
    baseURL: 'https://painel.zapaudios.com'
})

// export const client = new DirectusSDK({
//     url: "https://painel.zapaudios.com",
//     project: "",
//     mode: "jwt"
//   });