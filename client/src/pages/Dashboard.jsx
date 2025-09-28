
import { useEffect } from 'react'
import { useState } from 'react'
import BlogTable from '../components/BlogTable'
import Header from '../components/Header'
import Sidebar from '../components/SideBar'
import { getAllBlogApi } from '../apis/blogServecies'
import AddBlogModal from '../components/AddBlogModal'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../AuthContext'

const Dashboard = () => {

    const { token } = useAuth()
    const navigate = useNavigate()

    const [blogs, setBlogs] = useState([])
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (!token) {
            navigate('/login') // redirect if already logged in
        }
    }, [token, navigate])

    

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
    }, [])

    const handleOpenModal = () => {
        setIsOpen(true)
    }

    const handleCloseModal = () => {
        setIsOpen(false)
    }

    return (
        <>
            <Header />
            <div className='px-4 mt-15 flex'>
                <Sidebar />
                <BlogTable blogs={blogs} onOpenModal={handleOpenModal} />
            </div>

            <AddBlogModal isOpen={isOpen} onClose={handleCloseModal} />
        </>
    )
}

export default Dashboard