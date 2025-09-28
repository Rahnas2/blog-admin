import { createContext, useContext, useEffect, useState } from "react";
import { refreshTokenApi } from "./apis/authServices";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchNewToken = async () => {
      try {
        const res = await refreshTokenApi();
        setToken(res.accessToken);
      } catch (error) {
        setToken(null)
      } finally {
      }
    }

    fetchNewToken();
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
