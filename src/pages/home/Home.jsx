import TeamCards from "../../components/cards/TeamCards";
import Booking from "../bookings/Booking";
import NewsLetter from "../newsLetter/NewsLetter";
import Organizer from "./Organizer/Organizer";
// import Banner from "./Banner";
// import FeatureEvents from "./FeatureEvents";
import PopularEvents from "./PopularEvents";
import MagicBanner from "./magicBanner/MagicBanner";
// import Faqac from "../../pages/portfolio/faq/Faqac"

const Home = () => {
  return (
    <div>
      <MagicBanner></MagicBanner>
      {/* <Banner/> */}

      {/* <FeatureEvents/> */}
      <Organizer />
      <PopularEvents />

      <Booking></Booking>
      <TeamCards />
      <NewsLetter></NewsLetter>
      {/* <Faqac></Faqac> */}
    </div>
  );
};

export default Home;
