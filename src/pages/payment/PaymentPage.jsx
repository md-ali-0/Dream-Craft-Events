import { useQuery } from '@tanstack/react-query';
import Lottie from 'lottie-react';
import { useState } from 'react';
import { CiLocationOn, CiSquareMinus, CiSquarePlus } from 'react-icons/ci';
import { MdOutlineCalendarMonth } from "react-icons/md";
import { Link, useParams } from 'react-router-dom';
import loadingAnimation from "../../assets/animation/animation.json";
import PricingCards from '../../components/cards/PricingCards';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const PaymentPage = () => {
  const params = useParams();
  const [ticketPrice, setTicketPrice] = useState(89)
  const [addMoreTicket, setAddMoreTicket] = useState(1)
  const taxes = ticketPrice * 10 / 100
  const totalPrice = ticketPrice + taxes;
  const axios = useAxiosPublic()
  const { user } = useAuth()


  const ticketPriceHandle = () => {
    if (ticketPrice >= 159) {
      return
    }
    setTicketPrice(ticketPrice + 70)
  }
  const ticketPriceHandle2 = () => {
    if (ticketPrice == 159) {
      setTicketPrice(ticketPrice - 70)
      return
    }
  }

  const handleAddMoreTicket = () => {

    if (addMoreTicket < 5) {
      setAddMoreTicket(addMoreTicket + 1)
      if (ticketPrice == 89 || ticketPrice == 178 || ticketPrice == 267 || ticketPrice == 356) {
        setTicketPrice(ticketPrice + 89)
      }
      else if (ticketPrice == 159 || ticketPrice == 318 || ticketPrice == 477 || ticketPrice == 636) {
        setTicketPrice(ticketPrice + 159)
      }
    }

  }

  if (addMoreTicket >= 5) {
    Swal.fire({
      title: "Oops!",
      text: "You can't purchase more than 5 tickets",
      icon: "error"
    });
  }

  const handleRemoveMoreTicket = () => {
    if (addMoreTicket > 1) {
      setAddMoreTicket(addMoreTicket - 1)
      if (ticketPrice == 89 || ticketPrice == 178 || ticketPrice == 267 || ticketPrice == 356 || ticketPrice == 445) {
        setTicketPrice(ticketPrice - 89)
      }
      else if (ticketPrice == 159 || ticketPrice == 318 || ticketPrice == 477 || ticketPrice == 636 || ticketPrice == 795) {
        setTicketPrice(ticketPrice - 159)
      }
    }
  }


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
  const timestamp = new Date().getTime();
  const randomNumber = Math.floor(Math.random() * 1000);
  const orderID = `${event._id.slice(0, 6)}-${timestamp}-${randomNumber}`;

  const paymentInfo = {
    name: user?.name,
    email: user?.email,
    eventId: params._id,
    eventTitle: event.title,
    eventImage: event.image,
    eventDate: event.date,
    amount: totalPrice,
    currency: 'USD'
  }

  const handlePayment = async () => {
    const requestRes = await axios.post('/order', paymentInfo)
    window.location.replace(requestRes.data.url)
    // //console.log(requestRes);
  }


  return (
    <div className='max-w-screen-xl mx-auto'>
      <div className='grid md:grid-cols-3 px-4 md:px-1 lg:gap-4'>
        <div className='col-span-2'>
          <PricingCards ticketPriceHandle={ticketPriceHandle} ticketPriceHandle2={ticketPriceHandle2} />
        </div>
        <div className='mt-16 col-span-2 md:col-span-1'>
          <h2 className='text-2xl text-center font-semibold'>Payment details</h2>
          <div className='bg-slate-100 rounded-md border-2 border-black mt-7 p-5 pb-12'>
            <h3 className='font-semibold text-xl'>Order Summary</h3>
            <h2 className='mt-1'>Order id: <span className='font-semibold ml-2'>{orderID}</span></h2>
            <div className='flex md:flex-col lg:flex-row gap-3 lg:gap-5 justify-between mt-4'>
              <img src={event.image} alt={event.title} className='w-24' />
              <div>
                <h2>{event.title}</h2>
                <span className='font-semibold'>x {addMoreTicket}</span>
              </div>
              <h2 className='font-semibold text-xl'>${ticketPrice}</h2>
            </div>
            <div className='mt-5'>
              <h2 className='flex items-center gap-2'><MdOutlineCalendarMonth />{formattedDate}</h2>
              <h2 className='flex items-center gap-2 mt-2'><CiLocationOn />{event.location}</h2>
            </div>
            <div className='flex mt-4 justify-between items-center'>
              <h2>Taxes</h2>
              <p className='font-semibold'>${taxes}</p>
            </div>
            <hr className='h-[1.6px] mt-1 bg-gray-500' />
            <div className='flex mt-4 justify-between items-center'>
              <h2 className='text-2xl font-semibold'>Total</h2>
              <p className='font-semibold text-2xl'>${totalPrice}</p>
            </div>
            <div className='mt-4 flex gap-2'>
              <h2 className='text-lg text-gray-700 font-semibold'>Buy more ticket</h2>
              <div className='flex gap-1'>
                <CiSquareMinus onClick={handleRemoveMoreTicket} className='text-3xl' />
                <input type="text" className='w-7  text-center' value={addMoreTicket} defaultValue={addMoreTicket} />
                <CiSquarePlus onClick={handleAddMoreTicket} className='text-3xl' />
              </div>
            </div>
            <div className='flex flex-col items-center'>
              {user ?
                <button
                  onClick={handlePayment}
                  className='bg-rose-700 w-full rounded-md py-2 mt-2 text-white font-medium lg:text-xl text-xl md:text-sm'
                >
                  Continue to secure payment
                </button>
                :
                <Link className='w-full' to='/login'><button
                  className='bg-rose-700 w-full rounded-md py-2 px-4  mt-2 text-white font-medium lg:text-xl text-xl md:text-sm'
                >
                  Login to Purchase
                </button></Link>}
              <Link to={`/event-details/${event._id}`}>
                <h3 className='mt-3 border-b border-black font-semibold md:text-sm text-xl lg:text-xl'>Cancel payment</h3>
              </Link>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;