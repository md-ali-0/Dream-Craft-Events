import axios from "axios";
import { useEffect, useState } from "react";
import { HiOutlineClock, HiOutlineEye } from "react-icons/hi";
import useAuth from "../../../hooks/useAuth";
import { MdOutlineReviews, MdOutlinePayment } from "react-icons/md";

const DashboardHome = () => {
  const { user } = useAuth();
  const [totalReview, setTotalReview] = useState(0);
  const [totalBookings_Payment, setTotalBookings_Payment] = useState(0);
  const [totalProductsOrder, setTotalProductsOrder] = useState(0);


  const [widgets, setWidgets] = useState({
    totalOrder: true,
    totalBookings: true,
    totalPayment: true,
    totalReview: true,
  });

  const fetchReviewsCount = async () => {
    const response = await axios.get(
      `https://dream-craft-server.vercel.app/review/${user?.email}`
    );
    if (response.status === 200) {
      setTotalReview(response.data.length);
    }
  };

  const fetchBookingsCount = async () => {
    const response = await axios.get(
      `https://dream-craft-server.vercel.app/order/${user?.email}`
    );
    if (response.status === 200) {
      setTotalBookings_Payment(response.data.length);
    }
  };

  const fetchProductsOrderCount = async () => {
    const response = await axios.get(
      `https://dream-craft-server.vercel.app/product-orders/${user?.email}`
    );
    if (response.status === 200) {
      setTotalProductsOrder(response.data.length);
    }
  };

  useEffect(() => {
    fetchReviewsCount();
    fetchBookingsCount();
    fetchProductsOrderCount();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {widgets.totalOrder && (
        <Widget
          icon={<HiOutlineEye className="text-indigo-500" size={30} />}
          title="Total Order"
          count={totalProductsOrder}
        />
      )}

      {widgets.totalBookings && (
        <Widget
          icon={<HiOutlineClock className="text-green-600" size={30} />}
          title="Total Bookings"
          count={totalBookings_Payment}
        />
      )}

      {widgets.totalPayment && (
        <Widget
          icon={<MdOutlinePayment className="text-primary" size={30} />}
          title="Total Payment"
          count={totalBookings_Payment}
        />
      )}

      {widgets.totalReview && (
        <Widget
          icon={<MdOutlineReviews className="text-amber-600" size={30} />}
          title="Total Review"
          count={totalReview}
        />
      )}
    </div>
  );
};

const Widget = ({ icon, title, count }) => (
  <div className="flex flex-col items-center justify-center p-4 bg-white rounded-md shadow-md">
    <div className="mb-2">{icon}</div>
    <h4 className="text-xl font-bold text-black dark:text-white">{count}</h4>
    <span className="text-sm text-neutral-500 font-light">{title}</span>
  </div>
);

export default DashboardHome;
