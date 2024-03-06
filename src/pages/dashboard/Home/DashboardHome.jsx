import axios from "axios";
import { useEffect, useState } from "react";
import {
  HiOutlineClock,
  HiOutlineEye,
} from "react-icons/hi";
import useAuth from "../../../hooks/useAuth";
import { MdOutlineReviews,MdOutlinePayment } from "react-icons/md";

const DashboardHome = () => {
  const { user } = useAuth();
  const [totalReview, setTotalReview] = useState(0);
  const [totalBookings_Payment, setTotalBookings_Payment] = useState(0);
  const [totalProductsOrder, setTotalProductsOrder] = useState(0);

  const fetchReviewsCount = async () => {
    const response = await axios.get(
      `http://localhost:8080/review/${user?.email}`
    );
    if (response.status === 200) {
      setTotalReview(response.data.length);
    }
  };

  const fetchBookingsCount = async () => {
    const response = await axios.get(
      `http://localhost:8080/order/${user?.email}`
    );
    if (response.status === 200) {
      setTotalBookings_Payment(response.data.length);
    }
  };
  const fetchProductsOrderCount = async () => {
    const response = await axios.get(
      `http://localhost:8080/product-orders/${user?.email}`
    );
    if (response.status === 200) {
        setTotalProductsOrder(response.data.length);
    }
  };

  useEffect(() => {
    fetchReviewsCount();
    fetchBookingsCount();
    fetchProductsOrderCount()
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7">
        <div className="flex justify-between items-center rounded-md bg-white py-6 px-7 shadow">
          <div className="flex items-center justify-center rounded-md bg-indigo-100 py-3.5 px-3">
            <HiOutlineEye className="text-indigo-500" size={30} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-2xl font-bold text-black dark:text-white">{totalProductsOrder}</h4>
            <span className="text-md text-neutral-500 font-light">
              Total Order
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center rounded-md bg-white py-6 px-7 shadow">
          <div className="flex items-center justify-center rounded-md bg-green-100 py-3.5 px-3">
            <HiOutlineClock className="text-green-600" size={30} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-2xl font-bold text-black dark:text-white">
              {totalBookings_Payment}
            </h4>
            <span className="text-md text-neutral-500 font-light">
              Total Bookings
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center rounded-md bg-white py-6 px-7 shadow">
          <div className="flex items-center justify-center rounded-md bg-rose-100 py-3.5 px-3">
          <MdOutlinePayment className="text-primary" size={30} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-2xl font-bold text-black dark:text-white">
              {totalBookings_Payment}
            </h4>
            <span className="text-md text-neutral-500 font-light">
              Total Payment
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center rounded-md bg-white py-6 px-7 shadow">
          <div className="flex items-center justify-center rounded-md bg-amber-100 py-3.5 px-3">
            <MdOutlineReviews className="text-amber-600" size={30} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-2xl font-bold text-black dark:text-white">
              {totalReview}
            </h4>
            <span className="text-md text-neutral-500 font-light">
              Total Review
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default DashboardHome;
