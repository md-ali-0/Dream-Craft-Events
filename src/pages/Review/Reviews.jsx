// Reviews.jsx

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import ReviewInput from "./ReviewInput";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import img from '../../assets/person/image-person-jpg.jpg'

const Reviews = () => {
  const axios = useAxiosPublic();

  const {
    data: review = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["review"],
    queryFn: async () => {
      const res = await axios("/review");
      return res.data;
    },
  });

  return (
    <div className="flex flex-col gap-5 my-20 lg:px-10 px-2">
      <div className="w-full">
        <h2 className="text-primary text-3xl mb-10 text-center font-semibold">Testimonial</h2>
        <h3 className="text-3xl text-center font-semibold mb-10 text-gray-800 uppercase">
          WHAT PEOPLE SAY ABOUT Dream Craft Events.
        </h3>
        <Swiper
          slidesPerView={1}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          spaceBetween={30}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            769: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
          }}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mySwiper h-60 text-center"
        >
          {review?.map((data) => (
            <SwiperSlide key={data._id} className=" p-2 rounded-lg mb-5 bg-slate-100">
              <div className="flex gap-7 bg-slate-300 p-2 rounded-t-lg justify-center">
                <img src="https://i.ibb.co/s6CHS24/profile3.png" className="w-10 h-10 rounded-full" alt="person" />
                <div className="flex flex-col">
                  <h2 className="uppercase text-primary font-semibold">{data?.name}</h2>
                  <p className="text-sm">{data?.time}</p>
                </div>
              </div>

              <div className="flex gap-2 mt-4 justify-center">
                <p className="font-semibold">{data?.rating}</p>
                <Rating className="" style={{ maxWidth: 80 }} value={data?.rating} readOnly />
              </div>

              <p className="mt-2 px-7 py-1">{data?.text}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full ">
        <ReviewInput refetch={refetch} />
      </div>
    </div>
  );
};

export default Reviews;
