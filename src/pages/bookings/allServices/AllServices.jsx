import { FaCalendarAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import Container from "../../../components/container/Container";
import { AiOutlineFieldTime } from "react-icons/ai";
import { IoTicket } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaPeopleLine } from "react-icons/fa6";
import { BsShop } from "react-icons/bs";
import organizer from "../../../assets/Organizer/organizer.jpg";
import customimg from "../../home/magicBanner/image/img3.png";
import hostimg from "../../home/magicBanner/image/img5.png";
import shopimg from "../../home/magicBanner/image/img6.jpg";

const AllServices = () => {
  return (
    <Container>
      <h3 className="mt-8 mb-5 text-center uppercase text-secondary font-extrabold text-3xl">
        {/* Book Your Events */}
        Our Services
      </h3>
      <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-24 m-3 lg:m-12">
        {/* card 1  */}
        <div className="rounded-md shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg bg-white hover:bg-gray-100">
          <div className="rounded-t-md shadow-lg h-60 relative overflow-hidden ">
            <img
              src={customimg}
              alt=""
              className="rounded-t-md h-full w-full object-cover transform transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600   hover:bg-gradient-to-br bottom-0 left-0 px-6 py-3 text-white font-semibold rounded-tr-md flex items-center gap-3">
              {" "}
              <AiOutlineFieldTime /> Order Now
            </div>
          </div>
          <div className="px-4 py-6">
            <div className="flex justify-between">
              <p className="text-sm text-secondary font-medium flex gap-2">
                <FaCalendarAlt className="text-primary text-base" />
                Book Your Date
              </p>
              <p className="text-sm text-secondary font-medium flex gap-1">
                <CiLocationOn className="text-primary text-lg font-bold" />
                In Your Location
              </p>
            </div>
            <h2 className="p-1 text-center text-2xl mt-2 font-semibold text-secondary capitalize">
              Craft Your Desired Events
            </h2>

            <p className="my-3 text-center text-sm text-secondary font-medium gap-2">
              Create unforgettable experiences with custom-designed events
              tailored to your unique vision and preferences.
            </p>

            <div className="flex justify-center">
              <Link to="/create-your-event">
                <button
                  type="button"
                  className=" text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg lg:text-lg px-5 py-2.5 text-center me-2 mb-2"
                >
                  Order for a Custom Event
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* card 1 end */}
        {/* card 2  */}
        <div className="rounded-md shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg bg-white hover:bg-gray-100">
          <div className="rounded-t-md shadow-lg h-60 relative overflow-hidden ">
            <img
              src={organizer}
              alt=""
              className="rounded-t-md h-full w-full object-cover transform transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl bottom-0 left-0 px-6 py-3 text-white font-semibold rounded-tr-md flex items-center gap-3">
              {" "}
              <IoTicket />
              Book Ticket
            </div>
          </div>
          <div className="px-4 py-6">
            <div className="flex justify-between">
              <p className="text-sm text-secondary font-medium flex gap-2">
                <FaCalendarAlt className="text-primary text-base" />
                Mark Your Calendar
              </p>
              <p className="text-sm text-secondary font-medium flex gap-1">
                <CiLocationOn className="text-primary text-lg font-bold" />
                In The Events Location
              </p>
            </div>
            <h2 className="p-1 text-center text-2xl mt-2 font-semibold text-secondary capitalize">
              Book Tickets for Premier Events
            </h2>

            <p className="my-3 text-center text-sm text-secondary font-medium gap-2">
              Easily reserve tickets for a variety of premier events, from
              concerts to conferences, ensuring seamless access to memorable
              experiences.
            </p>

            <div className="flex justify-center">
              <Link to="/events">
                <button
                  type="button"
                  className=" text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg lg:text-lg px-5 py-2.5 text-center me-2 mb-2"
                >
                  Book Ticket for Existing Events
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* card 2 end */}

        {/* card 3  */}
        <div className="rounded-md shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg bg-white hover:bg-gray-100">
          <div className="rounded-t-md shadow-lg h-60 relative overflow-hidden ">
            <img
              src={hostimg}
              alt=""
              className="rounded-t-md h-full w-full object-cover transform transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl bottom-0 left-0 px-6 py-3 text-white font-semibold rounded-tr-md flex items-center gap-3">
              {" "}
              <FaPeopleGroup />
              Organize
            </div>
          </div>
          <div className="px-4 py-6">
            <div className="flex justify-between">
              <p className="text-sm text-secondary font-medium flex gap-2">
                <FaPeopleLine className="text-primary text-base" />
                Become an Organizer
              </p>
              <p className="text-sm text-secondary font-medium flex gap-1">
                <CiLocationOn className="text-primary text-lg font-bold" />
                At Your Desired Venue
              </p>
            </div>
            <h2 className="p-1 text-center text-2xl mt-2 font-semibold text-secondary capitalize">
              Request for Professional Organizational Support
            </h2>

            <p className="my-3 text-center text-sm text-secondary font-medium gap-2">
              Get professional support in planning and executing events of any
              size, from logistics to on-site coordination, for a successful
              outcome.
            </p>

            <div className="flex justify-center">
              <Link to="/request-organizer">
                <button
                  type="button"
                  className=" text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg lg:text-lg px-5 py-2.5 text-center me-2 mb-2"
                >
                  Request for an Event Organizer
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* card 3 end */}

        {/* card 4  */}
        <div className="rounded-md shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg bg-white hover:bg-gray-100">
          <div className="rounded-t-md shadow-lg h-60 relative overflow-hidden ">
            <img
              src={shopimg}
              alt=""
              className="rounded-t-md h-full w-full object-cover transform transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l bottom-0 left-0 px-6 py-3 text-white font-semibold rounded-tr-md flex items-center gap-3">
              {" "}
              <FaShoppingBag />
              Shop
            </div>
          </div>
          <div className="px-4 py-6">
            <div className="flex justify-between">
              <p className="text-sm text-secondary font-medium flex gap-2">
                <FaCartShopping className="text-primary text-base" />
                Buy now
              </p>
              <p className="text-sm text-secondary font-medium flex gap-1">
                <BsShop className="text-primary text-lg font-bold" />
                Explore our Shop
              </p>
            </div>
            <h2 className="p-1 text-center text-2xl mt-2 font-semibold text-secondary capitalize">
              Purchase Event Accessories from a Trusted Shop
            </h2>

            <p className="my-3 text-center text-sm text-secondary font-medium gap-2">
              Elevate your event with premium accessories from a trusted shop,
              offering everything from decor to practical supplies for an
              unforgettable experience.
            </p>

            <div className="flex justify-center">
              <Link to="/shop">
                <button
                  type="button"
                  className=" text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg lg:text-lg px-5 py-2.5 text-center me-2 mb-2"
                >
                  Buy Event Accessories from Shop
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* card 4 end */}
      </div>
    </Container>
  );
};

export default AllServices;
