/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { TbCategory2 } from "react-icons/tb";
import loadingAnimation from "../../assets/animation/animation.json";
import Container from "../../components/container/Container";
import EventBanner from "./EventBanner";
import EventCard from "./EventCard";

const Events = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredEvents, setFilteredEvents] = useState([]);

    const fetchEvents = async () => {
        const response = await fetch(
            "https://dream-craft-server.vercel.app/events"
        );
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    };

    const {
        data: allEvents = [],
        isLoading,
        error,
    } = useQuery({
        queryKey: ["allEvents"],
        queryFn: fetchEvents,
    });
    //console.log(allEvents);
    useEffect(() => {
        setFilteredEvents(allEvents || []);
    }, [allEvents]);

    const technology = allEvents.filter(item => item.category === 'technology')
    const health = allEvents.filter(item => item.category === 'health')
    const business = allEvents.filter(item => item.category === 'business')
    const others = allEvents.filter(item => item.category === 'others')

    const handleSearch = (e) => {
        e.preventDefault();
        const searchResult = allEvents?.filter((event) =>
            event.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredEvents(searchResult);
    };

    if (isLoading) {
        return (
            <Lottie
                className="flex justify-center items-center min-h-[70%]"
                animationData={loadingAnimation}
                width={500}
                height={350}
            />
        );
    }

    if (error) {
        return <p>Error loading events: {error.message}</p>;
    }

    return (
        <div>
            <EventBanner />
            <Container>
                <h2 className="text-3xl md:text-5xl font-bold text-center text-secondary mt-10 uppercase">
                    All Events
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 my-10 md:my-20 gap-6">
                    <div className="md:col-span-1">
                        {/* Search */}
                        <form
                            onSubmit={handleSearch}
                            className="flex bg-gray-50 p-5 shadow-md rounded-md"
                        >
                            <input
                                type="text"
                                name="search"
                                placeholder="Search by name"
                                className="w-full px-4 py-3 border rounded-3xl outline-none border-none bg-gray-200 text-black"
                                onInput={(e) => setSearchTerm(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="bg-primary text-white py-3 px-8 rounded-3xl rounded-tl-none -ml-8 text-2xl font-bold"
                            >
                                <FaSearch />
                            </button>
                        </form>

                        {/* category */}
                        <div className="bg-gray-50 shadow-md rounded-md mt-8">
                            <div className="pt-6">
                                <span className="bg-primary inline-flex gap-2 items-center text-white text-xl font-bold p-5 rounded-r-xl"><TbCategory2 /> Category</span>
                            </div>
                            <div className="mt-3">
                                <button
                                    className="block w-full text-left p-5 hover:bg-secondary hover:text-white text-xl border-b"
                                    onClick={() => setFilteredEvents(allEvents)}
                                >All</button>
                                <button
                                    className="block w-full text-left p-5 hover:bg-secondary hover:text-white text-xl border-b"
                                    onClick={() => setFilteredEvents(technology)}
                                >Technology</button>
                                <button
                                    className="block w-full text-left p-5 hover:bg-secondary hover:text-white text-xl border-b"
                                    onClick={() => setFilteredEvents(health)}
                                >Health</button>
                                <button
                                    className="block w-full text-left p-5 hover:bg-secondary hover:text-white text-xl border-b"
                                    onClick={() => setFilteredEvents(business)}
                                >Business</button>
                                <button
                                    className="block w-full text-left p-5 hover:bg-secondary hover:text-white text-xl"
                                    onClick={() => setFilteredEvents(others)}
                                >Others</button>
                            </div>
                        </div>
                    </div>

                    {/* cards */}
                    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {filteredEvents?.map((event) => (
                            <EventCard key={event._id} event={event}></EventCard>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Events;
