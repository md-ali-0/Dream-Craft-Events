import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn, FaSquareXTwitter } from "react-icons/fa6";
import { LuMailOpen, LuNavigation, LuPhoneCall } from "react-icons/lu";

const TopBar = () => {
    return (
        
        <div className="bg-primary py-2">
            <div className="flex justify-between max-w-7xl px-4 md:px-8 lg:px-12 mx-auto">
                <ul className="flex text-sm text-gray-200 gap-3">
                    <li className="hidden md:flex justify-center items-center gap-2">
                        <LuNavigation className="inline"/>
                        <h3>1356 Broadway, New York</h3>
                    </li>
                    <li className="flex justify-center items-center gap-2">
                        <LuPhoneCall className="inline"/>
                        <h3>+8801916498482</h3>
                    </li>
                    <li className="flex justify-center items-center gap-2">
                        <LuMailOpen className="inline"/>
                        <h3>info@dreamcraft.com</h3>
                    </li>
                </ul>
                <ul className="flex text-md text-gray-200 gap-3">
                    <li><FaFacebookF /></li>
                    <li><FaSquareXTwitter /></li>
                    <li><FaLinkedinIn /></li>
                    <li><FaWhatsapp /></li>
                </ul>
            </div>
        </div>
    );
};

export default TopBar;