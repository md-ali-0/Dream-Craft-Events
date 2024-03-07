import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const OrganizerRequest = () => {
    const axios = useAxiosPublic()

    const { data: request = [], refetch } = useQuery({
        queryKey: ['request'],
        queryFn: async () => {
            const res = await axios.get('/request-organizer')
            return res.data;
        }
    })

    const handleApprove = (userId, id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to make organizer?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make Organizer"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.put(`/users/organizer/${userId}`)
                    .then(res => {
                        if (res.data.role === 'organizer') {
                            axios.put(`/request-organizer/accept/${id}`)
                                .then(res => {
                                    //console.log(res);
                                    if (res.data.status === 'accepted') {
                                        refetch()
                                        Swal.fire({
                                            title: "Organizer!",
                                            text: 'He is organizer now.',
                                            icon: "success"
                                        });
                                    }
                                })
                        }
                    })
            }
        });
    }

    const handleReject = id => {
        axios.put(`/request-organizer/reject/${id}`)
            .then(res => {
                if (res.data.status === 'rejected') {
                    refetch()
                    toast.success('Request rejected')
                }
            })
    }

    return (
        <div>
            <h2 className=" text-primary text-2xl font-semibold mb-4">
                Organizer Requests
            </h2>
            <div className="flex justify-between items-center">
                {/* Other JSX */}
            </div>
            <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    <thead className="text-sm border-b text-gray-700 uppercase bg-rose-50 font-semibold ">
                        <tr>
                            <th className="px-4 py-2"></th>
                            {/* <th className="px-4 py-2">Image</th> */}
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
                                {/* <td className="px-4 py-2"><img src={item?.image} className="w-20 h-20 object-cover rounded-2xl" alt="" /></td> */}
                                <td className="px-4 py-2">{item?.name}</td>
                                <td className="px-4 py-2">{item?.experience}</td>
                                <td className="px-4 py-2">{item?.company}</td>
                                <td className="px-4 py-2">{item?.skills}</td>
                                <td className="px-4 py-2">{item?.status}</td>
                                <td className="px-4 py-2">
                                    <button
                                        disabled={item?.status === 'accepted' || item?.status === 'rejected'}
                                        onClick={() => handleApprove(item.userId, item._id)}
                                        className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:from-green-200 disabled:via-green-300 disabled:to-green-400"
                                    >
                                        {item?.status === 'accepted' ? 'Approved' : 'Approve'}
                                    </button>
                                </td>

                                <td className="px-4 py-2">
                                    <button
                                        disabled={item?.status === 'accepted' || item?.status === 'rejected'}
                                        onClick={() => handleReject(item._id)}
                                        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:from-red-200 disabled:via-red-300 disabled:to-red-400"
                                    >
                                        {item?.status === 'rejected' ? 'Rejected' : 'Reject'}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrganizerRequest;
