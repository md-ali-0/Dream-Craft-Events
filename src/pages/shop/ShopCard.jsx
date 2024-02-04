import { FaCalendarAlt, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { BsDiagram3, BsTwitterX } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaDollarSign } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";

// import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
    const {id, product_image, product_name, product_description, product_price } = event;
    
    return (
        <div className="rounded-md shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg bg-white hover:bg-gray-100">
            <div className="rounded-t-md shadow-lg h-60 relative overflow-hidden ">
                <img src={product_image} alt={name} className="rounded-t-md h-full w-full object-cover transform transition-transform duration-500 hover:scale-110" />
                <div className="absolute bg-primary bottom-0 left-0 px-6 py-3 text-white font-semibold rounded-tr-md flex items-center gap-3"> <FaDollarSign /> {product_price}</div>
            </div>
            <div className="px-4 py-4">
                {/* <div className="flex justify-between">
                    <p className="text-sm text-secondary font-medium flex gap-2"><FaCalendarAlt className="text-primary text-base" />{product_name}</p>
                    <p className="text-sm text-secondary font-medium flex gap-1"><CiLocationOn className="text-primary text-lg font-bold" /> {product_name}</p>
                </div> */}
                <h2 className="text-2xl mt-2 font-semibold text-secondary">{product_name}</h2>
                <div className="flex justify-between items-center mt-4">
                    {/* <Link to={`/event-details/${_id}`} className="text-primary font-semibold underline">Event Details</Link> */}
                    <div className="flex gap-2 items-center">
                    <p className="text-sm text-secondary font-medium flex gap-2"><TbListDetails className="text-primary text-base" />{product_description}</p>
                        {/* <a href="/" className="text-sm text-secondary hover:text-primary"><FaFacebook /></a>
                        <a href="/" className="text-sm text-secondary hover:text-primary"><BsTwitterX /></a>
                        <a href="/" className="text-sm text-secondary hover:text-primary"><FaLinkedinIn /></a> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCard;