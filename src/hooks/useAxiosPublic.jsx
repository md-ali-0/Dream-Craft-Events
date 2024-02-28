import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://localhost:8080",
  // baseURL: "http://localhost:8080",
  // https://dream-craft-server.vercel.app
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
