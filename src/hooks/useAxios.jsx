import axios from "axios";
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  // baseURL: 'https://dream-craft-server.vercel.app'
  baseURL: "http://localhost:8080",
});

const useAxios = () => {
    const navigate = useNavigate()
    const signOut = useSignOut()
    axiosSecure.interceptors.request.use(
      (config)=>{
          config.headers.token = `Bearer ${localStorage.getItem('token')}`
          return config
      },
      (error)=>{
          return Promise.reject(error)
      })

    // intercepts 401 and 403 status
    axiosSecure.interceptors.response.use(function (response) {
      return response;
    }, async (error) => {
        const status = error.response.status;
        if (status === 401 || status === 403) {
            await signOut();
            return navigate('/login');
        }
        return Promise.reject(error);
    })

  return axiosSecure;
};

export default useAxios;
