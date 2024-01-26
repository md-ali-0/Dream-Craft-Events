import Container from "../../components/container/Container";
import useEvents from "../../hooks/useEvents";
import EventBanner from "./EventBanner";
import EventCard from "./EventCard";

const Events = () => {
    const [events] = useEvents()
    return (
        <div>
            <EventBanner />
            <Container>
                <h2 className="text-3xl md:text-5xl font-bold text-center text-secondary mt-10 uppercase">Popular Events</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10 md:my-20">
                    {
                        events.map(event => <EventCard key={event.id} event={event}></EventCard>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Events;