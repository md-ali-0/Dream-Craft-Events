import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from '../../assets/booking/slider1.jpg';
import slider2 from '../../assets/booking/slider2.jpg';
import slider3 from '../../assets/booking/slider3.jpg';
import slider4 from '../../assets/booking/slider4.jpg';
import slider5 from '../../assets/booking/slider5.jpg';
import Container from "../../components/container/Container";

const ImageGallery = () => {
    return (
        <Container>
            <div className="my-20">
                <div>
                    <h2 className="text-4xl font-bold uppercase">Image Gallery</h2>
                    <p className='text-xl text-[#818181] mt-2'>for InnovateSphere - Tech & Beyond Summit</p>
                </div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper mt-8"
                >
                    <SwiperSlide><img src={slider1} className="rounded-md h-80 object-cover" /></SwiperSlide>
                    <SwiperSlide><img src={slider2} className="rounded-md h-80 object-cover" /></SwiperSlide>
                    <SwiperSlide><img src={slider3} className="rounded-md h-80 object-cover" /></SwiperSlide>
                    <SwiperSlide><img src={slider4} className="rounded-md h-80 object-cover" /></SwiperSlide>
                    <SwiperSlide><img src={slider5} className="rounded-md h-80 object-cover" /></SwiperSlide>
                </Swiper>
            </div>
        </Container>
    );
};

export default ImageGallery;