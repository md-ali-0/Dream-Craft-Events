import { LuDollarSign } from "react-icons/lu";
import { MdOutlineDateRange, MdOutlineLocationOn } from "react-icons/md";
import Container from "../../components/container/Container";
import { FaArrowTrendUp } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";



const Description = () => {

    const navigate = useNavigate(); // Initialize useNavigate hook

    const goToEvents = () => {
        navigate("/events");
        window.scrollTo(0, 0); // Scroll to the top of the page
    }

    return (
        <Container>
            <div className="bg-[#F4F4F4] rounded-md py-10 px-20 -mt-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <MdOutlineDateRange className="text-4xl text-primary" />
                        <h4 className="mt-6 text-3xl font-semibold">Upcoming Events</h4>
                        <p className="mt-2 text-xl font-medium text-primary">Mark Your Calendar</p>
                        {/* <h4 className="mt-6 text-3xl font-semibold">25 January</h4>
                        <p className="mt-2 text-xl font-medium text-[#818181]">10:00 am</p> */}
                    </div>
                    <div>
                        <MdOutlineLocationOn className="text-4xl text-primary" />
                        <h4 className="mt-6 text-3xl font-semibold">Your Desired Venue</h4>
                        <p className="mt-2 text-xl font-medium text-primary">Bangladesh</p>
                    </div>
                    <div>
                        <LuDollarSign className="text-4xl text-primary" />
                        <h4 className="mt-6 text-3xl font-semibold">Get Discounts</h4>

                        
                <button onClick={goToEvents}
                  type="button"
                  className=" text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg lg:text-lg px-5 py-2.5 text-center me-2 mb-2 mt-2"
                >
                   <span className="flex gap-2">
                   <span>Go to Events</span> <span className="mt-1"><FaArrowTrendUp /></span>
                   </span>
                </button>
             

                    </div>

                </div>
            </div>
            <div className="my-20">
                <h2 className="text-lg text-red-600">InnovateSphere - Tech & Beyond Summit</h2>
                <p className="text-[#818181] mt-4">
                    Dive into the future of technology at InnovateSphere, the ultimate summit for tech enthusiasts, innovators, and industry leaders. Explore the latest breakthroughs, engage with cutting-edge ideas, and connect with visionaries who are shaping the landscape of tomorrow.
                </p>
            </div>
        </Container>
    );
};

export default Description;