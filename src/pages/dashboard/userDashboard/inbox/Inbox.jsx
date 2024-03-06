import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import { FaRocketchat } from "react-icons/fa6";
import { FcApproval } from "react-icons/fc";
import { RxCrossCircled } from "react-icons/rx";
import { MdOutlinePending } from "react-icons/md";
import { Link } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import { FaBell } from "react-icons/fa";
import CustomEventModal from "../../../customEvent/CustomEventModal";





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

  console.log(customEvent);

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

      <div>
        <FaBell onClick={handleShowModal} className="text-2xl text-rose-600" />
      </div>
      <div
        onClick={() => setShowModal(false)}
        className={`fixed inset-0 z-10 w-full h-full ${showModal ? "" : "hidden"
          }`}
      ></div>
      <CustomEventModal showModal={showModal} >
        <div id='wrapper' className='absolute top-12 z-10 right-5 md:right-24' onClick={handleClose}>
          <div className='md:w-[400px]  p-4 md:p-0'>
            <div className='bg-gray-200 h-[400px] bg-opacity-95 border border-rose-400 rounded-md relative'>
              <div className="p-2.5 rounded max-w-md w-full mx-auto">
                <h2 className="text-center flex items-center justify-center gap-1 text-rose-600 font-bold text-xl"><FaBell className="text-xl inline-block text-rose-600" />Notifications</h2>
                <div className="mt-2">
                  {
                    status?.map(event =>
                      <div key={event._id}>
                        <div className="flex items-center" >
                          <div className="w-20">
                            <img src="https://placehold.co/500x500/png" alt="" className="w-10 rounded-full" />
                          </div>
                          <h2>
                            Your request for custom event <span className="font-semibold">{event?.eventType + '-' + event?._id.slice(0, 6)}</span> has been {event.status == 'approved' ? 'approved' : 'rejected'}.
                          </h2>

                        </div>

                        {
                          request && <div className="mt-3">
                            <div className="">
                              {
                                request.status === 'pending'
                                &&
                                <div className="flex items-center">
                                  <div className="w-24">
                                    <img src="https://placehold.co/500x500/png" alt="" className="w-10 rounded-full" />
                                  </div>
                                  Your organizer request is pending. Please wait for admin confirmation.

                                </div>
                              }
                              {
                                request.status === 'accepted'
                                &&
                                <div className="flex items-center">
                                  <div className="w-24">
                                    <img src="https://placehold.co/500x500/png" alt="" className="w-10 rounded-full" />
                                  </div>
                                  <p>Your organizer request has been <span className="">approved</span>, Check your dashboard.</p>
                                </div>


                              }
                              {
                                request.status === 'rejected'
                                &&
                                <div className="flex items-center">
                                  <div className="w-24">
                                    <img src="https://placehold.co/500x500/png" alt="" className="w-10 rounded-full" />
                                  </div>
                                  <p>Your organizer request has been <span className="font-semibold">rejected.</span> Request again with correct information.</p>
                                </div>

                              }
                            </div>

                          </div>
                        }

                      </div>
                    )
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
