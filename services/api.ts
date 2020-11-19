import Axios from "axios";

export const API = Axios.create({
    baseURL: 'https://api.zapaudios.com/wp-json/wp/v2',
})
// export const client = new DirectusSDK({
//     url: "https://painel.zapaudios.com",
//     project: "",
//     mode: "jwt"
//   });