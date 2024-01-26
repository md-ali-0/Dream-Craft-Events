import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from "react";
import Container from '../../../components/container/Container';


const Gallery = () => {
    useEffect(() => {
        // Initialize AOS when the component mounts
        AOS.init({ once: false });
      }, []);
  return (
    <Container>
      <div className="mt-8">
        <h1 className="text-inherit text-5xl text-center font-roboto mb-4">
          Our <span className="text-5xl text-yellow-600">Gallery</span>
        </h1>
        
      </div>
      <div className=" text-white">
     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
        <div
          data-aos="flip-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="  bg-gray-800  border border-gray-300 "
        >
          <img className="w-full " src="https://i.ibb.co/L9rS2MB/side-view-lovely-married-couple-which-hugging-dancing-first-wedding-dance-cozy-restaurant-while-thei.jpg" alt="" />
        </div>
        <div
          data-aos="flip-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="  bg-gray-800  border border-gray-300 "
        >
          <img className="w-full" src="https://i.ibb.co/ZN7SjF9/newlyweds-cutting-cake.jpg" alt="" />
        </div>
        <div
          data-aos="flip-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="  bg-gray-800  border border-gray-300 "
        >
          <img className="w-full " src="https://i.ibb.co/pQ8xhjM/loving-wife-feeding-her-husband-wedding-ceremony-night.jpg" alt="" />
        </div>
        <div
          data-aos="flip-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="  bg-gray-800  border border-gray-300 "
        >
          <img className="w-full" src="https://i.ibb.co/ZcZc7V6/young-joyful-friends-celebrating.jpg" alt="" />
        </div>
        <div
          data-aos="flip-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="  bg-gray-800  border border-gray-300 "
        >
          <img className="w-full" src="https://i.ibb.co/r7hsrJT/side-view-photographer-taking-photos-bride.jpg" alt="" />
        </div>
        <div
          data-aos="flip-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="  bg-gray-800  border border-gray-300 "
        >
          <img className="w-full" src="https://i.ibb.co/HFn1Tsy/female-wedding-planner-working-ceremony.jpg" alt="" />
        </div>
        <div
          data-aos="flip-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="  bg-gray-800  border border-gray-300 "
        >
          <img className="w-full" src="https://i.ibb.co/7vRspQD/sparkling-glassware-stands-long-table-prepared-wedding-di.jpg" alt="" />
        </div>
        <div
          data-aos="flip-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="  bg-gray-800  border border-gray-300 row-start-2 row-span-2"
        >
          <img className="w-full" src="https://i.ibb.co/LJjCH1J/sensitive-portrait-pregnant-woman-expecting-lady-pink-dress-poses-with-flowers.jpg" alt="" />
        </div>
      </div>
    </div>
    </Container>
  );
};

export default Gallery;
