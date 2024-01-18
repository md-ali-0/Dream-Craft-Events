import EventCards from "../../components/cards/EventCards";
import PricingCards from "../../components/cards/PricingCards";
import TeamCards from "../../components/cards/TeamCards";

const Home = () => {
    return (
        <div>
            <EventCards/>
            <PricingCards/>
            <TeamCards/>
        </div>
    );
};

export default Home;