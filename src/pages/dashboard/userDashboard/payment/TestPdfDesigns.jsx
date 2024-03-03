import useAuth from "../../../../hooks/useAuth";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import loadingAnimation from "../../../../assets/animation/animation.json";
import jsPDF from "jspdf";
import "jspdf-autotable";
import logo from "../../../../assets/logo/dream-craft.png";

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

  // const handleDownloadPDF = (order) => {
  //   const doc = new jsPDF();

  //   doc.text("Order Summary", 20, 10);
  //   doc.autoTable({
  //     head: [
  //       [
  //         "Name",
  //         "Email",
  //         "Transaction ID",
  //         "Event ID",
  //         "Event Title",
  //         "Total Amount",
  //         "Paid Status",
  //       ],
  //     ],
  //     body: [
  //       [
  //         order.cus_name,
  //         order.cus_email,
  //         order.tran_id,
  //         order.event_id,
  //         order.eventTitle,
  //         `$${order.total_amount}`,
  //         order.paidStatus ? "Paid" : "Unpaid",
  //       ],
  //     ],
  //   });

  //   doc.save(`Order_${order.tran_id}.pdf`);
  // };

  // handleDownloadPDF 2
  // const handleDownloadPDF = (order) => {
  //   const doc = new jsPDF();

  //   // Add logo
  //   const logoImg = new Image();
  //   logoImg.src = logo;
  //   doc.addImage(logoImg, 'PNG', 20, 20, 50, 15);

  //   // Add title
  //   doc.setFontSize(20);
  //   doc.text("Payment Order Summary", 20, 50);

  //   // Add table
  //   const tableData = [];
  //   const headers = ["Name", "Email", "Transaction ID", "Event ID", "Event Title", "Total Amount", "Paid Status"];
  //   const rowData = [order.cus_name, order.cus_email, order.tran_id, order.event_id, order.eventTitle, `$${order.total_amount}`, order.paidStatus ? "Paid" : "Unpaid"];
  //   tableData.push(rowData);

  //   doc.autoTable({
  //     startY: 70,
  //     head: [headers],
  //     body: tableData,
  //     theme: 'striped',
  //     styles: {
  //       textColor: [0, 0, 0],
  //       cellPadding: 3,
  //       fontSize: 10,
  //       fontStyle: 'normal',
  //       overflow: 'linebreak',
  //       lineWidth: 0.1,
  //       lineColor: [0, 0, 0],
  //       valign: 'middle',
  //       halign: 'center'
  //     },
  //     headStyles: {
  //       fillColor: [200, 200, 200]
  //     }
  //   });

  //   // Save PDF
  //   doc.save(`Order_${order.tran_id}.pdf`);
  // };

  // here I dont want the pdf data as table wise, i want the pdf data like below rows:

  //   Event Title : order.eventTitle
  //   Event ID : order.event_id

  //   Customer Name : order.cus_name
  //   Customer Email : order.cus_email

  //   Transaction ID : order.tran_id

  //   Total Amount : order.total_amount
  //   Paid Status : order.paidStatus

  //   also design the pdf colorful make sure relavent with the information
  //   eg: payment order summary text will be green

  // handleDownloadPDF 3

  // const handleDownloadPDF = (order) => {
  //   const doc = new jsPDF();

  //   // Set font styles
  //   doc.setFont("helvetica");

  //   // Add title with green color
  //   doc.setTextColor(0, 255, 255); // Green color
  //   doc.setFontSize(20);
  //   doc.text("Payment Order Summary", 20, 20);

  //   // Reset color
  //   doc.setTextColor(0, 0, 0); // Black color

  //   // Add event details
  //   doc.setFontSize(12);
  //   doc.text(`Event Title: ${order.eventTitle}`, 20, 40);
  //   doc.text(`Event ID: ${order.event_id}`, 20, 50);

  //   // Add customer details
  //   doc.text(`Customer Name: ${order.cus_name}`, 20, 70);
  //   doc.text(`Customer Email: ${order.cus_email}`, 20, 80);

  //   // Add transaction details
  //   doc.text(`Transaction ID: ${order.tran_id}`, 20, 100);

  //   // Add payment details
  //   doc.text(`Total Amount: $${order.total_amount}`, 20, 120);
  //   doc.text(`Paid Status: ${order.paidStatus ? "Paid" : "Unpaid"}`, 20, 130);

  //   // Add color to titles
  //   doc.setTextColor(255, 0, 0); // Red color
  //   doc.text("Event Details", 20, 30);
  //   doc.text("Customer Details", 20, 60);
  //   doc.text("Transaction Details", 20, 90);
  //   doc.text("Payment Details", 20, 110);

  //   // Save PDF
  //   doc.save(`Order_${order.tran_id}.pdf`);
  // };

  // handleDownloadPDF 4

  // const handleDownloadPDF = (order) => {
  //   const doc = new jsPDF();

  //   // Add logo
  //   const logoImg = new Image();
  //   logoImg.src = logo;
  //   doc.addImage(logoImg, 'PNG', 80, 20, 50, 15);

  //   // Set font styles
  //   doc.setFont("helvetica");

  //   // Add title with blue color and centered
  //   doc.setTextColor(0, 0, 255); // Blue color
  //   doc.setFontSize(20);
  //   doc.text("Payment Order Summary", doc.internal.pageSize.getWidth() / 2, 30, { align: "center" });

  //   // Individual details in bordered boxes
  //   const boxWidth = 150;
  //   const boxHeight = 20;
  //   const boxMargin = 6;
  //   const startX = (doc.internal.pageSize.getWidth() - boxWidth) / 2;
  //   let startY = 60;

  //   // Add event details box
  //   doc.setDrawColor(135, 206, 250); // Sky blue color
  //   doc.setLineWidth(2);
  //   doc.rect(startX, startY, boxWidth, boxHeight);
  //   doc.setTextColor(0, 0, 255); // Blue color
  //   doc.text("Event Title:", startX + 5, startY + 10);
  //   doc.setTextColor(0, 0, 0); // Black color
  //   doc.text(order.eventTitle, startX + 60, startY + 10);

  //   startY += boxHeight + boxMargin;

  //   // Add customer details box
  //   doc.rect(startX, startY, boxWidth, boxHeight);
  //   doc.setTextColor(0, 0, 255); // Blue color
  //   doc.text("Customer Name:", startX + 5, startY + 10);
  //   doc.setTextColor(0, 0, 0); // Black color
  //   doc.text(order.cus_name, startX + 70, startY + 10);

  //   startY += boxHeight + boxMargin;

  //   // Add transaction details box
  //   doc.rect(startX, startY, boxWidth, boxHeight);
  //   doc.setTextColor(0, 0, 0); // Black color
  //   doc.text("Transaction ID:", startX + 5, startY + 10);
  //   doc.text(order.tran_id, startX + 70, startY + 10);

  //   startY += boxHeight + boxMargin;

  //   // Add payment details box
  //   doc.rect(startX, startY, boxWidth, boxHeight);
  //   doc.setTextColor(255, 0, 0); // Red rose color
  //   doc.text("Total Amount:", startX + 5, startY + 10);
  //   doc.setTextColor(0, 0, 0); // Black color
  //   doc.text(`$${order.total_amount}`, startX + 70, startY + 10);

  //   startY += boxHeight + boxMargin;

  //   // Add paid status box
  //   doc.rect(startX, startY, boxWidth, boxHeight);
  //   doc.setTextColor(0, 128, 0); // Green color
  //   doc.text("Paid Status:", startX + 5, startY + 10);
  //   doc.setTextColor(0, 0, 0); // Black color
  //   doc.text(order.paidStatus ? "Paid" : "Unpaid", startX + 70, startY + 10);

  //   // Save PDF
  //   doc.save(`Order_${order.tran_id}.pdf`);
  // };

  // handleDownloadPDF 5
  // const handleDownloadPDF = (order) => {
  //     const doc = new jsPDF();

  //     // Set font styles
  //     doc.setFont("helvetica");

  //     // Add logo at the top of the PDF
  //     const imgWidth = 50; // Adjust as needed
  //     const imgHeight = 20; // Adjust as needed
  //     const marginLeft = (doc.internal.pageSize.getWidth() - imgWidth) / 2;
  //     doc.addImage(logo, 'PNG', marginLeft, 10, imgWidth, imgHeight);

  //     // Add title with blue color
  //     doc.setTextColor(17, 103, 177); // blue color
  //     doc.setFontSize(20);
  //     doc.text("Payment Order Summary", doc.internal.pageSize.getWidth() / 2, 70, { align: "center" });

  //     // Reset color
  //     doc.setTextColor(0, 0, 0); // Black color

  //     // Add event details
  //     doc.setFontSize(14);
  //     doc.text(`Event Title: ${order.eventTitle}`, doc.internal.pageSize.getWidth() / 2, 100, { align: "center" });
  //     doc.text(`Event ID: ${order.event_id}`, doc.internal.pageSize.getWidth() / 2, 110, { align: "center" });

  //     // Add customer details
  //     doc.text(`Customer Name: ${order.cus_name}`, doc.internal.pageSize.getWidth() / 2, 140, { align: "center" });
  //     doc.text(`Customer Email: ${order.cus_email}`, doc.internal.pageSize.getWidth() / 2, 150, { align: "center" });

  //     // Add transaction details
  //     doc.text(`Transaction ID: ${order.tran_id}`, doc.internal.pageSize.getWidth() / 2, 180, { align: "center" });

  //     // Add payment details
  //     doc.text(`Total Amount: $${order.total_amount}`, doc.internal.pageSize.getWidth() / 2, 210, { align: "center" });
  //     doc.setTextColor(0, 128, 0); // Green color for paid status
  //     doc.text(`Paid Status: ${order.paidStatus ? "Paid" : "Unpaid"}`, doc.internal.pageSize.getWidth() / 2, 220, { align: "center" });

  //     // Add color to titles
  //     doc.setTextColor(255, 0, 0); // Red color
  //     doc.text("Event Details", doc.internal.pageSize.getWidth() / 2, 90, { align: "center" });
  //     doc.text("Customer Details", doc.internal.pageSize.getWidth() / 2, 130, { align: "center" });
  //     doc.text("Transaction Details", doc.internal.pageSize.getWidth() / 2, 170, { align: "center" });
  //     doc.text("Payment Details", doc.internal.pageSize.getWidth() / 2, 200, { align: "center" });

  //     // Save PDF
  //     doc.save(`Order_${order.tran_id}.pdf`);
  // };

  const handleDownloadPDF = (order) => {
    const doc = new jsPDF();

    // Set font styles
    doc.setFont("helvetica");

    // Add logo at the top of the PDF
    const imgWidth = 45; // Adjust as needed
    const imgHeight = 15; // Adjust as needed
    const marginLeft = (doc.internal.pageSize.getWidth() - imgWidth) / 2;
    doc.addImage(logo, "PNG", marginLeft, 10, imgWidth, imgHeight);

    // Add title with blue color
    doc.setTextColor(3, 37, 76); // blue color
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
    doc.setFontSize(14);
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
    doc.setTextColor(255, 0, 0); // Red color
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
