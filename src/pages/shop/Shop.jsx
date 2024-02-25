// Shop.jsx file

/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import loadingAnimation from "../../assets/animation/animation.json";
import Container from "../../components/container/Container";
import ShopBanner from "./ShopBanner";
import ShopCard from "./ShopCard";
import { TiShoppingCart } from "react-icons/ti";
import MyCart from "./MyCart";
import { Link } from "react-router-dom";

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  // Save cart items to local storage when cartItems state updates
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://dream-craft-server.vercel.app/products"
        // "http://localhost:8080/products"
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return response.json();
    } catch (error) {
      console.error("Error fetching products:", error);
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
    setFilteredItems(allProducts || []);
  }, [allProducts]);

  // const updateCartItemCount = (newCartItem) => {
  //   setCartItems([...cartItems, newCartItem]);
  //   setCartItemCount(cartItemCount + 1);
  // };

  const updateCartItemCount = (newCartItem) => {
    setCartItems((prevCartItems) => [...prevCartItems, newCartItem]);
    setCartItemCount((prevCount) => prevCount + 1);
  };
  

  const handleSearch = (e) => {
    e.preventDefault();
    const searchResult = allProducts?.filter((event) =>
      event.product_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(searchResult);
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
    return <p>Error loading products: {error.message}</p>;
  }

  return (
    <div>
      <ShopBanner />
      <Container>
        <h2 className="text-3xl md:text-5xl font-bold text-center text-secondary mt-10 mb-10">
          Popular Event Accessories
        </h2>
        {/* Search */}
        <div className="grid grid-cols-1 md:flex justify-center">
          <div>
            <form
              onSubmit={handleSearch}
              className="flex bg-gray-50 p-5 shadow-md rounded-md"
            >
              <input
                type="text"
                name="search"
                placeholder="Search by name"
                className=" px-4 py-3 border rounded-3xl outline-none border-none bg-gray-200 text-black"
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

          <div>
            <div className=" mx-5 my-4 flex justify-center">
              {/* <h2 className="p-8">My Cart</h2> */}
              <Link to="/my-cart">
                <button
                  type="button"
                  className="relative text-slate-800 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 rounded-lg text-xl font-bold px-5 py-4 text-center inline-flex items-center me-2"
                >
                  <span className="flex gap-2">
                    <span>My Cart</span>{" "}
                    <span className="mt-1">
                      <TiShoppingCart />
                    </span>
                  </span>
                  {/* Badge for cart item count */}
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                    {cartItemCount}
                    {/* when I click Add to Cart button from ShopCard.jsx file, then it increases the number of badge cart item count  */}
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className=" my-10 md:my-12 gap-6">
          {/* cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {filteredItems?.map((shopItem) => (
              <ShopCard
                key={shopItem.id}
                shopItem={shopItem}
                updateCartItemCount={updateCartItemCount}
              ></ShopCard>
            ))}
          </div>
        </div>
      </Container>
      <MyCart cartItems={cartItems} />
    </div>
  );
};

export default Shop;
