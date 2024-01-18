import { LuDollarSign } from "react-icons/lu";
import { MdOutlineDateRange, MdOutlineLocationOn } from "react-icons/md";
import Container from "../../components/container/Container";

const Description = () => {
    return (
        <Container>
            <div className="bg-[#F4F4F4] rounded-md py-10 px-20 -mt-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <MdOutlineDateRange className="text-4xl text-[#C8C8CD]" />
                        <h4 className="mt-6 text-3xl font-semibold">25 January</h4>
                        <p className="mt-2 text-xl font-medium text-[#818181]">10:00 am</p>
                    </div>
                    <div>
                        <MdOutlineLocationOn className="text-4xl text-[#C8C8CD]" />
                        <h4 className="mt-6 text-3xl font-semibold">Banani, Dhaka</h4>
                        <p className="mt-2 text-xl font-medium text-[#818181]">Bangladesh</p>
                    </div>
                    <div>
                        <LuDollarSign className="text-4xl text-[#C8C8CD]" />
                        <h4 className="mt-6 text-3xl font-semibold">$149</h4>
                        <button className="mt-2 bg-orange-700 hover:bg-[#dd2504]  py-3 px-5 rounded-md text-white font-medium">Book a Ticket</button>
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