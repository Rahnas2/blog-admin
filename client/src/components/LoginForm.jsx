import { useState } from 'react'
import { loginApi } from '../apis/authServices'
import { useAuth } from '../AuthContext'
import toast from 'react-hot-toast'

const LoginForm = () => {
  const { setToken } = useAuth()

  const [data, setData] = useState({ userName: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async () => {
    try {
      const result = await loginApi(data)
      setToken(result.accessToken)
      toast.success('Login successfully')
    } catch (error) {
      console.error('Something went wrong', error)
      toast.error(error?.response?.data?.message || 'Something went wrong')
    }
  }

  return (
    <div className='flex justify-center my-16'>
      <div className='bg-white w-md p-4 rounded-xl shadow-xl hover:shadow-2xl'>
        <h1 className='text-red-500 text-center font-semibold text-lg'>Admin Login</h1>

        <label htmlFor="userName">Username</label>
        <input
          name='userName'
          value={data.userName}
          onChange={handleChange}
          className='w-full px-3 py-1 mb-5 mt-3 rounded-lg border border-[#ced4da] focus:outline-none focus:shadow-[0_0_0_0.25rem_rgba(254,93,55,0.25)]'
          type="text"
          placeholder='Enter your username'
        />

        <label htmlFor="password">Password</label>
        <input
          name='password'
          value={data.password}
          onChange={handleChange}
          className='w-full px-3 py-1 mb-5 mt-3 rounded-lg border border-[#ced4da] focus:outline-none focus:shadow-[0_0_0_0.25rem_rgba(254,93,55,0.25)]'
          type={showPassword ? 'text' : 'password'}
          placeholder='Enter your password'
        />

        <div className="mb-5 flex items-center gap-2">
          <input
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(prev => !prev)} 
            className="w-4 h-4 rounded-lg border border-[#ced4da] focus:outline-none focus:shadow-[0_0_0_0.25rem_rgba(254,93,55,0.25)] bg-white accent-red-500 cursor-pointer"
          />
          <span>Show Password</span>
        </div>

        <button
          onClick={handleSubmit}
          className='bg-red-500 rounded-lg w-full text-white font-semibold py-1'
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default LoginForm
