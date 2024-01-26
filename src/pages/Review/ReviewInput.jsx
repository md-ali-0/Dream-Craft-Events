import React from 'react';

const ReviewInput = () => {
    return (
        <div className='bg-gray-100 rounded-lg py-2'>
            <h2 className='text-2xl text-center p-2 font-semibold'>Send us a Review</h2>
            <form
            
            
            className=" grid justify-center space-y-2"
          >
            <div>
              
              <input
                className='p-2 rounded-lg border border-primary'
                name="name"
                required
                type="text"
                placeholder='Name'
              />
            </div>
            <div>
             
              <input
              className='p-2 rounded-lg border border-primary'
                name="occupation"
                required
                type="text"
                placeholder='occupation'
               
              />
            </div>
            <div>
             

              <input
              className='p-2 h-14 rounded-lg border border-primary'
                name="text"
                required
                type="text"
                placeholder='Messege'
                
              />
            </div>

            

            <div className="bg-primary  hover:bg-secondary hover:text-white w-32 mx-auto text-center rounded-lg">
              <input
                className="  cursor-pointer p-2"
                value="Sign up"
                type="submit"
              />
            </div>
          </form>
        </div>
    );
};

export default ReviewInput;