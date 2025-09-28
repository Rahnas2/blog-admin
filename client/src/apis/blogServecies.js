import axiosInstance from "./axiosInstace"

export const createBlogApi = async (data) => {
    const response = await axiosInstance.post('/api/blog', data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    })
    return response.data
}

export const getAllBlogApi = async (search) => {
    const response = await axiosInstance.get('/api/blog')
    return response.data
}

export const getBlog = async (id) => {
    const response = await axiosInstance.get(`/api/blog/${id}`)
    return response.data
}

export const deleteBlog = async (id) => {
    const response = await axiosInstance.delete(`/api/blog/${id}`)
    return response.data
}