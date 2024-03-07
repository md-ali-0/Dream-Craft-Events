import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import {
  GoogleAuthProvider, getAuth,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
export const AuthContext = createContext();

export const AuthProdiver = ({ children }) => {
  const axios = useAxiosPublic();
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const googleLogin = () => {
      return signInWithPopup(auth, googleProvider);
  };

  const login = async (email, password) => {
    const response = await axios.post("/login", { email, password });
    localStorage.setItem("token", response.data.token);
    setUser(response.data.user);
    setIsLoading(false);
    return response;
  };

  const signUp = async (firstname, lastname, email, password) => {
    const response = await axios.post("/signup", {
      firstname,
      lastname,
      email,
      password,
    });
    setIsLoading(false);
    setUser(response.data.user);
    return response;
  };
  const logout = async () => {
    setUser(null);
    localStorage.removeItem("token");
    setIsLoading(false);
  };


  useEffect(() => {
    const unSubscribe = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          setIsLoading(true);
          const response = await axios.post("/token-verify", { token });
          setUser(response.data);
          setIsLoading(false);
        } catch (error) {
          console.error("Token verification failed:", error);
          setUser(null);
          localStorage.removeItem("token");
          setIsLoading(false);
        }
      } else {
        setUser(null);
        setIsLoading(false);
      }
    };

    unSubscribe();
  }, [axios]);

  const userInfo = {
    login,
    signUp,
    logout,
    user,
    setUser,
    isLoading,
    googleLogin,
    setIsLoading
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};
