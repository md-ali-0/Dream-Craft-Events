import { FaCalendarAlt, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { BsDiagram3, BsTwitterX } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
    const { title, image, date, location } = event;
    return (
        <div className="rounded-md shadow-lg">
            <div className="rounded-t-md shadow-lg h-60 relative overflow-hidden">
                <img src={image} alt={title} className="rounded-t-md h-full w-full object-cover transform transition-transform duration-500 hover:scale-110" />
                <div className="absolute bg-primary bottom-0 left-0 px-6 py-3 text-white font-semibold rounded-tr-md flex items-center gap-3"> <BsDiagram3 /> 500 Seat</div>
            </div>
            <div className="px-4 py-6">
                <div className="flex justify-between">
                    <p className="text-sm text-secondary font-medium flex gap-2"><FaCalendarAlt className="text-primary text-base" />{date}</p>
                    <p className="text-sm text-secondary font-medium flex gap-1"><CiLocationOn className="text-primary text-lg font-bold" /> {location}</p>
                </div>
                <h2 className="text-2xl mt-2 font-semibold text-secondary">{title}</h2>
                <div className="flex justify-between items-center mt-4">
                    <Link to="/event-details" className="text-primary font-semibold underline">Event Details</Link>
                    <div className="flex gap-2 items-center">
                        <a href="/" className="text-sm text-secondary hover:text-primary"><FaFacebook /></a>
                        <a href="/" className="text-sm text-secondary hover:text-primary"><BsTwitterX /></a>
                        <a href="/" className="text-sm text-secondary hover:text-primary"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCard;