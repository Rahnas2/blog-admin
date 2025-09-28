import axios from 'axios'
import { logoutApi, refreshTokenApi } from './authServices';
import { useAuth } from '../AuthContext';

const baseURL = import.meta.env.VITE_BACKEND_URI

console.log('base uri ', baseURL)

const axiosInstance = axios.create({
  baseURL,
  timeout: 30000,
  withCredentials: true
})

let getToken = () => null; // default

export const setAxiosTokenGetter = (fn) => {
  getToken = fn;
}

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken(); 
    console.log('token ', token)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);


axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    console.log('response from interseptor ', error)

    //handling access token 
    if (error.response?.status === 401 && error.response.data.message === 'Unauthorized' && !originalRequest._retry) {
      console.log('hello ')
      originalRequest._retry = true;
      try {
        const response = await refreshTokenApi()
        const newToken = response.accessToken;
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return axiosInstance(originalRequest)
      } catch (refreshError) {
        await logoutApi()
        window.localStorage.href = '/'
        return Promise.reject(refreshError)
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance