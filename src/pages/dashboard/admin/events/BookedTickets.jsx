import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';

const BookedTickets = () => {

    const axios = useAxiosPublic()

    const { data: request = [], refetch } = useQuery({
        queryKey: ['request'],
        queryFn: async () => {
            const res = await axios.get('/request-organizer')
            return res.data;
        }
    })

    return (
        <div>
            <div className="flex justify-between items-center">
                {/* Other JSX */}
            </div>
            <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    <thead className="text-sm border-b text-gray-700 uppercase bg-rose-50 font-semibold ">
                        <tr>
                            <th className="px-4 py-2"></th>
                            <th className="px-4 py-2">Image</th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Experience</th>
                            <th className="px-4 py-2">Company</th>
                            <th className="px-4 py-2">Skills</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2">Action</th>
                            <th className="px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(request) && request.map((item, index) => (
                            <tr key={item._id} className="border-b text-center">
                                <td className="px-4 py-2">{index + 1}</td>
                                <td className="px-4 py-2"><img src={item?.image} className="w-20 h-20 object-cover rounded-2xl" alt="" /></td>
                                <td className="px-4 py-2">{item?.name}</td>
                                <td className="px-4 py-2">{item?.experience}</td>
                                <td className="px-4 py-2">{item?.company}</td>
                                <td className="px-4 py-2">{item?.skills}</td>
                                <td className="px-4 py-2">{item?.status}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookedTickets;