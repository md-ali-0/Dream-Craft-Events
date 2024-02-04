/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Container from "../../components/container/Container";
import ShopBanner from "./ShopBanner";
import ShopCard from "./ShopCard";
import loadingAnimation from "/public/animation.json";

const Events = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredEvents, setFilteredEvents] = useState([]);

    // const fetchEvents = async () => {
    //     const response = await fetch(
    //         "https://dream-craft-server.vercel.app/events"
    //     );
    //     if (!response.ok) {
    //         throw new Error("Network response was not ok");
    //     }
    //     return response.json();
    // };

    const fetchProducts = async () => {
      try {
          // Assuming the shop.json file is in the public directory
          const response = await fetch("https://dream-craft-server.vercel.app/products");
  
          if (!response.ok) {
              throw new Error("Network response was not ok");
          }
  
          return response.json();
      } catch (error) {
          console.error("Error fetching events:", error);
          throw error;
      }
  };
  

    const {
        data: allProducts = [],
        isLoading,
        error,
    } = useQuery({
        queryKey: ["allProducts"],
        queryFn: fetchProducts,
    });

    useEffect(() => {
        setFilteredEvents(allProducts || []);
    }, [allProducts]);

    const handleSearch = (e) => {
        e.preventDefault();
        const searchResult = allProducts?.filter((event) =>
            event.product_name.toLowerCase().includes(searchTerm.toLowerCase())
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
            <ShopBanner />
            <Container>
                <h2 className="text-3xl md:text-5xl font-bold text-center text-secondary mt-10 ">
                    Popular Event Accessories
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 my-10 md:my-20 gap-6">
                    {/* Search */}
                    <div className="col-span-1">
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
                    </div>

                    {/* cards */}
                    <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {filteredEvents?.map((event) => (
                            <ShopCard key={event.id} event={event}></ShopCard>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Events;
