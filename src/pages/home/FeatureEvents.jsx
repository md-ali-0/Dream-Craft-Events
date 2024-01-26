import { Link } from "react-router-dom";
import Container from "../../components/container/Container";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import useEvents from "../../hooks/useEvents";
import EventCard from "../allEvents/EventCard";
import { FaArrowRight } from "react-icons/fa";

const FeatureEvents = () => {
    const [events] = useEvents()
    return (
        <section className="my-10">
            <Container>
                <SectionTitle
                    heading={"Feature Events"}
                    subHeading={"Events"}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
                    {
                        events.slice(0, 3).map(event => <EventCard key={event.id} event={event}></EventCard>)
                    }
                </div>
                <div className="mt-5 flex justify-end">
                    <Link to='/events' className="bg-primary text-white px-4 py-2 rounded-md flex gap-1 items-center">All Events <FaArrowRight/></Link>
                </div>
            </Container>
        </section>
    );
};

export default FeatureEvents;