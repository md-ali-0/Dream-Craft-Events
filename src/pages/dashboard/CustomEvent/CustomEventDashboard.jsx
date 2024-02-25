import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const CustomEventDashboard = () => {

    const axios = useAxiosPublic()

    const { data: customEvent = [], refetch } = useQuery({
        queryKey: ['customEvent'],
        queryFn: async () => {
            const res = await axios.get('/custom-event')
            return res.data;
        }
    })
    const handleApprove = async (id) => {

        const update = await axios.patch(`/custom-event/${id}`, {status: 'approved'})
        console.log(update);

    }

    return (
        <div>
        <div className="flex justify-between items-center">

        </div>
        <div className="overflow-x-auto mt-6">
            <table className="table-auto w-full">
                <thead className="bg-orange-500 text-white uppercase font-semibold">
                    <tr>
                        <th className="px-4 py-2"></th>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">Phone</th>
                        <th className="px-4 py-2">EventType</th>
                        <th className="px-4 py-2">Date</th>
                        <th className="px-4 py-2">Location</th>
                        <th className="px-4 py-2">Guests</th>
                        <th className="px-4 py-2">Photography</th>
                        <th className="px-4 py-2">Catering</th>
                        <th className="px-4 py-2">Special Req</th>
                        <th className="px-4 py-2">Approve</th>
                        <th className="px-4 py-2">Reject</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customEvent.map((event, index) => (
                            <tr key={event._id}>
                                <td className="px-4 py-2 border-2 border-gray-300">{index + 1}</td>
                    
                                <td className="px-8 py-2 border-2 border-gray-300">{event?.firstName}   {event?.lastName}</td>
                                <td className="px-4 py-2 border-2 border-gray-300">{event?.email}</td>
                                <td className="px-4 py-2 border-2 border-gray-300">{event?.phone}</td>
                                <td className="px-4 py-2 border-2 border-gray-300">{event?.eventType}</td>
                                <td className="px-4 py-2 border-2 border-gray-300">{event?.date}</td>
                                <td className="px-4 py-2 border-2 border-gray-300">{event?.location}</td>
                                <td className="px-4 py-2 border-2 border-gray-300">{event?.guests}</td>
                                <td className="px-4 py-2 border-2 border-gray-300">{event?.photography}</td>
                                <td className="px-4 py-2 border-2 border-gray-300">{event?.catering}</td>
                                <td className="px-4 py-2 border-2 border-gray-300">{event?.request}</td>
                                <td className="px-4 py-2">
                                   {event.status == 'pending' ? <button
                                        onClick={() => handleApprove(event._id)}
                                        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 disabled:opacity-50">Approve</button> : <p className='bg-green-700 text-white font-bold px-4 py-2 rounded-md hover:bg-green-600 disabled:opacity-50'>Approved</p> }

                                    {/* TODO */}
                                    
                                </td>
                                <td className="px-4 py-2 ">
                                    {/* <button
                                        disabled={item?.status === 'accepted' || item?.status === 'rejected'}
                                        onClick={() => handleReject(item._id)}
                                        className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 disabled:opacity-50">Reject</button> */}

                                    {/* TODO */}
                                    <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 disabled:opacity-50">Reject</button>
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

export default CustomEventDashboard;