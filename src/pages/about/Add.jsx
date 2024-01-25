import React from 'react';
import pic1 from '../../assets/about/people.png'
import pic2 from '../../assets/about/schedule.png'
import pic3 from '../../assets/about/speaker-md.png'
import pic4 from '../../assets/about/calander.png'

const Add = () => {
    return (
        <div className='bg-gradient-to-r from-gray-500 to-gray-600 w-full mx-auto'>
            <div className='flex flex-col md:flex-row py-10 justify-center items-center gap-10 text-white'>
                <div className='grid justify-center text-center items-center'>
                <img className='h-24 w-24 mx-auto' src={pic3} alt="" />
                <h2 className='text-4xl font-bold'>7</h2>
                <p className='text-4xl font-bold'>Team Member</p>
                </div>
                <div className='grid justify-center text-center items-center'>
                <img className='h-24 w-24 mx-auto' src={pic4} alt="" />
                <h2 className='text-4xl font-bold'>30+</h2>
                <p className='text-4xl font-bold'>Ideal Event</p>
                </div>
                <div className='grid justify-center text-center items-center'>
                <img className='h-24 w-24 mx-auto' src={pic2} alt="" />
                <h2 className='text-4xl font-bold'>74+</h2>
                <p className='text-4xl font-bold'>New Schedule</p>
                </div>
                <div className='grid justify-center text-center items-center'>
                <img className='h-24 w-24 mx-auto' src={pic1} alt="" />
                <h2 className='text-4xl font-bold'>120+</h2>
                <p className='text-4xl font-bold'>Good Reviews</p>
                </div>
                
            </div>
        </div>
    );
};

export default Add;