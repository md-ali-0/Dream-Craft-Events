import useAuth from "../../../../hooks/useAuth";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import loadingAnimation from "../../../../assets/animation/animation.json";
import jsPDF from "jspdf";
import "jspdf-autotable";
import qrCode from "qrcode";
import { FaArrowDownLong } from "react-icons/fa6";
import "jspdf-autotable";


const BookedEvent = () => {
  const { user } = useAuth();

  const fetchPaymentHistory = async () => {
    const response = await axios.get(
      `https://dream-craft-server.vercel.app/order/${user?.email}`

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
    queryKey: ["paymentHistory", user.email],
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


  const handleDownloadTicket = async (order) => {
    const qrCodeDataURL = await qrCode.toDataURL(order.tran_id, {
      errorCorrectionLevel: "H",
      margin: 1,
      width: 80,
    });

    const doc = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: [80, 210],
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const marginLeft = 10;
    const marginTop = 10;

    const ticketImage =
      "https://i.postimg.cc/cLSY3Xnh/cinema-concept-with-tickets-23-2147989089.jpg"; // Replace with your ticket background image path
    doc.addImage(ticketImage, "JPEG", 0, 0, pageWidth, pageHeight);

    const qrSize = 20;
    doc.addImage(
      qrCodeDataURL,
      "JPEG",
      pageWidth - qrSize - 10,
      marginTop,
      qrSize,
      qrSize
    );

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor("#000000");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text(` ${order.eventTitle}`, pageWidth / 2, marginTop + 10, {
      align: "center",
    });
    doc.setFontSize(16);
    doc.text(`Date: ${order.eventDate.slice(0,10)}`, pageWidth / 2, marginTop + 20, {
      align: "center",
    });

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);

    doc.text(`Name: ${order.cus_name}`, marginLeft, marginTop + 40);
    doc.text(`Email: ${order.cus_email}`, marginLeft, marginTop + 45);

    doc.text(`Order ID: ${order.tran_id}`, marginLeft, marginTop + 50);
    doc.text(`Amount Paid: $${order.total_amount}`, marginLeft, marginTop + 55);

    doc.save(`Event_Ticket_${order.tran_id}.pdf`);
  };

  return (
    <div>
      <h2 className="text-center text-primary text-2xl font-semibold mb-4">
        My Bookings

      </h2>

      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead className="text-sm border-b text-gray-700 uppercase bg-rose-50 font-semibold">
            <tr>
              <th className="px-4 py-2">Event</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Event Title</th>
              <th className="px-4 py-2">Event Date</th>
              <th className="px-4 py-2">Total Amount</th>
              <th className="px-4 py-2">Status</th>

              <th className="px-4 py-2">Actions</th>

            </tr>
          </thead>
          <tbody>
            {paymentHistory?.map((order) => (
              <tr key={order._id} className="border-b text-center">

                <td className="px-4 py-2"><img src={order?.eventImage} className="w-20 h-20 object-cover rounded-2xl" alt="" /></td>

                <td className="px-4 py-2">{order.cus_name}</td>
                <td className="px-4 py-2">{order.cus_email}</td>
                <td className="px-4 py-2">{order.eventTitle}</td>
                <td className="px-4 py-2">{order.eventDate.slice(0,10)}</td>
                <td className="px-4 py-2">${order.total_amount}</td>
                <td className="px-4 py-2">
                  {order.paidStatus ? "Paid" : "Unpaid"}
                </td>

                <td className="px-4 py-2 ml-2">
                  <button
                    onClick={() => handleDownloadTicket(order)}
                    className="px-4 py-1.5 flex items-center gap-0.5 text-nowrap text-lg font-semibold rounded bg-primary text-white"
                  >
                    <FaArrowDownLong className="button-reciept" />
                    Download Ticket
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

export default BookedEvent;