import axios from "axios"

export const axiosInstance = axios.create({
    baseURL : "https://janashiflowersblog.herokuapp.com/api/"
})
