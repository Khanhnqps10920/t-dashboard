import axios, { AxiosRequestConfig } from 'axios'
import { API_CONST } from '../../utils/constant'

const authAxios = axios.create({
    baseURL: API_CONST.API_URL,
    headers: {
        'Content-Type': 'application/json',
    }
})

export default authAxios

// just simply fix build fail, might be the axios new update patch err, changed to axios interface when find way to fix.
authAxios.interceptors.request.use((config: any) => {

    if (!config?.headers) {
        throw new Error(`Expected 'config' and 'config.headers' not to be undefined`);
    }
    
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('accessToken');

    return config
}, (error) => {
    return Promise.reject(error)
})