import React from 'react'

const BlogCard = ({blog}) => {
    return (
        <div className='mt-12'>
            <div className='p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'>
                <div className='flex justify-center '>
                    <img className='w-2xl h-96' src={blog.image} alt="blog-image" />
                </div>

                <h3 className='mb-2 font-bold text-3xl'>{blog.title}</h3>

                <p className='mb-4'>{blog.description}</p>

                <p className='mb-4 text-red-500'>Read more</p>

                <div className='flex justify-between'>
                    <h6 className='font-semibold leading-1.5'>TIME KIDS</h6>
                    <h6 className='font-bold text-gray-600'>{new Date(blog.createdAt).toLocaleDateString("en-GB").replace(/\//g, "-")}</h6>
                </div>
            </div>
        </div>
    )
}

export default BlogCard