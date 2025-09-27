const blogService = require('../services/blog.service')
const { httpStatusCodes } = require('../utils/httpStatusCodes')

exports.createBlog = async (req, res, next) => {
    try {
        const blog = await blogService.createBlog(req.body, req.file)
        return res.status(httpStatusCodes.CREATED).json(blog)
    } catch (error) {
        next(error)
    }
}

exports.getAllBlog = async (req, res, next) => {
    try {
        const search = req.query.search || ""
        const blogs = await blogService.getAllBlog(search)
        return res.json(blogs)
    } catch (error) {
        next(error)
    }
}

exports.getBlog = async (req, res, next) => {
    try {
        const blogId = req.params.id
        const blog = await blogService.getBlog(blogId)
        res.json(blog)
    } catch (error) {
        next(error)
    }
}

exports.deleteBlog = async (req, res, next) => {
    try {
        const blogId = req.params.id
        await blogService.deleteBlog(blogId)
        res.status(httpStatusCodes.NO_CONTENT).send()
    } catch (error) {
        next(error)
    }
}