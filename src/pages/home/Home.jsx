import EventCards from "../../components/cards/EventCards";
import TeamCards from "../../components/cards/TeamCards";
import Booking from "../bookings/Booking";
import Organizer from "./Organizer/Organizer";
// import Banner from "./Banner";
// import FeatureEvents from "./FeatureEvents";
import PopularEvents from "./PopularEvents";
import MagicBanner from "./magicBanner/MagicBanner";

const Home = () => {
    return (
        <div>
            <MagicBanner></MagicBanner>
            {/* <Banner/> */}
            <EventCards />
            {/* <FeatureEvents/> */}
            <PopularEvents />
            <Organizer />
            <Booking></Booking>
            <TeamCards />
        </div>
    );
};

export default Home;