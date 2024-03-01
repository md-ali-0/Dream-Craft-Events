import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import { FaRocketchat } from "react-icons/fa6";
import { FcApproval } from "react-icons/fc";
import { RxCrossCircled } from "react-icons/rx";
import { Link } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";




const Inbox = () => {
  const axios = useAxiosPublic()
  const [status, setStatus] = useState()
  const {user} = useAuth()
  const email = user?.email

  const { data: customEvent = [], refetch } = useQuery({
    queryKey: ['customEvent',],
    queryFn: async () => {
      const res = await axios.get(`/custom-event`)
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


  return (
    <div>
      <h2 className="text-center text-primary text-2xl font-semibold my-5">My Inbox<FaRocketchat className="text-3xl ml-2 inline-block" /> </h2>
      <div className="border border-primary rounded-md">
        {
          status?.map(event =>
            <div className="p-8 flex justify-between items-center" key={event._id}>
              <div className="flex gap-4 items-center">
                <FaRocketchat className="text-3xl" />
                <p>Your request for custom event <span className="font-semibold">{event?.eventType + '-' + event?._id.slice(0,6)}</span> has been {event.status == 'approved' ? 'approved' : 'rejected'}, to check the the details click <Link className="text-primary font-semibold" to='/dashboard/customEvent'>here</Link> </p>
              </div>
              {
                event.status == 'approved' ? <FcApproval className="text-3xl" /> : <RxCrossCircled className="text-3xl text-red-500" />
              }


            </div>)
        }

      </div>
    </div>
  );
};

export default Inbox;
