import EventCards from "../../components/cards/EventCards";
import PricingCards from "../../components/cards/PricingCards";
import TeamCards from "../../components/cards/TeamCards";
// import Banner from "./Banner";
// import FeatureEvents from "./FeatureEvents";
import PopularEvents from "./PopularEvents";
import MagicBanner from "./magicBanner/MagicBanner";

const Home = () => {
    return (
        <div>
            <MagicBanner></MagicBanner>
            {/* <Banner/> */}
            <EventCards/>
            {/* <FeatureEvents/> */}
            <PopularEvents/>
            <PricingCards/>
            <TeamCards/>
        </div>
    );
};

export default Home;