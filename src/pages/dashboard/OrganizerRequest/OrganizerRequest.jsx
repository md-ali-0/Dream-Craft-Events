import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const OrganizerRequest = () => {

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

            </div>
            <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    <thead className="text-sm border-b text-gray-700 uppercase bg-rose-50 font-semibold ">
                        <tr>
                            <th className="px-4 py-2"></th>
                            <th className="px-4 py-2">Image</th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Experience</th>
                            <th className="px-4 py-2">Title</th>
                            <th className="px-4 py-2">Category</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2">Action</th>
                            <th className="px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            request.map((item, index) => (
                                <tr key={item._id}  className="border-b text-center">
                                    <td className="px-4 py-2">{index + 1}</td>
                                    <td className="px-4 py-2"><img src={item?.image} className="w-20 h-20 object-cover rounded-2xl" alt="" /></td>
                                    <td className="px-4 py-2">{item?.name}</td>
                                    <td className="px-4 py-2">{item?.experience}</td>
                                    <td className="px-4 py-2">{item?.company}</td>
                                    <td className="px-4 py-2">{item?.skills}</td>
                                    <td className="px-4 py-2">{item?.status}</td>
                                    <td className="px-4 py-2">
                                        {/* <button
                                            disabled={item?.status === 'accepted' || item?.status === 'rejected'}
                                            onClick={() => handleApprove(item.userId, item._id)}
                                            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 disabled:opacity-50">Approve</button> */}

                                        {/* TODO */}
                                        <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Approve</button>
                                    </td>
                                    <td className="px-4 py-2">
                                        {/* <button
                                            disabled={item?.status === 'accepted' || item?.status === 'rejected'}
                                            onClick={() => handleReject(item._id)}
                                            className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 disabled:opacity-50">Reject</button> */}

                                        {/* TODO */}
                                        <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Reject</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrganizerRequest;