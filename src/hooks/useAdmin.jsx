import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxios from './useAxios';

const useAdmin = () => {
    const {user, isLoading} = useAuth()
    const axios = useAxios()

    const {data: isAdmin, isPending: isAdminPending} = useQuery({
        queryKey:[user?.email, 'isAdmin'],
        enabled: !isLoading && !!user?.email,
        queryFn: async()=>{
            const {data} = await axios.get(`/check-user-role/${user?.email}`)
            return data.role
        }
    })
    
    if (isAdmin == "admin") {
        const admin = true
        return [admin,isAdminPending]
    } else{
        const admin = false
        return [admin,isAdminPending]
    }
};

export default useAdmin;