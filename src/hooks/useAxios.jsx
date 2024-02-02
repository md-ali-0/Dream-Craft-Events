import axios from "axios";

const axiosSecure = axios.create({
  // baseURL: 'https://dream-craft-server.vercel.app'
  baseURL: "https://dream-craft-server.vercel.app",
});

const useAxios = () => {
  return axiosSecure;
};

export default useAxios;