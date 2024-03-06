import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import CustomEventModal from "../../../customEvent/CustomEventModal";
import bell from '/bell.gif'
import { FaBell } from "react-icons/fa";



const Inbox = () => {
  const axios = useAxiosPublic()
  const [status, setStatus] = useState()
  const [showModal, setShowModal] = useState(false)
  const { user } = useAuth()

  const { data: customEvent = [], refetch } = useQuery({
    queryKey: ['customEvent',],
    queryFn: async () => {
      const res = await axios.get(`/custom-event/inbox?email=${user?.email}`)
      return res.data;
    }
  })

  // console.log(customEvent);

  useEffect(() => {
    const result = customEvent?.filter(event => event.status == 'rejected' || event.status == 'approved')
    setStatus(result);
 
  }, [customEvent, refetch])


  // for organizer request
  const { data: request = [] } = useQuery({
    queryKey: ['request'],
    queryFn: async () => {
      const res = await axios.get(`/single-request?email=${user?.email}`)
      return res.data;
    }
  })

  const handleShowModal = () => {
    setShowModal(!showModal)
  }
  const handleClose = (e) => {
    if (e.target.id == 'wrapper') {
      handleShowModal()
    }

  }

    
  return (
    <>

      <div className="relative">     
        <button onClick={handleShowModal}><FaBell className="text-3xl"/></button>
        <span className="absolute -top-2 -right-3 text-rose-700 font-bold">+1</span>
      </div>

      <div
        onClick={() => setShowModal(false)}
        className={`fixed inset-0 z-10 w-full h-full ${showModal ? "" : "hidden"
          }`}
      ></div>
      <CustomEventModal showModal={showModal} >
        <div id='wrapper' className='absolute  top-12 z-10 text-sm right-5 md:right-28' onClick={handleClose}>
          <div className='md:w-[400px]  p-4 md:p-0'>
            <div className='bg-slate-200 h-[400px] border border-rose-400 rounded-md relative'>
              <div className="p-2.5 rounded max-w-md w-full mx-auto">
                <h2 className="gap-1 inline-block px-3 rounded-2xl bg-gray-300 text-rose-600 font-bold text-lg">Notifications</h2>
                <div className="mt-3">
                  {
                    status?.map(event =>
                      <div key={event._id}>
                        <div className="flex border-b py-3 gap-4 border-rose-400 items-center" >
                          <div className="">
                            <h2 className="w-10 h-10 rounded-full flex justify-center items-center text-white font-bold bg-rose-600">DC</h2>
                          </div>
                          <h2>
                            Your request for custom event <span className="font-semibold">{event?.eventType + '-' + event?._id.slice(0, 6)}</span> has been {event.status == 'approved' ? 'approved' : 'rejected'}.
                          </h2>

                        </div>



                      </div>
                    )
                  }

                  {
                    request && <div className="mt-3 border-b pb-3 border-rose-400">
                      <div className="">
                        {
                          request.status === 'pending'
                          &&
                          <div className="flex gap-4 items-center">
                            <div className="">
                              <h2 className="w-10 h-10 rounded-full flex justify-center items-center text-white font-bold bg-rose-600">DC</h2>
                            </div>
                            Your organizer request is pending. Please wait for admin confirmation.

                          </div>
                        }
                        {
                          request.status === 'accepted'
                          &&
                          <div className="flex gap-4 items-center">
                            <div className="">
                              <h2 className="w-10 h-10 rounded-full flex justify-center items-center text-white font-bold bg-rose-600">DC</h2>
                            </div>
                            <p>Your organizer request has been <span className="">approved</span>, Check your dashboard.</p>
                          </div>


                        }
                        {
                          request.status === 'rejected'
                          &&
                          <div className="flex gap-4 items-center">
                            <div className="">
                              <h2 className="w-10 h-10 rounded-full flex justify-center items-center text-white font-bold bg-rose-600">DC</h2>
                            </div>
                            <p>Your organizer request has been <span className="font-semibold">rejected.</span> Request again with correct information.</p>
                          </div>

                        }
                      </div>

                    </div>
                  }

                </div>

              </div>

            </div>
          </div>
        </div>

      </CustomEventModal>
    </>
  );
};

export default Inbox;
