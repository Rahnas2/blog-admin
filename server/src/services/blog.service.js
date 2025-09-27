
const blogRepo = require('../repositories/blog.repository')
const { httpStatusCodes } = require('../utils/httpStatusCodes')
const uploadToCloudinary = require('../utils/uploadToCloudinary')

exports.createBlog = async (data, file) => {

    const existing = await blogRepo.findBlogByTitle(data.title)
    if(existing){
        throw { status: httpStatusCodes.CONFLICT, message: 'Already Exisist'}
    }

    const uploadResponse = await uploadToCloudinary(file.buffer)
    console.log('upload response ', uploadResponse)

    const blog = await blogRepo.createBlog({...data, image: uploadResponse.secure_url})
    return blog
}

exports.getAllBlog = async (search) => {
    const blogs = await blogRepo.findAllBlogs(search.trim())
    return blogs
}

exports.getBlog = async (blogId) => {
    const blog = await blogRepo.findBlogById(blogId)
    if(!blog) {
        throw { status: httpStatusCodes.NOT_FOUND, message: 'Blog Not Found' }
    }
    return blog
}

exports.deleteBlog = async (blogId) => {
    const result = await blogRepo.deleteBlogById(blogId)
    if (!result) {
        throw { status: httpStatusCodes.NOT_FOUND, message: 'Blog Not Found' }
    }
    return
}