import { useState } from "react";
import Container from "../../components/container/Container";
import useEvents from "../../hooks/useEvents";
import EventBanner from "./EventBanner";
import EventCard from "./EventCard";
import { FaSearch } from "react-icons/fa";

const Events = () => {
    const [events] = useEvents()
    const [allEvents, setAllEvents] = useState(events)
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = e => {
        e.preventDefault()
        const searchResult = events.filter(event => event.title.toLowerCase().includes(searchTerm.toLowerCase()));
        setAllEvents(searchResult);
    }

    return (
        <div>
            <EventBanner />
            <Container>
                <h2 className="text-3xl md:text-5xl font-bold text-center text-secondary mt-10 uppercase">Popular Events</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 my-10 md:my-20 gap-6">
                    {/* Search */}
                    <div className="col-span-1">
                        <form onSubmit={handleSearch} className="flex bg-gray-50 p-5 shadow-md rounded-md">
                            <input
                                type="text"
                                name="search"
                                placeholder="Search by name"
                                className="w-full px-4 py-3 border rounded-3xl outline-none border-none bg-gray-200 text-black"
                                onInput={e => setSearchTerm(e.target.value)}
                            />
                            <button type="submit" className="bg-primary text-white py-3 px-8 rounded-3xl rounded-tl-none -ml-8 text-2xl font-bold"
                            ><FaSearch /></button>
                        </form>

                        {/* category  */}

                    </div>

                    {/* cards */}
                    <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {
                            allEvents.map(event => <EventCard key={event.id} event={event}></EventCard>)
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Events;