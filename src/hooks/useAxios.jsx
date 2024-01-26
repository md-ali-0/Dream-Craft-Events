import axios from "axios";

const axiosSecure = axios.create({
    // baseURL: 'http://localhost:8080'
    baseURL: 'https://dream-craft-server.vercel.app'
})

const useAxios = ()=>{

    return axiosSecure
}

export default useAxios