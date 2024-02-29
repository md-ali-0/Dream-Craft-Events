import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";
import Container from "../../../components/container/Container";
import img1 from "../images/portfolio1.jpg";
import img2 from "../images/portfolio2.jpg";
import img3 from "../images/portfolio3.jpg";
import img4 from "../images/portfolio4.jpg";
import img5 from "../images/portfolio5.jpg";
import img6 from "../images/portfolio6.jpg";
import img7 from "../images/portfolio7.jpg";
import img8 from "../images/portfolio8.jpg";

const Gallery = () => {
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({ once: false });
  }, []);
  return (
    <Container>
      <div className="mb-2">
        <div className="mt-8">
          <h1 className="text-inherit text-5xl text-center font-roboto mb-4">
            Our <span className="text-5xl text-yellow-600">Gallery</span>
          </h1>
        </div>
        <div className=" text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
            <div
              data-aos="zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="  bg-gray-800  border border-gray-300 "
            >
              <img className="w-full " src={img1} alt="" />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="70"
              data-aos-duration="3500"
              className="bg-gray-800 border border-gray-300 object-cover h-full"
            >
              <img className="w-full h-full object-cover" src={img2} alt="" />
            </div>

            <div
              data-aos="zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="  bg-gray-800  border border-gray-300 "
            >
              <img className="w-full h-full object-cover " src={img3} alt="" />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="  bg-gray-800  border border-gray-300 "
            >
              <img className="w-full h-full object-cover" src={img4} alt="" />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="  bg-gray-800  border border-gray-300 "
            >
              <img className="w-full h-full object-cover" src={img5} alt="" />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="  bg-gray-800  border border-gray-300 "
            >
              <img className="w-full h-full object-cover" src={img6} alt="" />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="  bg-gray-800  border border-gray-300 "
            >
              <img className="w-full h-full object-cover" src={img7} alt="" />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="  bg-gray-800  border border-gray-300 row-start-2 row-span-2"
            >
              <img className="w-full" src={img8} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Gallery;
