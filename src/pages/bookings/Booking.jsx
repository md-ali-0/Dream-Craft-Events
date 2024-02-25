import Banner from "./Banner";
import Description from "./Description";
import ImageGallery from "./ImageGallery";
import AllServices from "./allServices/AllServices";

const Booking = () => {
    return (
        <>
            <AllServices></AllServices>
            <Banner />
            <Description />
            <ImageGallery />
        </>
    );
};

export default Booking;