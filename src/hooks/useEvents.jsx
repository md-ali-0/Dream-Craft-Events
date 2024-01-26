import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useEvents = () => {

    const { data: events = [], isPending: loading, refetch } = useQuery({
        queryKey: ['events'],
        queryFn: async () => {
            const res = await axios.get('/events.json')
            return res.data;
        }
    })

    return [events, loading, refetch]
};

export default useEvents;