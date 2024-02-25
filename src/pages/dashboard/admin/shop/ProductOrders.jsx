import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

const ProductOrders = () => {
  const axios = useAxiosPublic();

  const { data: orders = [], refetch } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await axios.get("/product-orders");
      return res.data;
    },
  });
  return (
    <div>
      <div className="flex justify-between items-center"></div>
      <div className="overflow-x-auto mt-6">
        <table className="table-auto w-full">
          <thead className="bg-orange-500 text-white uppercase font-semibold">
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
            {orders.map((item, index) => (
              <tr key={item._id}>
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">
                  <img
                    src={item?.product_image}
                    className="w-20 h-20 object-cover"
                    alt=""
                  />
                </td>
                <td className="px-4 py-2">{item?.product_name}</td>

                <td className="px-4 py-2">{item?.product_price}</td>
                <td className="px-4 py-2">{item?.user_name}</td>
                {/* <td className="px-4 py-2">{item?.user_image}</td> */}

                {/* <td className="px-4 py-2">{item?.product_description}</td> */}
                <td className="px-4 py-2">{item?.status}</td>
                <td className="px-4 py-2">
                  {/* <button
                                            disabled={item?.status === 'accepted' || item?.status === 'rejected'}
                                            onClick={() => handleApprove(item.userId, item._id)}
                                            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 disabled:opacity-50">Approve</button> */}

                  {/* TODO */}
                  <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 disabled:opacity-50">
                    Approve
                  </button>
                </td>
                <td className="px-4 py-2">
                  {/* <button
                                            disabled={item?.status === 'accepted' || item?.status === 'rejected'}
                                            onClick={() => handleReject(item._id)}
                                            className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 disabled:opacity-50">Reject</button> */}

                  {/* TODO */}
                  <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 disabled:opacity-50">
                    Reject
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

export default ProductOrders;
