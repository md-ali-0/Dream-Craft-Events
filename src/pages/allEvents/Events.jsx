import Container from "../../components/container/Container";
import useEvents from "../../hooks/useEvents";
import EventCard from "./EventCard";

const Events = () => {
    const [events] = useEvents()
    return (
        <Container>
            <h2 className="text-3xl md:text-5xl font-bold text-center text-dark_01 mt-5">Our Events</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    events.map(event => <EventCard key={event.id} event={event}></EventCard>)
                }
            </div>
        </Container>
    );
};

export default Events;