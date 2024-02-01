import React from 'react';
import { Form, useForm } from "react-hook-form";
import img from "../../assets/addEvent/white-pastel-pink-balloons-removebg-preview.png"
import { toast } from 'react-hot-toast';

const AddEvent = () => {
    const { register, handleSubmit, reset } = useForm();


    const onSubmit = async (data) => {
      console.log(data)
      // name:data.name,
      if(data){
        reset()
        return toast.success("Event successfully added")
        
      }
      
      
    }

    return (
        <div className="pt-10 p-5 ">
      <h2 className="text-2xl md:text-6xl font-bold text-center uppercase text-rose-700">
        Add Events
      </h2>
      <div className="mt-5 flex">
        <div className='hidden md:flex md:w-1/3  justify-center hover:scale-125'>
            <img src={img} alt="" className='min-h-screen w-[400px] animate-updown ' />
        </div>
        <form className="w-full md:w-2/3 space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <div className=" ">
            <label className="text-2xl font-semibold ">
              <span className=" ">Event Name*</span>
            </label>
            <input
              type="text"
              placeholder="Event name"
              {...register("name", { required: true, maxLength: 100 })}
              className="input input-bordered w-full rounded-lg p-3 border border-black"
              required
            />
          </div>

          <div className="">
            <label className="">
              <span className="text-2xl font-semibold">Event seats*</span>
            </label>
            <input
              type="text"
              placeholder="Event seats"
              {...register("seats", { required: true })}
              className="input input-bordered w-full rounded-lg p-3 border border-black"
              required
            />
          </div>

          <div className="">
            <label className="">
              <span className="text-2xl font-semibold">Event type*</span>
            </label>
            <input
              type="text"
              placeholder="event type"
              {...register("type", { required: true })}
              className="input input-bordered w-full rounded-lg p-3 border border-black"
              required
            />
          </div>

          <div className="">
            <label className="">
              <span className="text-2xl font-semibold">Event Location*</span>
            </label>
            <input
              type="text"
              placeholder="location"
              {...register("location", { required: true })}
              className="input input-bordered w-full rounded-lg p-3 border border-black"
              required
            />
          </div>

          <div className="">
            <label className="">
              <span className="text-2xl font-semibold">Event Date*</span>
            </label>
            <input
              type="date"
              placeholder="date"
              {...register("date", { required: true })}
              className="input input-bordered w-full rounded-lg p-3 border border-black"
              required
            />
          </div>
          <div className="">
            <label className="">
              <span className="text-2xl font-semibold">Speakers*</span>
            </label>
            <input
              type="text"
              placeholder="speakers"
              {...register("speakers", { required: true })}
              className="input input-bordered w-full rounded-lg p-3 border border-black"
              required
            />
          </div>

          <div className="">
            <label className="">
              <span className="text-2xl font-semibold">Sponsor*</span>
            </label>
            <input
              type="text"
              placeholder="Sponsor"
              {...register("Sponsor", { required: true })}
              className="input input-bordered w-full rounded-lg p-3 border border-black"
              required
            />
          </div>
          <div className="">
            <label className="">
              <span className="text-2xl font-semibold">Event Details*</span>
            </label>

            <textarea 
             cols="10" rows="10"
             type="text"
              placeholder="Details"
              {...register("details", { required: true })}
              className="input input-bordered w-full rounded-lg p-3 border border-black"
              required
            ></textarea>
          </div>
          
          
          <div className="flex items-center justify-center ">
            <input
              {...register("image", { required: true })}
              type="file"
              className=" w-full max-w-xs"
            />
          </div>
          <div className=" mt-6">
            <input
              
              type="submit"
              value="POST"
              className="btn text-xl font-semibold bg-gradient-to-r from-rose-700 to-pink-600 text-white hover:bg-slate-800 p-3 w-full rounded-lg hover:cursor-pointer "
            />
          </div>
        </form>
      </div>
    </div>
    );
};

export default AddEvent;