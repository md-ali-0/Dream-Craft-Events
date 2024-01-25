import React from 'react';
import { CiCalendarDate } from "react-icons/ci";
import { BsDiagram3, BsLightning } from "react-icons/bs";
import { VscLocation } from "react-icons/vsc";
import { PiListDashesBold } from "react-icons/pi";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { TiTick} from "react-icons/ti";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";









const EventDetails = () => {
    return (
        <div>
            <div className='' style={{
                backgroundImage: "url('https://i.ibb.co/YbNwSg0/birthday.jpg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                borderRadius: "6px",
            }}>
                <div className='h-96 bg-black bg-opacity-70 relative'>
                    <div className='absolute top-48 left-8 md:left-36 '>
                        <h1 className='text-5xl text-white font-bold'>Event Details</h1>
                        <p className='text-xl text-white'>Home : <span className='text-red-500'>Event Details</span></p>

                    </div>
                </div>

            </div>

            <div className='grid grid-cols-1 lg:grid-cols-7 mt-24 max-w-screen-xl mx-auto px-4 '>
                <div className='lg:col-span-5'>
                    <div>
                        <img className='w-full lg:w-[95%] h-96 rounded-md' src="https://i.ibb.co/9qNw5xs/leadership.jpg" alt="" />
                        <div className='flex justify-between md:max-w-[680px] lg:max-w-[830px] ml-2 mt-6'>
                            <p className='flex items-center text-sm gap-2'><CiCalendarDate className='text-xl' />January 21, 2021</p>
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
                    <div className='mt-8 grid gap-8 lg:grid-cols-2 items-center'>
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
                            <img className='w-[38%] rounded-tr-md rounded-bl-md h-52' src="https://i.ibb.co/9qNw5xs/leadership.jpg" alt="" />
                            <img className='w-[38%] rounded-tl-md rounded-br-md h-52' src="https://i.ibb.co/9qNw5xs/leadership.jpg" alt="" />

                        </div>

                    </div>
                    <p className='mt-8 text-gray-600 max-w-[850px]'>Cras semper, massa vel aliquam luctus, eros odio tempor turpis, ac placerat metus tortor eget magna. Donec mattis posuere pharetra. Donec vestibulum ornare velit ut sollicitudin. Pellentesque in faucibus purus.Nulla nisl tellus, hendrerit nec dignissim pellentesque.</p>
                    
                    <h2 className='text-2xl font-semibold my-8'>Main Speakers</h2>

                    <div className='grid md:grid-cols-2 gap-6 md:gap-0'>
                        <div className='space-y-10'>
                            <div className='flex items-center gap-4'>
                                <img className='w-28 h-28 rounded-full' src="https://i.ibb.co/qD9p7Fg/IMG-20220514-211757-02.jpg" alt="" />
                                <div>
                                    <h2 className='text-xl font-semibold'>Rakibul Hasan</h2>
                                    <h3 className='text-md font-medium'>Web Dev</h3>
                                    <div className='flex gap-3 mt-3'>
                                        <p className='border-2 border-gray-500 rounded-full p-1'><RiFacebookFill className='text-md'/></p>
                                        <p className='border-2 border-gray-500 rounded-full p-1'><FaInstagram className='text-md'/></p>
                                        <p className='border-2 border-gray-500 rounded-full p-1'><FaLinkedinIn className='text-md'/></p>
                                        <p className='border-2 border-gray-500 rounded-full p-1'><FaTwitter className='text-md'/></p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img className='w-28 h-28 rounded-full' src="https://i.ibb.co/qD9p7Fg/IMG-20220514-211757-02.jpg" alt="" />
                                <div>
                                    <h2 className='text-xl font-semibold'>Rakibul Hasan</h2>
                                    <h3 className='text-md font-medium'>Web Dev</h3>
                                    <div className='flex gap-3 mt-3'>
                                        <p className='border-2 border-gray-500 rounded-full p-1'><RiFacebookFill className='text-md'/></p>
                                        <p className='border-2 border-gray-500 rounded-full p-1'><FaInstagram className='text-md'/></p>
                                        <p className='border-2 border-gray-500 rounded-full p-1'><FaLinkedinIn className='text-md'/></p>
                                        <p className='border-2 border-gray-500 rounded-full p-1'><FaTwitter className='text-md'/></p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img className='w-28 h-28 rounded-full' src="https://i.ibb.co/qD9p7Fg/IMG-20220514-211757-02.jpg" alt="" />
                                <div>
                                    <h2 className='text-xl font-semibold'>Rakibul Hasan</h2>
                                    <h3 className='text-md font-medium'>Web Dev</h3>
                                    <div className='flex gap-3 mt-3'>
                                        <p className='border-2 border-gray-500 rounded-full p-1'><RiFacebookFill className='text-md'/></p>
                                        <p className='border-2 border-gray-500 rounded-full p-1'><FaInstagram className='text-md'/></p>
                                        <p className='border-2 border-gray-500 rounded-full p-1'><FaLinkedinIn className='text-md'/></p>
                                        <p className='border-2 border-gray-500 rounded-full p-1'><FaTwitter className='text-md'/></p>
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
                                        <p className='border-2 border-gray-500 rounded-full p-1'><RiFacebookFill className='text-md'/></p>
                                        <p className='border-2 border-gray-500 rounded-full p-1'><FaInstagram className='text-md'/></p>
                                        <p className='border-2 border-gray-500 rounded-full p-1'><FaLinkedinIn className='text-md'/></p>
                                        <p className='border-2 border-gray-500 rounded-full p-1'><FaTwitter className='text-md'/></p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img className='w-28 h-28 rounded-full' src="https://i.ibb.co/qD9p7Fg/IMG-20220514-211757-02.jpg" alt="" />
                                <div>
                                    <h2 className='text-xl font-semibold'>Rakibul Hasan</h2>
                                    <h3 className='text-md font-medium'>Web Dev</h3>
                                    <div className='flex gap-3 mt-3'>
                                        <p className='border-2 border-gray-500 rounded-full p-1'><RiFacebookFill className='text-md'/></p>
                                        <p className='border-2 border-gray-500 rounded-full p-1'><FaInstagram className='text-md'/></p>
                                        <p className='border-2 border-gray-500 rounded-full p-1'><FaLinkedinIn className='text-md'/></p>
                                        <p className='border-2 border-gray-500 rounded-full p-1'><FaTwitter className='text-md'/></p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img className='w-28 h-28 rounded-full' src="https://i.ibb.co/qD9p7Fg/IMG-20220514-211757-02.jpg" alt="" />
                                <div>
                                    <h2 className='text-xl font-semibold'>Rakibul Hasan</h2>
                                    <h3 className='text-md font-medium'>Web Dev</h3>
                                    <div className='flex gap-3 mt-3'>
                                        <p className='border-2 border-gray-500 rounded-full p-1'><RiFacebookFill className='text-md'/></p>
                                        <p className='border-2 border-gray-500 rounded-full p-1'><FaInstagram className='text-md'/></p>
                                        <p className='border-2 border-gray-500 rounded-full p-1'><FaLinkedinIn className='text-md'/></p>
                                        <p className='border-2 border-gray-500 rounded-full p-1'><FaTwitter className='text-md'/></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div>
                    <h2>Hello</h2>
                </div>
            </div>


        </div>
    );
};

export default EventDetails;