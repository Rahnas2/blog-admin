import { useNavigate } from 'react-router-dom'
import { useAuth } from '../AuthContext'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LoginForm from '../components/LoginForm'
import { useEffect } from 'react'

const Login = () => {
    const { token } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (token) {
            navigate('/admin') // redirect if already logged in
        }
    }, [token, navigate])
    
    return (
        <>
            <Header />
            <LoginForm />
            <Footer />
        </>
    )
}

export default Login