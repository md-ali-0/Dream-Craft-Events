import React from "react";
import { FaDollarSign } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";
import { FaCalendarAlt, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { BsDiagram3, BsTwitterX } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const Wishlist = () => {
  return (
    <div>
      <h2 className="text-4xl font-semibold text-center ">My Wishlist</h2>

      <div className="grid gap-7">
        <div>
          <h2 className="text-3xl text-primary font-semibold mb-5 pl-3 outline w-36 ">Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            <div className="rounded-md shadow-lg w-64">
              <div className="rounded-t-md shadow-lg h-60 relative overflow-hidden ">
                <img
                  src="https://i.ibb.co/rm6HMYW/Balloons.jpg"
                  alt=""
                  className="rounded-t-md h-full w-full object-cover transform transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute bg-primary bottom-0 left-0 px-6 py-3 text-white font-semibold rounded-tr-md flex items-center gap-3">
                  {" "}
                  <FaDollarSign /> 10.99
                </div>
              </div>
              <div className="px-4 py-4">
                <h2 className="text-2xl mt-2 font-semibold text-secondary">
                Balloons
                </h2>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex gap-2 items-center">
                    <p className="text-sm text-secondary font-medium flex gap-2">
                      <TbListDetails className="text-primary text-base" />
                      Colorful balloons to add a festive touch to your event. Perfect for birthdays, weddings, and celebrations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-md shadow-lg w-64">
              <div className="rounded-t-md shadow-lg h-60 relative overflow-hidden ">
                <img
                  src="https://i.ibb.co/F3GxG8W/Color-Splash.jpg"
                  alt=""
                  className="rounded-t-md h-full w-full object-cover transform transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute bg-primary bottom-0 left-0 px-6 py-3 text-white font-semibold rounded-tr-md flex items-center gap-3">
                  {" "}
                  <FaDollarSign />14.99
                </div>
              </div>
              <div className="px-4 py-4">
                <h2 className="text-2xl mt-2 font-semibold text-secondary">
                Color Splash
                </h2>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex gap-2 items-center">
                    <p className="text-sm text-secondary font-medium flex gap-2">
                      <TbListDetails className="text-primary text-base" />
                      Vibrant color powders for a lively color splash festival. Perfect for Holi and other fun events.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl text-primary font-semibold mb-2 pl-3 outline w-32">Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="rounded-md shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg bg-white hover:bg-gray-100">
            <div className="rounded-t-md shadow-lg h-60 relative overflow-hidden ">
                <img src="https://files.prokerala.com/news/photos/imgs/1024/dhaka-bangladeshi-artists-perform-traditional-240418.jpg" alt="Art and Culture Festival" className="rounded-t-md h-full w-full object-cover transform transition-transform duration-500 hover:scale-110" />
                <div className="absolute bg-primary bottom-0 left-0 px-6 py-3 text-white font-semibold rounded-tr-md flex items-center gap-3"> <BsDiagram3 /> 800 Seat</div>
            </div>
            <div className="px-4 py-6">
                <div className="flex justify-between">
                    <p className="text-sm text-secondary font-medium flex gap-2"><FaCalendarAlt className="text-primary text-base" />24-02-2024</p>
                    <p className="text-sm text-secondary font-medium flex gap-1"><CiLocationOn className="text-primary text-lg font-bold" /> City Arts Center</p>
                </div>
                <h2 className="text-2xl mt-2 font-semibold text-secondary">Art and Culture Festival</h2>
                <div className="flex justify-between items-center mt-4">
                    <Link to={`/event-details/2`} className="text-primary font-semibold underline">Event Details</Link>
                    <div className="flex gap-2 items-center">
                        <a href="/" className="text-sm text-secondary hover:text-primary"><FaFacebook /></a>
                        <a href="/" className="text-sm text-secondary hover:text-primary"><BsTwitterX /></a>
                        <a href="/" className="text-sm text-secondary hover:text-primary"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
