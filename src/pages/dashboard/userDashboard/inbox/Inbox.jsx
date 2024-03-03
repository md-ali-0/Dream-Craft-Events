import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import { FaRocketchat } from "react-icons/fa6";
import { FcApproval } from "react-icons/fc";
import { RxCrossCircled } from "react-icons/rx";
import { MdOutlinePending } from "react-icons/md";
import { Link } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";





const Inbox = () => {
  const axios = useAxiosPublic()
  const [status, setStatus] = useState()
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
    if (result) {
      refetch()
    }


  }, [customEvent, refetch])


  // for organizer request
  const { data: request = [] } = useQuery({
    queryKey: ['request'],
    queryFn: async () => {
      const res = await axios.get(`/single-request?email=${user?.email}`)
      return res.data;
    }
  })

  return (
    <div>
      <h2 className="text-center text-primary text-2xl font-semibold my-5">My Inbox<FaRocketchat className="text-3xl ml-2 inline-block" /> </h2>
      <div className="border border-primary rounded-md">
        {
          status?.map(event =>
            <div className="p-8 flex justify-between items-center" key={event._id}>
              <div className="flex gap-4 items-center">
                <FaRocketchat className="text-3xl" />
                <p>Your request for custom event <span className="font-semibold">{event?.eventType + '-' + event?._id.slice(0, 6)}</span> has been {event.status == 'approved' ? 'approved' : 'rejected'}, to check the the details click <Link className="text-primary font-semibold" to='/dashboard/customEvent'>here</Link> </p>
              </div>
              {
                event.status == 'approved' ? <FcApproval className="text-3xl" /> : <RxCrossCircled className="text-3xl text-red-500" />
              }


            </div>)
        }

        {/* message for organizer request */}
        {
          request && <div className="">
            <div className="p-8">
              {
                request.status === 'pending'
                &&
                <div className="flex gap-4 items-center">
                  <FaRocketchat className="text-3xl" />
                  Your organizer request is pending. Please wait for admin confirmation.
                  <MdOutlinePending className="text-3xl" />
                </div>
              }
              {
                request.status === 'accepted'
                &&
                <div className="flex gap-4 items-center justify-between">
                  <div className="flex gap-3 items-center">
                    <FaRocketchat className="text-3xl" />
                    <p>Your organizer request has been approved, Check your dashboard.</p>
                  </div>
                  <FcApproval className="text-3xl" />
                </div>
              }
              {
                request.status === 'rejected'
                &&
                <div className="flex gap-4 items-center justify-between">
                  <div className="flex gap-3 items-center">
                    <FaRocketchat className="text-3xl" />
                    <p>Your organizer request has been rejected. Request again with correct information.</p>
                  </div>
                  <RxCrossCircled className="text-3xl text-red-500" />
                </div>
              }
            </div>

          </div>
        }

      </div>


    </div>
  );
};

export default Inbox;
