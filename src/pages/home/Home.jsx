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

      {/* <FeatureEvents/> */}
      <Organizer />
      <PopularEvents />

      <Booking></Booking>
      <EventCards />
      <TeamCards />
    </div>
  );
};

export default Home;
