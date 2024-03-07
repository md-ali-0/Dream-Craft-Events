import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';

const BookedTickets = () => {

    const axios = useAxiosPublic()

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await axios.get('/bookings')
            return res.data;
        }
    })

    return (
        <div>
            <h2 className="text-center text-primary text-2xl font-semibold mb-4">
                All Bookings
            </h2>
            <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    <thead className="text-sm border-b text-gray-700 uppercase bg-rose-50 font-semibold ">
                        <tr>
                            <th className="px-4 py-2">#</th>
                            <th className="px-4 py-2">Event</th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Event Title</th>
                            <th className="px-4 py-2">Total Amount</th>
                            <th className="px-4 py-2">Status</th>
                        </tr >
                    </thead>
                    <tbody>
                        {Array.isArray(bookings) && bookings.map((item, index) => (
                            <tr key={item._id} className="border-b text-center">
                                <td className="px-4 py-2">{index + 1}</td>
                                <td className="px-4 py-2"><img src={item?.eventImage} className="w-20 h-20 object-cover rounded-2xl" alt="" /></td>
                                <td className="px-4 py-2">{item.cus_name}</td>
                                <td className="px-4 py-2">{item.cus_email}</td>
                                <td className="px-4 py-2">{item.eventTitle}</td>
                                <td className="px-4 py-2">${item.total_amount}</td>
                                <td className="px-4 py-2">
                                    {item.paidStatus ? "Paid" : "Unpaid"}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookedTickets;