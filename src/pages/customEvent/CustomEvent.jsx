import { useState } from 'react';
import { CiLocationOn, CiUser, CiPlay1 } from 'react-icons/ci';
import { FaListAlt, FaCalendarAlt, FaUsers, FaCamera } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { TbToolsKitchen2 } from "react-icons/tb";
import Swal from 'sweetalert2';
import CustomEventModal from './CustomEventModal';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const CustomEvent = () => {

    const [eventType, setEventType] = useState('')
    const [date, setDate] = useState('')
    const [location, setEventLocation] = useState('')
    const [guestCount, setEventGuestCount] = useState('Select guests count')
    const [photography, setPhotography] = useState('select')
    const [catering, setCatering] = useState('')
    const [specialRequest, setSpecialRequest] = useState('')
    const [showModal, setShowModal] = useState(false)
    const navigate = useNavigate(); // Initialize useNavigate hook


    const axios = useAxiosPublic()
    const { user } = useAuth()

    // const { register, handleSubmit, reset, formState: { errors } } = useForm()

    let totalCost = 0;

    if (guestCount == '1-250') {
        totalCost = + 450
    } else if
        (guestCount == '1-500') {
        totalCost = + 850
    }
    else if
        (guestCount == '1-1000') {
        totalCost = + 1150
    }


    if (photography == 'Photography and Videography') {
        totalCost = totalCost + 200
    } else if
        (photography == 'Photography') {
        totalCost = totalCost + 100
    } else if
        (photography == 'Videography') {
        totalCost = totalCost + 150
    }

    if (catering == 'yes') {
        totalCost = totalCost + 300;

    }



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
    const handleSpecialRequest = (e) => {
        setSpecialRequest(e.target.value)
    }



    const handleShowModal = () => {
        setShowModal(!showModal)
    }
    const handleClose = (e) => {
        if (e.target.id == 'wrapper') {
            handleShowModal()
        }

    }

    const handleBooking = async (e) => {
        e.preventDefault()
        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const fullName = firstName + " " + lastName;
        const email = e.target?.email.value;
        const phone = e.target.phone.value;

        const CustomEventData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            fullName: fullName,
            phone: phone,
            eventType: eventType,
            date: date,
            location: location,
            guests: guestCount,
            photography: photography,
            catering: catering,
            request: specialRequest,
            cost: totalCost,
            status: 'pending',
            seen: false
        }

        //console.log(CustomEventData)

        const response = await axios.post('/custom-event', CustomEventData)
        //console.log(response);


        Swal.fire({
            title: "Request placed succesfully!",
            text: "You have requested an event, we will get back to you soon.",
            icon: "success",
            confirmButtonText: "Ok",
        }).then((result) => {
            if (result.isConfirmed) {
                setShowModal(!showModal);
                navigate('/dashboard/customEvent'); // Directly navigate to the home page
            }
        });

        setShowModal(!showModal)
        // window.location.reload()

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
                        <h1 className='text-5xl  text-white font-bold'>Create Your Event</h1>
                        <p className='text-xl mt-2 flex items-center gap-2 text-white'>Home <CiPlay1 className='text-pink-600' /> <span className='text-red-500'>Create your event</span></p>

                    </div>
                </div>

            </div>
            <div className='max-w-screen-xl mx-auto my-6'>
                <h2 className='text-3xl font-semibold '>Let us know about your event</h2>
                <div className='grid md:grid-cols-5 p-2 gap-12 my-8'>
                    <div className='col-span-3 '>
                        <div>
                            <div className="border rounded-lg bg-rose-50/50 border-gray-400 p-4">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Fiil up this form</h2>
                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-3">
                                        <label className="block text-sm font-medium leading-6 text-gray-900">Event Type</label>
                                        <div className="mt-2">
                                            <select onChange={handleEventType} className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2' name="type" id="">
                                                <option selected disabled>Select event type</option>
                                                <option value="Wedding">Wedding</option>
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
                                            <input onChange={handleInputDate} type="date" name="date" id="last-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2" />

                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label className="block text-sm font-medium leading-6 text-gray-900">Location</label>
                                        <div className="mt-2 relative">
                                            <input onChange={handleInputLocation} id="location" placeholder='Type your event location' name="location" type="location" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-6" />
                                            <CiLocationOn className='absolute top-2 left-1' />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label className="block text-sm font-medium leading-6 text-gray-900">Total Guests</label>
                                        <div className="mt-2 relative">
                                            <select onChange={handleGuestCount} id="country" name="country" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-5">
                                                <option selected value="Select guests count"> Select guests count</option>
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
                                            <select onChange={handleInputPhotography} className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2' name="" id="">
                                                <option selected value="select">Select</option>
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
                                            <select onChange={handleCatering} className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2' name="" id="">
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
                                        <textarea onChange={handleSpecialRequest} id="request" rows={6} placeholder='Write here if you have any special request' name="request" type="request" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='md:col-span-2 col-span-3 p-4 md:p-0 bg-rose-50/50  rounded-lg border-gray-400 border'>
                        <div className="w-full  rounded-lg  sm:p-12 ">
                            <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Estimated Cost</h5>
                            <div className="flex items-baseline text-gray-900 dark:text-white">
                                <span className="text-3xl font-semibold">$</span>
                                <span className="text-5xl font-extrabold tracking-tight">{totalCost}</span>
                                <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/day</span>
                            </div>
                            <ul role="list" className="space-y-5 my-7">
                                {eventType && <li className="flex items-center rounded-md">
                                    <FaListAlt className='text-rose-700' />
                                    <span className="text-lg font-normal leading-tight  ms-3">{eventType}</span>
                                </li>}
                                {date && <li className="flex items-center rounded-md">
                                    <FaCalendarAlt className='text-rose-700' />
                                    <span className="text-base font-normal leading-tight  ms-3">{date}</span>
                                </li>}
                                {location && <li className="flex items-center rounded-md">
                                    <IoLocationSharp className='text-xl text-rose-700' />
                                    <span className="text-base font-normal leading-tight  ms-3">{location}</span>
                                </li>}
                                {guestCount == 'Select guests count' ? '' : <li className="flex items-center rounded-md ">
                                    <FaUsers className='text-xl text-rose-700' />
                                    <span className="text-base font-normal leading-tight  ms-3">{guestCount}</span>
                                </li>}
                                {photography == 'select' ? '' : <li className="flex items-center rounded-md">
                                    <FaCamera className='text-rose-700' />
                                    <span className="text-base font-normal leading-tight  ms-3">{photography}</span>
                                </li>}
                                {catering == 'yes' && <li className="flex items-center rounded-md">
                                    <TbToolsKitchen2 className='text-xl text-rose-700' />
                                    <span className="text-base font-normal leading-tight  ms-3">{catering && 'Catering'}</span>
                                </li>}
                            </ul>
                            {
                                user ? (
                                    totalCost > 0 ? <button onClick={handleShowModal} type="button" className='bg-rose-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 text-white font-medium rounded-lg  px-5 py-2.5 inline-flex justify-center w-full text-xl text-center'>Request Now</button> :
                                        <button disabled type="button" className=' bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 text-white font-medium rounded-lg  px-5 py-2.5 inline-flex justify-center w-full text-xl text-center'>Request Now</button>
                                ) : <Link to='/login'>
                                    <button type="button" className='bg-rose-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 text-white font-medium rounded-lg  px-5 py-2.5 inline-flex justify-center w-full text-xl text-center'>Login to Request</button>
                                </Link>

                            }
                        </div>


                    </div>

                </div>

            </div>
            <CustomEventModal showModal={showModal} >
                <div id='wrapper' className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' onClick={handleClose}>
                    <div className='w-[550px] p-4 md:p-0'>
                        <div className='bg-white rounded-md relative'>
                            <div className="p-8  rounded max-w-md w-full mx-auto">
                                <h2 className="text-2xl font-semibold mb-8">Please drop your information</h2>

                                <form onSubmit={handleBooking}>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">First Name</label>
                                            <input type="text" id="firstName" name="firstName" className="mt-1 p-2 bg-rose-100 placeholder:text-sm w-full border border-gray-300 rounded-md" placeholder='write your first name' required />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Last Name</label>
                                            <input type="text" id="lastName" name="lastName" className="mt-1 p-2 bg-rose-100 placeholder:text-sm w-full border border-gray-300  rounded-md" placeholder='write your last name' required />
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <label className="block text-sm font-medium text-gray-700">Email</label>
                                        <input type="email" id="email" name="email" defaultValue={user?.email} className="mt-1 p-2 w-full border bg-rose-100 border-gray-300 placeholder:text-sm rounded-md" placeholder='write your email' required disabled />
                                    </div>


                                    <div className="mt-4">
                                        <label className="block text-sm font-medium text-gray-700">Phone</label>
                                        <input type="text" id="password" name="phone" className="mt-1 p-2 bg-rose-100 w-full border border-gray-300 placeholder:text-sm rounded-md" placeholder='write your phone' required />
                                    </div>


                                    <div className="mt-6">
                                        <button type="submit" className="w-full p-3 bg-rose-600 text-white rounded-md hover:bg-rose-700">Submit</button>
                                    </div>
                                </form>
                            </div>
                            <div className='bg-rose-600 text-white p-2 absolute top-4 right-4 rounded-full w-8 h-8 flex justify-center items-center'>
                                <button onClick={handleShowModal}>X</button>
                            </div>
                        </div>
                    </div>
                </div>

            </CustomEventModal>
        </div>
    );
};

export default CustomEvent;