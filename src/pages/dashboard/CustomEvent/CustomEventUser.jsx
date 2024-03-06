import React from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';

const CustomEventUser = () => {
    const axios = useAxiosPublic()
    const {user} = useAuth()

    const { data: customEvent = [] } = useQuery({
        queryKey: ['customEvent'],
        queryFn: async () => {
            const res = await axios.get(`/custom-event/inbox?email=${user?.email}`)
            return res.data;
        }
    })
    return (
        <div>
            <h2 className='text-primary text-2xl font-bold'>Requested Custom Events</h2>
            <div className='overflow-x-auto shadow-md mt-4'>
                <table className='table-auto w-full'>
                    <thead className="text-sm border-b text-gray-700 capitalize bg-rose-50 font-semibold">
                        <tr>
                            <th className="px-4 py-2">#</th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Phone</th>
                            <th className="px-4 py-2">Date</th>
                            <th className="px-4 py-2">Location</th>
                            <th className="px-4 py-2">Cost</th>
                            <th className="px-4 py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            customEvent?.map((event, index) => (
                                <tr key={event._id} className='text-center text-sm text-gray-500 dark:text-gray-400'>
                                    <td className="px-4 py-4  border-gray-300">{index + 1}</td>

                                    <td className="px-4 text-nowrap py-2 border-gray-300">{event?.firstName + ' ' + event?.lastName}</td>
                                    <td className="px-4 border-gray-300">{event?.email}</td>
                                    <td className="px-4 border-gray-300">{event?.phone}</td>
                                    <td className="px-4 text-nowrap border-gray-300">{event?.date}</td>
                                    <td className="px-4 border-gray-300">{event?.location}</td>
                                    <td className="px-2 border-gray-300">{event?.cost ? '$' + ' ' + event?.cost : ''}</td>
                                    <td >
                                        <button className={`${event.status == 'pending' ? 'bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 text-white' : (event.status == 'approved' ? 'bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white' : 'bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white')} px-6 rounded-md py-2 cursor-auto font-bold`}>
                                            {
                                                event.status == 'pending' ? 'Pending' : (event.status == 'approved' ? 'Approved' : 'Rejected')
                                            }
                                        </button>
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

export default CustomEventUser;