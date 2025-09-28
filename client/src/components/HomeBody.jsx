import React from 'react'
import SearchBar from './SearchBar'
import { useState } from 'react'
import { useEffect } from 'react'
import { getAllBlogApi } from '../apis/blogServecies'
import BlogCard from './BlogCard'

const HomeBody = () => {

    const [blogs, setBlogs] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const result = await getAllBlogApi()
                setBlogs(result)
            } catch (error) {
                console.error('something went wrong')
            }
        }

        fetchBlogs()
    }, [searchTerm])

    return (
        <div className='bg-white pt-15 flex flex-col items-center p-2'>

            <div className='w-4xl'>
                {/* Heading */}
                <h2 className='font-bold text-3xl leading-[1.2] text-center'>Welcome to the Time Kids Hosur Blog – Learn, Play & Grow</h2>

                {/* Search bar */}
                <SearchBar />

                {/* Blog Cards */}
                {blogs.map(blog => <BlogCard key={blog._id} blog={blog} />)}

            </div>

        </div>
    )
}

export default HomeBody