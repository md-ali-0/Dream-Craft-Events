import useAuth from "../../../../hooks/useAuth";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import loadingAnimation from "../../../../assets/animation/animation.json";
import jsPDF from "jspdf";
import "jspdf-autotable";
import logo from "../../../../assets/logo/dream-craft.png";
import pdfbg from "./pdfbg.jpg";

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

    // Add background image
    doc.addImage(
      pdfbg,
      "JPEG",
      0,
      0,
      doc.internal.pageSize.getWidth(),
      doc.internal.pageSize.getHeight()
    );

    // Set font styles
    doc.setFont("Courier-Bold", "bold");

    // Add logo at the top of the PDF, slightly shifted downwards
    const imgWidth = 45; // Adjust as needed
    const imgHeight = 15; // Adjust as needed
    const marginLeft = (doc.internal.pageSize.getWidth() - imgWidth) / 2;
    const marginTop = 20; // Adjust the distance from the top
    doc.addImage(logo, "PNG", marginLeft, marginTop, imgWidth, imgHeight);

    // Add title with blue color
    // doc.setTextColor(3, 37, 76);
    doc.setTextColor(0, 0, 0); // blue color
    doc.setFontSize(20);
    doc.text(
      "Payment Order Summary",
      doc.internal.pageSize.getWidth() / 2,
      50,
      { align: "center" }
    );

    // Reset color
    doc.setTextColor(0, 0, 0); // Black color

    // Add event details
    doc.setFontSize(19);

    doc.text(
      `Event Title: ${order.eventTitle}`,
      doc.internal.pageSize.getWidth() / 2,
      80,
      { align: "center" }
    );
    doc.text(
      `Event ID: ${order.event_id}`,
      doc.internal.pageSize.getWidth() / 2,
      90,
      { align: "center" }
    );

    // Add customer details
    doc.text(
      `Customer Name: ${order.cus_name}`,
      doc.internal.pageSize.getWidth() / 2,
      120,
      { align: "center" }
    );
    doc.text(
      `Customer Email: ${order.cus_email}`,
      doc.internal.pageSize.getWidth() / 2,
      130,
      { align: "center" }
    );

    // Add transaction details
    doc.text(
      `Transaction ID: ${order.tran_id}`,
      doc.internal.pageSize.getWidth() / 2,
      160,
      { align: "center" }
    );

    // Add payment details
    doc.text(
      `Total Amount: $${order.total_amount}`,
      doc.internal.pageSize.getWidth() / 2,
      190,
      { align: "center" }
    );
    doc.setTextColor(0, 128, 0); // Green color for paid status
    doc.text(
      `Paid Status: ${order.paidStatus ? "Paid" : "Unpaid"}`,
      doc.internal.pageSize.getWidth() / 2,
      200,
      { align: "center" }
    );

    // Add color to titles
    doc.setTextColor(206, 20, 70); // Red color
    doc.text("Event Details", doc.internal.pageSize.getWidth() / 2, 70, {
      align: "center",
    });
    doc.text("Customer Details", doc.internal.pageSize.getWidth() / 2, 110, {
      align: "center",
    });
    doc.text("Transaction Details", doc.internal.pageSize.getWidth() / 2, 150, {
      align: "center",
    });
    doc.text("Payment Details", doc.internal.pageSize.getWidth() / 2, 180, {
      align: "center",
    });

    // Add copyright text at the bottom 30% position
    // const bottomMargin = doc.internal.pageSize.getHeight() * 0.1;
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0); // Black color
    doc.text(
      "(c) " +
        new Date().getFullYear() +
        " DreamCraft Events ~ Data Defenders 805.3",
      doc.internal.pageSize.getWidth() / 2,
      240,
      // doc.internal.pageSize.getHeight() - bottomMargin,
      { align: "center" }
    );

    // Save PDF
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
