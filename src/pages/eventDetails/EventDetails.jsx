import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import { BsDiagram3, BsLightning } from "react-icons/bs";
import { CiCalendarDate, CiPlay1 } from "react-icons/ci";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { MdPersonAddAlt1 } from "react-icons/md";
import { PiListDashesBold, PiNotebookDuotone } from "react-icons/pi";
import { RiFacebookFill } from "react-icons/ri";
import { TiTick } from "react-icons/ti";
import { VscLocation } from "react-icons/vsc";
import { Link, useParams } from "react-router-dom";
import loadingAnimation from "/public/animation.json";
import { IoTicketOutline } from "react-icons/io5";


const EventDetails = () => {
  const params = useParams();

  const fetchEvents = async () => {
    const response = await fetch(
      `https://dream-craft-server.vercel.app/event/${params._id}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  const {
    data: event = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["event"],
    queryFn: fetchEvents,
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
    return <p>Error loading events: {error.message}</p>;
  }

  const dateFormat = new Date(event.date);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = dateFormat.toLocaleDateString('en-US', options);

  return (
    <div>
      <div
        className=""
        style={{
          backgroundImage: "url('https://i.ibb.co/VxZZKMK/banner-top.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          borderRadius: "6px",
          backgroundPosition: "center",
          height: 500,
        }}
      >
        <div className="h-[500px] bg-black bg-opacity-70 relative">
          <div className="absolute top-60 left-8 md:left-36 ">
            <h1 className="text-5xl text-white font-bold">Event Details</h1>
            <p className="text-xl mt-2 flex items-center gap-2 text-white">
              <Link to={'/events'}><span className="underline">Events</span></Link> <CiPlay1 className="text-pink-600" />{" "}
              <span className="text-red-500">Event Details</span>
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-7 mt-24 max-w-screen-xl mx-auto px-4 ">
        <div className="lg:col-span-5">
          <div>
            <img
              className="w-full lg:w-[95%] h-96 object-cover rounded-md"
              src={event.image}
              alt={event.title}
            />
            <div className="flex justify-between md:max-w-[780px] lg:max-w-[830px] ml-2 mt-6">
              <p className="flex items-center text-sm gap-2">
                <CiCalendarDate className="text-xl" />
                {formattedDate}
              </p>
              <p className="flex items-center gap-2 text-red-600 font-semibold text-xl">
                <BsDiagram3 className="text-xl" />
                {event.seat} Seat
              </p>
              <p className="flex items-center gap-1 text-sm">
                <VscLocation className="text-2xl" />
                {event.location}
              </p>
            </div>
            <div className="flex text-sm md:flex-row flex-col gap-4 border-y py-4 my-6 justify-around max-w-[840px]">
              <div className="flex gap-3 md:gap-16 lg:gap-24">
                <div className="flex gap-3 items-center ">
                  <PiListDashesBold className="text-red-500 text-xl" />
                  <div>
                    <p className="font-semibold">Event Type</p>
                    <p>Web Development</p>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <HiOutlineSpeakerphone className="text-red-500 text-xl" />
                  <div>
                    <p className="font-semibold">Speaker</p>
                    <p>10 Best Speaker</p>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <BsLightning className="text-red-500 text-xl" />
                  <div>
                    <p className="font-semibold">Sponsor</p>
                    <p>Event Lab</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center">
                <p>☆☆☆☆☆</p>
                <p>(260)</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-3 my-6">
            <div className="bg-pink-700 text-white px-5 py-1 rounded-md">
              <span className="text-xl font-semibold">$</span>
              <span className="text-3xl font-semibold tracking-tight">89</span>
              <span className="ms-1 font-normal">/seat</span>
            </div>
            <Link to={`/payment/${params._id}`}>
              <button className="bg-pink-700 px-4 py-2 text-2xl w-60 text-center text-white rounded-md flex items-center  gap-2">
                <IoTicketOutline className="text-3xl" />
                Get The Ticket
              </button>
            </Link>
          </div>
          <div>
            <h2 className="text-2xl font-semibold max-w-[850px]">
              {event.title}
            </h2>
            <p className="mt-5 text-gray-600 leading-loose max-w-[850px]">
              {event.description}
            </p>
          </div>
          <div className="mt-8 grid gap-8 md:gap-6 lg:gap-0 max-w-[840px] lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl font-semibold">Overview</h2>
              <ul className="space-y-4 mt-5 text-lg font-medium">
                <li className="flex items-center gap-2">
                  <TiTick className="text-2xl" /> You Got Full Free Certificate.
                </li>
                <li className="flex items-center gap-2">
                  <TiTick className="text-2xl" />
                  Unlimited Coffe & Tea When U Boring.
                </li>
                <li className="flex items-center gap-2">
                  <TiTick className="text-2xl" />
                  Comfortable Seating Areas.
                </li>
                <li className="flex items-center gap-2">
                  <TiTick className="text-2xl" />
                  Wi-Fi Access.
                </li>
                <li className="flex items-center gap-2">
                  <TiTick className="text-2xl" />
                  Lunch Suspendisse In Commodo Feli.
                </li>
              </ul>
            </div>
            <div className="flex gap-8">
              <img
                className="w-[38%] md:w-[48%] rounded-tr-md rounded-bl-md h-52"
                src="https://i.ibb.co/mGZ71df/pexels-rdne-stock-project-7648306.jpg"
                alt=""
              />
              <img
                className="w-[38%] md:w-[48%] rounded-tl-md rounded-br-md h-52"
                src="https://i.ibb.co/9qNw5xs/leadership.jpg"
                alt=""
              />
            </div>
          </div>
          <p className="mt-8 text-gray-600 max-w-[850px]">
            Discover the latest tech trends at Tech Expo 2024. Engage with
            leaders, explore innovations, and experience cutting-edge demos.
            Join us for a dynamic tech showcase. Discover the latest tech trends
            at Tech Expo 2024. Engage with leaders, explore innovations, and
            experience cutting-edge demos. Join us for a dynamic tech showcase.
          </p>

          <h2 className="text-2xl font-semibold my-8">Main Speakers</h2>

          <div className="grid md:grid-cols-2 gap-6 md:gap-0 mb-8">
            <div className="space-y-10">
              <div className="flex items-center gap-4">
                <img
                  className="w-28 h-28 rounded-full"
                  src="https://i.ibb.co/qD9p7Fg/IMG-20220514-211757-02.jpg"
                  alt=""
                />
                <div>
                  <h2 className="text-xl font-semibold">Rakibul Hasan</h2>
                  <h3 className="text-md font-medium">Web Developer</h3>
                  <div className="flex gap-3 mt-3">
                    <p className="border-2 border-gray-500 rounded-full p-1">
                      <RiFacebookFill className="text-md" />
                    </p>
                    <p className="border-2 border-gray-500 rounded-full p-1">
                      <FaInstagram className="text-md" />
                    </p>
                    <p className="border-2 border-gray-500 rounded-full p-1">
                      <FaLinkedinIn className="text-md" />
                    </p>
                    <p className="border-2 border-gray-500 rounded-full p-1">
                      <FaTwitter className="text-md" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img
                  className="w-28 h-28 rounded-full"
                  src="https://demo.egenslab.com/html/eventlab/assets/images/speaker/speaker-sm1.png"
                  alt=""
                />
                <div>
                  <h2 className="text-xl font-semibold">Nizam Chy</h2>
                  <h3 className="text-md font-medium">Graphic Designer</h3>
                  <div className="flex gap-3 mt-3">
                    <p className="border-2 border-gray-500 rounded-full p-1">
                      <RiFacebookFill className="text-md" />
                    </p>
                    <p className="border-2 border-gray-500 rounded-full p-1">
                      <FaInstagram className="text-md" />
                    </p>
                    <p className="border-2 border-gray-500 rounded-full p-1">
                      <FaLinkedinIn className="text-md" />
                    </p>
                    <p className="border-2 border-gray-500 rounded-full p-1">
                      <FaTwitter className="text-md" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img
                  className="w-28 h-28 rounded-full"
                  src="https://demo.egenslab.com/html/eventlab/assets/images/speaker/speaker-sm2.png"
                  alt=""
                />
                <div>
                  <h2 className="text-xl font-semibold">Mohammad Ali</h2>
                  <h3 className="text-md font-medium">Digital Marketer</h3>
                  <div className="flex gap-3 mt-3">
                    <p className="border-2 border-gray-500 rounded-full p-1">
                      <RiFacebookFill className="text-md" />
                    </p>
                    <p className="border-2 border-gray-500 rounded-full p-1">
                      <FaInstagram className="text-md" />
                    </p>
                    <p className="border-2 border-gray-500 rounded-full p-1">
                      <FaLinkedinIn className="text-md" />
                    </p>
                    <p className="border-2 border-gray-500 rounded-full p-1">
                      <FaTwitter className="text-md" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-10">
              <div className="flex items-center gap-4">
                <img
                  className="w-28 h-28 rounded-full"
                  src="https://1.bp.blogspot.com/-HoyT-d9JX0g/YUtRefQcHLI/AAAAAAAAk9w/P-NTrf0jPColdcKjKy2XGAVAjLjbQUyIQCLcBGAsYHQ/s16000-rw/50%2B%252B%2BIndian%2BHijab%2BGirl%2BDP%2Bfor%2BInstagram%2BPage%2Bwith%2BCaption%2B%252825%2529.jpg"
                  alt=""
                />
                <div>
                  <h2 className="text-xl font-semibold">Neelima Sultana</h2>
                  <h3 className="text-md font-medium">Product Designer</h3>
                  <div className="flex gap-3 mt-3">
                    <p className="border-2 border-gray-500 rounded-full p-1">
                      <RiFacebookFill className="text-md" />
                    </p>
                    <p className="border-2 border-gray-500 rounded-full p-1">
                      <FaInstagram className="text-md" />
                    </p>
                    <p className="border-2 border-gray-500 rounded-full p-1">
                      <FaLinkedinIn className="text-md" />
                    </p>
                    <p className="border-2 border-gray-500 rounded-full p-1">
                      <FaTwitter className="text-md" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img
                  className="w-28 h-28 rounded-full"
                  src="https://demo.egenslab.com/html/eventlab/assets/images/speaker/speaker-sm4.png"
                  alt=""
                />
                <div>
                  <h2 className="text-xl font-semibold">Saikat Singha</h2>
                  <h3 className="text-md font-medium">
                    Brand Identity Designer
                  </h3>
                  <div className="flex gap-3 mt-3">
                    <p className="border-2 border-gray-500 rounded-full p-1">
                      <RiFacebookFill className="text-md" />
                    </p>
                    <p className="border-2 border-gray-500 rounded-full p-1">
                      <FaInstagram className="text-md" />
                    </p>
                    <p className="border-2 border-gray-500 rounded-full p-1">
                      <FaLinkedinIn className="text-md" />
                    </p>
                    <p className="border-2 border-gray-500 rounded-full p-1">
                      <FaTwitter className="text-md" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img
                  className="w-28 h-28 rounded-full"
                  src="https://i.ibb.co/pPtyQxm/360-F-214746128-31-Jkea-P6r-U0-Nzzzd-FC4kh-Gkmqc8noe6h.jpg"
                  alt=""
                />
                <div>
                  <h2 className="text-xl font-semibold">Rizve Ahmed</h2>
                  <h3 className="text-md font-medium">Writer</h3>
                  <div className="flex gap-3 mt-3">
                    <p className="border-2 border-gray-500 rounded-full p-1">
                      <RiFacebookFill className="text-md" />
                    </p>
                    <p className="border-2 border-gray-500 rounded-full p-1">
                      <FaInstagram className="text-md" />
                    </p>
                    <p className="border-2 border-gray-500 rounded-full p-1">
                      <FaLinkedinIn className="text-md" />
                    </p>
                    <p className="border-2 border-gray-500 rounded-full p-1">
                      <FaTwitter className="text-md" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* <div className="bg-base-200 py-5 lg:w-96 mt-8 lg:mt-0">
            <h2 className="bg-pink-700 px-4 py-2 text-2xl w-60 text-center text-white rounded-r-md flex items-center gap-2">
              <BsBookmarkCheck />
              Book This Event
            </h2>

            <div>
              <form action="" className="lg:pl-7 px-4 pt-4 space-y-4">
                <input
                  type="text"
                  placeholder="Your full name"
                  className="lg:w-80 w-full p-2 rounded-md border-2 outline-pink-500"
                />
                <input
                  type="text"
                  placeholder="Your email"
                  className="lg:w-80 w-full p-2 rounded-md border-2 outline-pink-500"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="lg:w-80 w-full p-2 rounded-md border-2 outline-pink-500"
                />
                <select
                  type="text"
                  defaultValue=""
                  className="lg:w-80 w-full p-2 rounded-md border-2 outline-pink-500"
                >
                  <option value="" disabled>
                    Quantity
                  </option>
                  <option value="One">One</option>
                  <option value="Two">Two</option>
                  <option value="Three">Three</option>
                </select>
                <input
                  type="text"
                  placeholder="Your location"
                  className="lg:w-80 w-full p-2 rounded-md border-2 outline-pink-500"
                />
                <button
                  type="submit"
                  className="bg-pink-700 lg:w-80 w-full text-center text-xl font-semibold text-white py-2 rounded-md"
                >
                  Submit Now
                </button>
              </form>
            </div>
          </div> */}
          <div className="bg-base-200 py-5 lg:w-96">
            <h2 className="bg-pink-700 px-4 py-2 text-2xl w-60 text-center text-white rounded-r-md flex items-center gap-2">
              <PiNotebookDuotone className="text-3xl" />
              Recent Event
            </h2>

            <div className="lg:pl-5 px-4 pt-4 mt-3 space-y-5">
              <div className="flex gap-4 items-center">
                <img
                  className="w-40 h-28 rounded-md"
                  src="https://i.ibb.co/9qNw5xs/leadership.jpg"
                  alt=""
                />
                <div className="">
                  <h3 className="text-sm font-semibold">
                    Donec Risus Dui, Suscipit Iand Tempor Lacinia Vehicula.
                  </h3>
                  <div className="flex justify-between my-3">
                    <p className="flex items-center text-sm gap-2">
                      <CiCalendarDate className="text-sm" />
                      January 30, 2024
                    </p>
                    <p className="flex items-center gap-2 text-sm text-red-600 font-semibold ">
                      <BsDiagram3 className="text-sm" />
                      500 Seat
                    </p>
                  </div>
                  <button className="text-sm text-red-600 underline">
                    Book Now
                  </button>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <img
                  className="w-40 h-28 rounded-md"
                  src="https://i.ibb.co/mGZ71df/pexels-rdne-stock-project-7648306.jpg"
                  alt=""
                />
                <div className="">
                  <h3 className="text-sm font-semibold">
                    Donec Risus Dui, Suscipit Iand Tempor Lacinia Vehicula.
                  </h3>
                  <div className="flex justify-between my-3">
                    <p className="flex items-center text-sm gap-2">
                      <CiCalendarDate className="text-sm" />
                      January 26, 2024
                    </p>
                    <p className="flex items-center gap-2 text-sm text-red-600 font-semibold ">
                      <BsDiagram3 className="text-sm" />
                      500 Seat
                    </p>
                  </div>
                  <button className="text-sm text-red-600 underline">
                    Book Now
                  </button>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <img
                  className="w-40 h-28 rounded-md"
                  src="https://i.ibb.co/9qNw5xs/leadership.jpg"
                  alt=""
                />
                <div className="">
                  <h3 className="text-sm font-semibold">
                    Donec Risus Dui, Suscipit Iand Tempor Lacinia Vehicula.
                  </h3>
                  <div className="flex justify-between my-3">
                    <p className="flex items-center text-sm gap-2">
                      <CiCalendarDate className="text-sm" />
                      February 21, 2024
                    </p>
                    <p className="flex items-center gap-2 text-sm text-red-600 font-semibold ">
                      <BsDiagram3 className="text-sm" />
                      500 Seat
                    </p>
                  </div>
                  <button className="text-sm text-red-600 underline">
                    Book Now
                  </button>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <img
                  className="w-40 h-28 rounded-md"
                  src="https://i.ibb.co/mGZ71df/pexels-rdne-stock-project-7648306.jpg"
                  alt=""
                />
                <div className="">
                  <h3 className="text-sm font-semibold">
                    Donec Risus Dui, Suscipit Iand Tempor Lacinia Vehicula.
                  </h3>
                  <div className="flex justify-between my-3">
                    <p className="flex items-center text-sm gap-2">
                      <CiCalendarDate className="text-sm" />
                      February 28, 2024
                    </p>
                    <p className="flex items-center gap-2 text-sm text-red-600 font-semibold ">
                      <BsDiagram3 className="text-sm" />
                      500 Seat
                    </p>
                  </div>
                  <button className="text-sm text-red-600 underline">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-1">
              <div className="bg-base-200 py-5 lg:w-96 mt-8 lg:mt-10">
                <h2 className="bg-pink-700 px-4 py-2 text-2xl w-72 text-center text-white rounded-r-md flex items-center gap-2">
                  <MdPersonAddAlt1 className="text-3xl" />
                  Event Organized By
                </h2>
                <div className="ml-32 mt-6">
                  <img
                    className="w-40 h-40 rounded-md"
                    src="https://i.ibb.co/c2PW68Q/pexels-italo-melo-2379004.jpg"
                    alt=""
                  />
                  <div className="mt-5 ">
                    <h2 className="text-2xl font-semibold">Abdullah Mamun</h2>
                    <h3 className="ml-16 text-lg">CEO</h3>
                  </div>
                </div>
              </div>
              <div className="mt-8 px-2">
                <img src="https://i.ibb.co/gzYpGCB/sb-banner.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
