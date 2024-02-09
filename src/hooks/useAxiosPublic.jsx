import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://dream-craft-server.vercel.app",
  // baseURL: "http://localhost:8080",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
