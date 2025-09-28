import axiosInstance from "./axiosInstace"

export const loginApi = async ({userName, password}) => {
    const response = await axiosInstance.post('/api/auth/login', {userName, password})
    return response.data
}

export const logoutApi = async () => {
    const response = await axiosInstance.post('/api/auth/logout')
    return response.data
}

export const refreshTokenApi = async () => {
    const response = await axiosInstance.post('/api/auth/refresh-token')
    return response.data
}
