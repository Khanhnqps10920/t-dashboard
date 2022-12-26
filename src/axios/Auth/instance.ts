import axios from 'axios'
import { API_CONST } from '../../utils/constant'

const authAxios = axios.create({
    baseURL: API_CONST.API_URL,
    headers: {
        'Content-Type': 'application/json',
    }
})

export default authAxios

authAxios.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
    }
    return config
}, (error) => {
    return Promise.reject(error)
})