import EventCards from "../../components/cards/EventCards";
import PricingCards from "../../components/cards/PricingCards";
import TeamCards from "../../components/cards/TeamCards";
import Banner from "./Banner";
import FeatureEvents from "./FeatureEvents";
import PopularEvents from "./PopularEvents";

const Home = () => {
    return (
        <div>
            <Banner/>
            <EventCards/>
            {/* <FeatureEvents/> */}
            <PopularEvents/>
            <PricingCards/>
            <TeamCards/>
        </div>
    );
};

export default Home;