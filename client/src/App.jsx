import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import { useAuth } from './AuthContext'
import { setAxiosTokenGetter } from './apis/axiosInstace'
import { Toaster } from 'react-hot-toast';
import { useEffect } from "react"

function App() {

  const { token } = useAuth();
  console.log('herer ', token)
 
  useEffect(() => {
    setAxiosTokenGetter(() => token);
  }, [token])
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Dashboard />} />
        </Routes>

        <Toaster />
      </BrowserRouter>
    </>
  )
}

export default App
