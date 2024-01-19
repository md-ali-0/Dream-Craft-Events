import EventCards from "../../components/cards/EventCards";
import PricingCards from "../../components/cards/PricingCards";
import TeamCards from "../../components/cards/TeamCards";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
            <Banner/>
            <EventCards/>
            <PricingCards/>
            <TeamCards/>
        </div>
    );
};

export default Home;