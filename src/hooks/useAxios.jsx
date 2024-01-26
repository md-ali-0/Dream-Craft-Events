import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:8080'
})

const useAxios = ()=>{

    return axiosSecure
}

export default useAxios