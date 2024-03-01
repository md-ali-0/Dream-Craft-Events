import axios from "axios";

const axiosPublic = axios.create({
  // baseURL: "http://localhost:8080",
  baseURL: "https://dream-craft-server.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
