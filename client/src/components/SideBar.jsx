import toast from "react-hot-toast";
import { logoutApi } from "../apis/authServices";
import { useAuth } from "../AuthContext";


const Sidebar = () => {

    const {setToken} = useAuth()

    const handleLogout = async() => {
        try {
            await logoutApi()
            setToken(null)
        } catch (error) {
            toast.error(error?.response?.data?.message || 'something went wrong')
        }
    }
    return (
        <div className="w-sm bg-white border-r border-gray-200 min-h-screen">
            <div className="">
                <div className="p-4 border border-gray-500">
                    <div className="text-sm font-medium mb-1">Admin Dashboard [TIMEKIDS]</div>
                </div>

                <div className="p-4 border border-gray-500">
                    <div className="text-sm font-medium mb-1">Mailcontacts</div>
                </div>

                <div className="p-4 border border-gray-500">
                    <div className="text-sm font-medium mb-1">Admissionscontacts</div>
                </div>

                <button onClick={handleLogout} className="w-full text-start p-4 border border-gray-500 cursor-pointer">
                    <div className="text-sm font-medium mb-1">Logout</div>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;