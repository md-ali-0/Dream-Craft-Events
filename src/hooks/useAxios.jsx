import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: 'https://dream-craft-server.vercel.app'
  // baseURL: "http://localhost:8080",
});

const useAxios = () => {
  const navigate = useNavigate()
  const { logout } = useAuth()
  axiosSecure.interceptors.request.use(
    (config) => {
      config.headers.token = `Bearer ${localStorage.getItem('token')}`
      return config
    },
    (error) => {
      return Promise.reject(error)
    })

  // intercepts 401 and 403 status
  axiosSecure.interceptors.response.use(function (response) {
    return response;
  }, async (error) => {
    const status = error.response.status;
    if (status === 401 || status === 403) {
      await logout();
      return navigate('/login');
    }
    return Promise.reject(error);
  })

  return axiosSecure;
};

export default useAxios;
