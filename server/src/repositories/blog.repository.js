const blog = require('../models/blog')

exports.createBlog = (data) => blog.create(data)
exports.findBlogByTitle = (title) => blog.findOne({ title: { $regex: `^${title}$`, $options: 'i' } });
exports.findBlogById = (id) => blog.findById(id)
exports.deleteBlogById = (id) => blog.findByIdAndDelete(id)

exports.findAllBlogs = async (search) => {
    const query = {};
    if (search) {
        query.$or = [
            { title: { $regex: search, $options: 'i' } },
            { description: { $regex: search, $options: 'i' } },
        ];
    }

    const blogs = await blog.find(query)
    return blogs
}