import useAuth from "../../../../hooks/useAuth";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import loadingAnimation from "../../../../assets/animation/animation.json";
import jsPDF from "jspdf";
import "jspdf-autotable";

const PaymentHistory = () => {
  const { user } = useAuth();

  const fetchPaymentHistory = async () => {
    const response = await axios.get(
      `https://dream-craft-server.vercel.app/order/${user?.email}`
      // `http://localhost:5173/order/${user?.email}`
      
    );
    if (!response.status === 200) {
      throw new Error("Failed to fetch payment history");
    }
    return response.data;
  };

  const {
    data: paymentHistory = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["paymentHistory", user.email], // Include user.email to refetch when the email changes
    queryFn: fetchPaymentHistory,
  });

  if (isLoading) {
    return (
      <Lottie
        className="flex justify-center items-center min-h-[70%]"
        animationData={loadingAnimation}
        width={500}
        height={350}
      />
    );
  }

  if (error) {
    return <p>Error loading payment history: {error.message}</p>;
  }

  const handleDownloadPDF = (order) => {
    const doc = new jsPDF();

    doc.text("Order Summary", 20, 10);
    doc.autoTable({
      head: [
        [
          "Name",
          "Email",
          "Transaction ID",
          "Event ID",
          "Event Title",
          "Total Amount",
          "Paid Status",
        ],
      ],
      body: [
        [
          order.cus_name,
          order.cus_email,
          order.tran_id,
          order.event_id,
          order.eventTitle,
          `$${order.total_amount}`,
          order.paidStatus ? "Paid" : "Unpaid",
        ],
      ],
    });

    doc.save(`Order_${order.tran_id}.pdf`);
  };

  return (
    <div>
      <h2 className="text-center text-primary text-2xl font-semibold mb-4">
        Payment History
      </h2>

      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead className="text-sm border-b text-gray-700 uppercase bg-rose-50 font-semibold">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Transaction ID</th>
              <th className="px-4 py-2">Event ID</th>
              <th className="px-4 py-2">Event Title</th>
              <th className="px-4 py-2">Total Amount</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paymentHistory?.map((order) => (
              <tr key={order._id} className="border-b text-center">
                <td className="px-4 py-2">{order.cus_name}</td>
                <td className="px-4 py-2">{order.cus_email}</td>
                <td className="px-4 py-2">{order.tran_id}</td>
                <td className="px-4 py-2">{order.event_id}</td>
                <td className="px-4 py-2">{order.eventTitle}</td>
                <td className="px-4 py-2">${order.total_amount}</td>
                <td className="px-4 py-2">
                  {order.paidStatus ? "Paid" : "Unpaid"}
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleDownloadPDF(order)}
                    className="px-5 text-lg font-semibold rounded bg-primary text-white"
                  >
                    Download PDF
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

export default PaymentHistory;
