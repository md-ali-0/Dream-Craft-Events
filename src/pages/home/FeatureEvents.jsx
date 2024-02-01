import { Link } from "react-router-dom";
import Container from "../../components/container/Container";
import SectionTitle from "../../components/sectionTitle/SectionTitle";

import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import { FaArrowRight } from "react-icons/fa";
import EventCard from "../allEvents/EventCard";
import loadingAnimation from "/public/animation.json";

const FeatureEvents = () => {
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
    data: events = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["events"],
    queryFn: fetchEvents,
  });
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
    <section className="my-10">
      <Container>
        <SectionTitle heading={"Feature Events"} subHeading={"Events"} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
          {events?.slice(0, 3).map((event) => (
            <EventCard key={event._id} event={event}></EventCard>
          ))}
        </div>
        <div className="mt-5 flex justify-end">
          <Link
            to="/events"
            className="bg-primary text-white px-4 py-2 rounded-md flex gap-1 items-center"
          >
            All Events <FaArrowRight />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default FeatureEvents;
