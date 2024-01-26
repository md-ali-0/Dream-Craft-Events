import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import ReviewInput from "./ReviewInput";
import img1 from "../../assets/about/speaker-2.png";
import img2 from "../../assets/about/speaker-3.png";

const Reviews = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-5 my-20 px-10 ">
      <div className="w-full md:w-1/2">
        <h2 className="text-primary font-semibold">Testimonial</h2>
        <h3 className="text-3xl font-semibold text-gray-800 uppercase">
          WHAT PEOPLE SAY ABOUT Dream Craft Events.
        </h3>
        <ReviewInput></ReviewInput>
      </div>
      <div className="w-full md:w-1/2">
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="p-5">
            <div className="">
              <div className="flex justify-evenly mb-2">
                <div>
                <img className="w-20 rounded-full h-20 " src={img1} alt="" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-primary">Zara Khan</h1>
                  <p>Photographer</p>
                </div>
              </div>
              <p className="px-10">
                They are very professional and helpful in every aspect.Excellent
                work and trust worthy.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-5">
            <div>
              <div className="flex justify-evenly mb-2">
                <div>
                <img className="w-20 rounded-full h-20" src={img2} alt="" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-primary">Abdul Kadir</h1>
                  <p>Business man</p>
                </div>
              </div>
              <p className="px-10">
              These guys are excellent in their work. They understand their customers want. In one word just amazing. 🙂
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
