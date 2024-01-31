import { useState } from 'react';
import { CiLocationOn, CiUser, CiPlay1 } from 'react-icons/ci';
import { FaListAlt, FaCalendarAlt,FaUsers, FaCamera } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { TbToolsKitchen2 } from "react-icons/tb";
import Swal from 'sweetalert2';




const CustomEvent = () => {

    const [eventType, setEventType] = useState('')
    const [date, setDate] = useState('')
    const [location, setEventLocation] = useState('')
    const [guestCount, setEventGuestCount] = useState('')
    const [photography, setPhotography] = useState('')
    const [catering, setCatering] = useState('')


    const handleInputDate = (e) => {
        setDate(e.target.value)
        e.preventDefault()
    }
    const handleEventType = (e) => {
        setEventType(e.target.value)
    }
    const handleInputLocation = (e) => {
        setEventLocation(e.target.value)
    }
    const handleGuestCount = (e) => {
        setEventGuestCount(e.target.value)
    }
    const handleInputPhotography = (e) => {
        setPhotography(e.target.value)
    }
    const handleCatering = (e) => {
        setCatering(e.target.value)
    }

    const handleBooking = () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "You have created an event",
            showConfirmButton: false,
            timer: 1500
          });
    }


    return (
        <div>
            <div className='' style={{
                backgroundImage: "url('https://i.ibb.co/YbNwSg0/birthday.jpg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                borderRadius: "6px",
                backgroundPosition: 'center',
                height: 400
            }}>
                <div className='h-[400px] bg-black bg-opacity-70 relative'>
                    <div className='absolute top-60 left-8 md:left-36 '>
                        <h1 className='text-5xl text-white font-bold'>Create Your Event</h1>
                        <p className='text-xl mt-2 flex items-center gap-2 text-white'>Home <CiPlay1 className='text-pink-600' /> <span className='text-red-500'>Create your event</span></p>

                    </div>
                </div>

            </div>
            <div className='max-w-screen-xl mx-auto my-6'>
                <h2 className='text-3xl font-semibold '>Let us know about your event</h2>
                <div className='grid grid-cols-5 gap-12 my-8'>
                    <div className='col-span-3 '>
                        <div>
                            <div className="border-b border-gray-900/10 pb-12">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Fiil up this form</h2>
                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-3">
                                        <label className="block text-sm font-medium leading-6 text-gray-900">Event Type</label>
                                        <div className="mt-2">
                                            <select onChange={handleEventType} className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2' name="type" id="">
                                                <option selected disabled>Select event type</option>
                                                <option value="Birthday">Birthday</option>
                                                <option value="Anniversary">Anniversary</option>
                                                <option value="Arts and Culture Festival">Arts and Culture Festival</option>
                                                <option value="Corporate Event">Corporate Event</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label className="block text-sm font-medium leading-6 text-gray-900">Date</label>
                                        <div className="mt-2">
                                            <input onChange={handleInputDate} type="date" name="date" id="last-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2" />

                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label className="block text-sm font-medium leading-6 text-gray-900">Location</label>
                                        <div className="mt-2 relative">
                                            <input onChange={handleInputLocation} id="email" placeholder='Type your event location' name="email" type="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-6" />
                                            <CiLocationOn className='absolute top-2 left-1' />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label className="block text-sm font-medium leading-6 text-gray-900">Total Guests</label>
                                        <div className="mt-2 relative">
                                            <select onChange={handleGuestCount} id="country" name="country" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-5">
                                                <option selected disabled> Select guests count</option>
                                                <option value="1-250">1-250</option>
                                                <option value="1-500">1-500</option>
                                                <option value="1-1000">1-1000</option>
                                            </select>
                                            <CiUser className='absolute top-1.5 left-1' />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label className="block text-sm font-medium leading-6 text-gray-900">Photography and Videography</label>
                                        <div className="mt-2">
                                            <select onChange={handleInputPhotography} className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2' name="" id="">
                                                <option selected disabled>Select</option>
                                                <option value="Photography and Videography">Photography and Videography</option>
                                                <option value="Photography">Photography</option>
                                                <option value="Videography">Videography</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label className="block text-sm font-medium leading-6 text-gray-900">
                                            Catering Services
                                        </label>
                                        <div className="mt-2">
                                            <select onChange={handleCatering} className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2' name="" id="">
                                                <option selected disabled>Select</option>
                                                <option value="yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-6">
                                        <label className="block text-sm font-medium leading-6 text-gray-900">
                                            Any Special Request
                                        </label>
                                        <textarea id="email" rows={6} placeholder='Write here if you have any special request' name="email" type="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-2'>
                        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                            <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Estimated Cost</h5>
                            <div className="flex items-baseline text-gray-900 dark:text-white">
                                <span className="text-3xl font-semibold">$</span>
                                <span className="text-5xl font-extrabold tracking-tight">{guestCount == '1-250' && '499' || guestCount == '1-500' && '799' || guestCount == '1-1000' && '1299' }</span>
                                <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/day</span>
                            </div>
                            <ul role="list" className="space-y-5 my-7">
                                {eventType && <li className="flex items-center">
                                    <FaListAlt/>
                                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">{eventType}</span>
                                </li>}
                                {date && <li className="flex">
                                   <FaCalendarAlt/>
                                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">{date}</span>
                                </li>}
                                {location && <li className="flex">
                                    <IoLocationSharp className='text-xl'/>
                                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">{location}</span>
                                </li>}
                                {guestCount&& <li className="flex decoration-gray-500">
                                   <FaUsers className='text-xl'/>
                                    <span className="text-base font-normal leading-tight text-gray-500 ms-3">{guestCount}</span>
                                </li>}
                               {photography && <li className="flex decoration-gray-500">
                                    <FaCamera/>
                                    <span className="text-base font-normal leading-tight text-gray-500 ms-3">{photography}</span>
                                </li>}
                                {catering == 'yes' && <li className="flex decoration-gray-500">
                                    <TbToolsKitchen2 className='text-xl'/>
                                    <span className="text-base font-normal leading-tight text-gray-500 ms-3">{catering && 'Catering'}</span>
                                </li> }                               
                            </ul>
                            <button onClick={handleBooking} type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Book Now</button>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    );
};

export default CustomEvent;