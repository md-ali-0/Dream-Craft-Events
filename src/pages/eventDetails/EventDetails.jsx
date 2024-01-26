import React from 'react';
import { CiCalendarDate, CiPlay1  } from "react-icons/ci";
import { BsDiagram3, BsLightning, BsBookmarkCheck } from "react-icons/bs";
import { VscLocation } from "react-icons/vsc";
import { PiListDashesBold, PiNotebookDuotone } from "react-icons/pi";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { TiTick } from "react-icons/ti";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdPersonAddAlt1 } from "react-icons/md";



const EventDetails = () => {
    return (
        <div>
            <div className='' style={{
                backgroundImage: "url('https://i.ibb.co/VxZZKMK/banner-top.jpg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                borderRadius: "6px",
                backgroundPosition: 'center'
            }}>
                <div className='h-96 bg-black bg-opacity-70 relative'>
                    <div className='absolute top-48 left-8 md:left-36 '>
                        <h1 className='text-5xl text-white font-bold'>Event Details</h1>
                        <p className='text-xl mt-2 flex items-center gap-2 text-white'>Home <CiPlay1 className='text-pink-600'/> <span className='text-red-500'>Event Details</span></p>

                    </div>
                </div>

            </div>

            <div className='grid grid-cols-1 lg:grid-cols-7 mt-24 max-w-screen-xl mx-auto px-4 '>
                <div className='lg:col-span-5'>
                    <div>
                        <img className='w-full lg:w-[95%] h-96 rounded-md' src="https://i.ibb.co/cTQbLD1/event-top.jpg" alt="" />
                        <div className='flex justify-between md:max-w-[780px] lg:max-w-[830px] ml-2 mt-6'>
                            <p className='flex items-center text-sm gap-2'><CiCalendarDate className='text-xl' />January 31, 2024</p>
                            <p className='flex items-center gap-2 text-red-600 font-semibold text-xl'><BsDiagram3 className='text-xl' />500 Seat</p>
                            <p className='flex items-center gap-1 text-sm'><VscLocation className='text-2xl' />Broadw, New York</p>
                        </div>
                        <div className='flex text-sm md:flex-row flex-col gap-4 border-y py-4 my-6 justify-around max-w-[840px]'>
                            <div className='flex gap-3 md:gap-16 lg:gap-24'>
                                <div className='flex gap-3 items-center '>
                                    <PiListDashesBold className='text-red-500 text-xl' />
                                    <div>
                                        <p className='font-semibold'>Event Type</p>
                                        <p>Web Development</p>
                                    </div>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <HiOutlineSpeakerphone className='text-red-500 text-xl' />
                                    <div>
                                        <p className='font-semibold'>Speaker</p>
                                        <p>10 Best Speaker</p>
                                    </div>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <BsLightning className='text-red-500 text-xl' />
                                    <div>
                                        <p className='font-semibold'>Sponsor</p>
                                        <p>Event Lab</p>
                                    </div>
                                </div>
                            </div>


                            <div className='flex flex-col justify-center items-center'>
                                <p>☆☆☆☆☆</p>
                                <p>(260)</p>
                            </div>


                        </div>
                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold max-w-[850px]'>Media Companies Need To Better One Then Educate Advertisers. Better One Then Educate.</h2>
                        <p className='mt-5 text-gray-600 leading-loose max-w-[850px]'>Cras semper, massa vel aliquam luctus, eros odio tempor turpis, ac placerat metus tortor eget magna. Donec mattis posuere pharetra. Donec vestibulum ornare velit ut sollicitudin. Pellentesque in faucibus purus.Nulla nisl tellus, hendrerit nec dignissim pellentesque, posuere in est. Suspendisse bibendum vestibulum elit eu placerat. In ut ipsum in odio euismod tincidunt non lacinia nunc. Donec ligula augue, mattis eu varius ac.</p>
                    </div>
                    <div className='mt-8 grid gap-8 md:gap-6 lg:gap-0 max-w-[840px] lg:grid-cols-2 items-center'>
                        <div>
                            <h2 className='text-2xl font-semibold'>Overview</h2>
                            <ul className='space-y-4 mt-5 text-lg font-medium'>
                                <li className='flex items-center gap-2'><TiTick className='text-2xl' /> You Got Full Free Certificate.</li>
                                <li className='flex items-center gap-2'><TiTick className='text-2xl' />Unlimited Coffe & Tea When U Boring.</li>
                                <li className='flex items-center gap-2'><TiTick className='text-2xl' />Etiam Dictum, Dui Sit Amet Venenatis.</li>
                                <li className='flex items-center gap-2'><TiTick className='text-2xl' />Class Aptent Taciti Sociosqu Ad Litora.</li>
                                <li className='flex items-center gap-2'><TiTick className='text-2xl' />Lunch Suspendisse In Commodo Feli.</li>
                            </ul>
                        </div>
                        <div className='flex gap-8'>
                            <img className='w-[38%] md:w-[48%] rounded-tr-md rounded-bl-md h-52' src="https://i.ibb.co/mGZ71df/pexels-rdne-stock-project-7648306.jpg" alt="" />
                            <img className='w-[38%] md:w-[48%] rounded-tl-md rounded-br-md h-52' src="https://i.ibb.co/9qNw5xs/leadership.jpg" alt="" />

                        </div>

                    </div>
                    <p className='mt-8 text-gray-600 max-w-[850px]'>Cras semper, massa vel aliquam luctus, eros odio tempor turpis, ac placerat metus tortor eget magna. Donec mattis posuere pharetra. Donec vestibulum ornare velit ut sollicitudin. Pellentesque in faucibus purus.Nulla nisl tellus, hendrerit nec dignissim pellentesque.</p>

                    <h2 className='text-2xl font-semibold my-8'>Main Speakers</h2>

                    <div className='grid md:grid-cols-2 gap-6 md:gap-0 mb-8'>
                        <div className='space-y-10'>
                            <div className='flex items-center gap-4'>
                                <img className='w-28 h-28 rounded-full' src="https://i.ibb.co/qD9p7Fg/IMG-20220514-211757-02.jpg" alt="" />
                                <div>
                                    <h2 className='text-xl font-semibold'>Rakibul Hasan</h2>
                                    <h3 className='text-md font-medium'>Web Dev</h3>
                                    <div className='flex gap-3 mt-3'>
                                        <p className='border-2 border-gray-500 rounded-full p-1'><RiFacebookFill className='text-md' /></p>
                                        <p className='border-2 border-gray-500 rounded-full p-1'><FaInstagram className='text-md' /></p>
                                        <p className='border-2 border-gray-500 rounded-full p-1'><FaLinkedinIn className='text-md' /></p>
                                        <p className='border-2 border-gray-500 rounded-full p-1'><FaTwitter className='text-md' /></p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img className='w-28 h-28 rounded-full' src="https://i.ibb.co/qD9p7Fg/IMG-20220514-211757-02.jpg" alt="" />
                                <div>
                                    <h2 className='text-xl font-semibold'>Rakibul Hasan</h2>
                                    <h3 className='text-md font-medium'>Web Dev</h3>
                                    <div className='flex gap-3 mt-3'>
                                        <p className='border-2 border-gray-500 rounded-full p-1'><RiFacebookFill className='text-md' /></p>
                                        <p className='border-2 border-gray-500 rounded-full p-1'><FaInstagram className='text-md' /></p>
                                        <p className='border-2 border-gray-500 rounded-full p-1'><FaLinkedinIn className='text-md' /></p>
                                        <p className='border-2 border-gray-500 rounded-full p-1'><FaTwitter className='text-md' /></p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img className='w-28 h-28 rounded-full' src="https://i.ibb.co/qD9p7Fg/IMG-20220514-211757-02.jpg" alt="" />
                                <div>
                                    <h2 className='text-xl font-semibold'>Rakibul Hasan</h2>
                                    <h3 className='text-md font-medium'>Web Dev</h3>
                                    <div className='flex gap-3 mt-3'>
                                        <p className='border-2 border-gray-500 rounded-full p-1'><RiFacebookFill className='text-md' /></p>
                                        <p className='border-2 border-gray-500 rounded-full p-1'><FaInstagram className='text-md' /></p>
                                        <p className='border-2 border-gray-500 rounded-full p-1'><FaLinkedinIn className='text-md' /></p>
                                        <p className='border-2 border-gray-500 rounded-full p-1'><FaTwitter className='text-md' /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-10'>
                            <div className='flex items-center gap-4'>
                                <img className='w-28 h-28 rounded-full' src="https://i.ibb.co/qD9p7Fg/IMG-20220514-211757-02.jpg" alt="" />
                                <div>
                                    <h2 className='text-xl font-semibold'>Rakibul Hasan</h2>
                                    <h3 className='text-md font-medium'>Web Dev</h3>
                                    <div className='flex gap-3 mt-3'>
                                        <p className='border-2 border-gray-500 rounded-full p-1'><RiFacebookFill className='text-md' /></p>
                                        <p className='border-2 border-gray-500 rounded-full p-1'><FaInstagram className='text-md' /></p>
                                        <p className='border-2 border-gray-500 rounded-full p-1'><FaLinkedinIn className='text-md' /></p>
                                        <p className='border-2 border-gray-500 rounded-full p-1'><FaTwitter className='text-md' /></p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img className='w-28 h-28 rounded-full' src="https://i.ibb.co/qD9p7Fg/IMG-20220514-211757-02.jpg" alt="" />
                                <div>
                                    <h2 className='text-xl font-semibold'>Rakibul Hasan</h2>
                                    <h3 className='text-md font-medium'>Web Dev</h3>
                                    <div className='flex gap-3 mt-3'>
                                        <p className='border-2 border-gray-500 rounded-full p-1'><RiFacebookFill className='text-md' /></p>
                                        <p className='border-2 border-gray-500 rounded-full p-1'><FaInstagram className='text-md' /></p>
                                        <p className='border-2 border-gray-500 rounded-full p-1'><FaLinkedinIn className='text-md' /></p>
                                        <p className='border-2 border-gray-500 rounded-full p-1'><FaTwitter className='text-md' /></p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img className='w-28 h-28 rounded-full' src="https://i.ibb.co/qD9p7Fg/IMG-20220514-211757-02.jpg" alt="" />
                                <div>
                                    <h2 className='text-xl font-semibold'>Rakibul Hasan</h2>
                                    <h3 className='text-md font-medium'>Web Dev</h3>
                                    <div className='flex gap-3 mt-3'>
                                        <p className='border-2 border-gray-500 rounded-full p-1'><RiFacebookFill className='text-md' /></p>
                                        <p className='border-2 border-gray-500 rounded-full p-1'><FaInstagram className='text-md' /></p>
                                        <p className='border-2 border-gray-500 rounded-full p-1'><FaLinkedinIn className='text-md' /></p>
                                        <p className='border-2 border-gray-500 rounded-full p-1'><FaTwitter className='text-md' /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div>
                    <div className='bg-base-200 py-5 lg:w-96 mt-8 lg:mt-0'>
                        <h2 className='bg-pink-700 px-4 py-2 text-2xl w-60 text-center text-white rounded-r-md flex items-center gap-2'><BsBookmarkCheck />Book This Event</h2>

                        <div>
                            <form action="" className='lg:pl-7 px-4 pt-4 space-y-4'>
                                <input type="text" placeholder='Your full name' className='lg:w-80 w-full p-2 rounded-md border-2 outline-pink-500' />
                                <input type="text" placeholder='Your email' className='lg:w-80 w-full p-2 rounded-md border-2 outline-pink-500' />
                                <input type="text" placeholder='Phone' className='lg:w-80 w-full p-2 rounded-md border-2 outline-pink-500' />
                                <select type="text" className='lg:w-80 w-full p-2 rounded-md border-2 outline-pink-500' >
                                    <option value="" selected disabled>Quantity</option>
                                    <option value="One">One</option>
                                    <option value="Two">Two</option>
                                    <option value="Three">Three</option>
                                </select>
                                <input type="text" placeholder='Your location' className='lg:w-80 w-full p-2 rounded-md border-2 outline-pink-500' />
                                <button type='submit' className='bg-pink-700 lg:w-80 w-full text-center text-xl font-semibold text-white py-2 rounded-md'>Submit Now</button>
                            </form>
                        </div>
                    </div>
                    <div className='bg-base-200 py-5 lg:w-96 mt-8 lg:mt-10'>
                        <h2 className='bg-pink-700 px-4 py-2 text-2xl w-60 text-center text-white rounded-r-md flex items-center gap-2'><PiNotebookDuotone className='text-3xl' />Recent Event</h2>

                        <div className='lg:pl-5 px-4 pt-4 mt-3 space-y-5'>
                            <div className='flex gap-4 items-center'>
                                <img className='w-40 h-28 rounded-md' src="https://i.ibb.co/qD9p7Fg/IMG-20220514-211757-02.jpg" alt="" />
                                <div className=''>
                                    <h3 className='text-sm font-semibold'>Donec Risus Dui, Suscipit Iand Tempor Lacinia Vehicula.</h3>
                                    <div className='flex justify-between my-3'>
                                        <p className='flex items-center text-sm gap-2'><CiCalendarDate className='text-sm' />January 30, 2024</p>
                                        <p className='flex items-center gap-2 text-sm text-red-600 font-semibold '><BsDiagram3 className='text-sm' />500 Seat</p>
                                    </div>
                                    <button className='text-sm text-red-600 underline'>Book Now</button>
                                </div>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <img className='w-40 h-28 rounded-md' src="https://i.ibb.co/qD9p7Fg/IMG-20220514-211757-02.jpg" alt="" />
                                <div className=''>
                                    <h3 className='text-sm font-semibold'>Donec Risus Dui, Suscipit Iand Tempor Lacinia Vehicula.</h3>
                                    <div className='flex justify-between my-3'>
                                        <p className='flex items-center text-sm gap-2'><CiCalendarDate className='text-sm' />January 26, 2024</p>
                                        <p className='flex items-center gap-2 text-sm text-red-600 font-semibold '><BsDiagram3 className='text-sm' />500 Seat</p>
                                    </div>
                                    <button className='text-sm text-red-600 underline'>Book Now</button>
                                </div>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <img className='w-40 h-28 rounded-md' src="https://i.ibb.co/qD9p7Fg/IMG-20220514-211757-02.jpg" alt="" />
                                <div className=''>
                                    <h3 className='text-sm font-semibold'>Donec Risus Dui, Suscipit Iand Tempor Lacinia Vehicula.</h3>
                                    <div className='flex justify-between my-3'>
                                        <p className='flex items-center text-sm gap-2'><CiCalendarDate className='text-sm' />February 21, 2024</p>
                                        <p className='flex items-center gap-2 text-sm text-red-600 font-semibold '><BsDiagram3 className='text-sm' />500 Seat</p>
                                    </div>
                                    <button className='text-sm text-red-600 underline'>Book Now</button>
                                </div>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <img className='w-40 h-28 rounded-md' src="https://i.ibb.co/qD9p7Fg/IMG-20220514-211757-02.jpg" alt="" />
                                <div className=''>
                                    <h3 className='text-sm font-semibold'>Donec Risus Dui, Suscipit Iand Tempor Lacinia Vehicula.</h3>
                                    <div className='flex justify-between my-3'>
                                        <p className='flex items-center text-sm gap-2'><CiCalendarDate className='text-sm' />February 28, 2024</p>
                                        <p className='flex items-center gap-2 text-sm text-red-600 font-semibold '><BsDiagram3 className='text-sm' />500 Seat</p>
                                    </div>
                                    <button className='text-sm text-red-600 underline'>Book Now</button>
                                </div>
                            </div>

                        </div>
                        <div className='grid md:grid-cols-2 lg:grid-cols-1'>
                            <div className='bg-base-200 py-5 lg:w-96 mt-8 lg:mt-10'>
                                <h2 className='bg-pink-700 px-4 py-2 text-2xl w-72 text-center text-white rounded-r-md flex items-center gap-2'><MdPersonAddAlt1 className='text-3xl' />Event Organized By</h2>
                                <div className='ml-32 mt-6'>
                                    <img className='w-40 h-32 rounded-md' src="https://i.ibb.co/qD9p7Fg/IMG-20220514-211757-02.jpg" alt="" />
                                    <div className='mt-5 '>
                                        <h2 className='text-2xl font-semibold'>Rakibul Hasan</h2>
                                        <h3 className='ml-16 text-lg'>CEO</h3>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-8 px-2'>
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