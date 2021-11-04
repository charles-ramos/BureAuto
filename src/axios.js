import axios from "axios"
import config from "./config"

// Configuração básica do axios
const axiosConfig = axios.create({
    baseURL: config.SERVER_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
})

const _onError = function(error) {
    if (error.message.includes("code 401") && !window.location.href.includes(`${config.CLIENT_URL}/login`)) {
        window.location.href = `${config.CLIENT_URL}/login`
    }
}

axiosConfig.interceptors.response.use(res => res, _onError)

export default axiosConfig