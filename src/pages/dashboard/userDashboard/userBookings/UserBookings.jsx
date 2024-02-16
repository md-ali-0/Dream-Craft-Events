import React from "react";
import { FaDollarSign } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";
import { FaCalendarAlt, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { BsDiagram3, BsTwitterX } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const UserBookings = () => {
  return (
    <div>
      <h2 className="text-4xl font-semibold text-center ">My Bookings</h2>

      <div>
        <h2 className="text-3xl text-primary font-semibold mb-2 pl-3 outline w-56 mt-7">
          Ticket booking
        </h2>
        <p className="text-primary font-semibold mb-5">You have Booked ticket for this upcoming event.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="rounded-md shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg bg-white hover:bg-gray-100">
            <div className="rounded-t-md shadow-lg h-60 relative overflow-hidden ">
              <img
                src="https://www.futurarc.com/wp-content/uploads/2019/02/Happ_A-Green-lifestyle_NovDec2016-copycopy.jpg"
                alt="Art and Culture Festival"
                className="rounded-t-md h-full w-full object-cover transform transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute bg-primary bottom-0 left-0 px-6 py-3 text-white font-semibold rounded-tr-md flex items-center gap-3">
                {" "}
                <BsDiagram3 /> 800 Seat
              </div>
            </div>
            <div className="px-4 py-6">
              <div className="flex justify-between">
                <p className="text-sm text-secondary font-medium flex gap-2">
                  <FaCalendarAlt className="text-primary text-base" />
                  24-02-2024
                </p>
                <p className="text-sm text-secondary font-medium flex gap-1">
                  <CiLocationOn className="text-primary text-lg font-bold" />{" "}
                  City Arts Center
                </p>
              </div>
              <h2 className="text-2xl mt-2 font-semibold text-secondary">
                Green Living Expo
              </h2>
              <div className="flex justify-between items-center mt-4">
                <Link
                  to={`/event-details/2`}
                  className="text-primary font-semibold underline"
                >
                  Event Details
                </Link>
                <div className="flex gap-2 items-center">
                  <a
                    href="/"
                    className="text-sm text-secondary hover:text-primary"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="/"
                    className="text-sm text-secondary hover:text-primary"
                  >
                    <BsTwitterX />
                  </a>
                  <a
                    href="/"
                    className="text-sm text-secondary hover:text-primary"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBookings;
