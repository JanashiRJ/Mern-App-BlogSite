import axios from "axios"

export const axiosInstance = axios.create({
    baseURL : "https://janashiflowerblog.herokuapp.com/api/"
})
