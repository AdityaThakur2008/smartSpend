"use client";

import  React , { createContext, useState , useEffect } from "react";
import AuthService from "@/services/auth.Service";

interface User {
  id: string;
  name: string;
  email: string;
  
}

interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {


  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
 
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData = await AuthService.getCurrentUser();
                setUser(userData);
                setIsAuthenticated(true);
            } catch (error) {
                setUser(null);
                setIsAuthenticated(false);
                
            } finally {
                setIsLoading(false);
            }
    };

    fetchUser();
}, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        setIsAuthenticated,
        isLoading,
        setIsLoading,
      }}>
      {children}
    </AuthContext.Provider>
  );
};


export { AuthContext };
export default AuthProvider;