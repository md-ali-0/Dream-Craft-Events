import { useEffect, useState } from "react";

// eslint-disable-next-line no-unused-vars
const MyCart = ({ cartItems: propCartItems }) => {
  const [cartItems, setCartItems] = useState([]);

  // Retrieve cart items from local storage when the component mounts
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  // Check if cartItems is undefined or null, and render a message if it is
  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="text-center mt-10">
        <p className="text-gray-600">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div>
      <section className="flex items-center bg-gray-50 xl:h-screen font-poppins dark:bg-gray-700 ">
        <div className="justify-center flex-1 px-1 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
          <h2 className="mb-10 text-4xl font-bold text-center dark:text-gray-400">
            Your Cart
          </h2>
          <div className="flex flex-wrap">
            {cartItems.map((cartItem, index) => (
              <CartItem key={index} cartItem={cartItem} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const CartItem = ({ cartItem }) => {
  const { product_image, product_name, product_price, quantity } = cartItem;

  return (
    <div className="relative flex flex-wrap items-center pb-8 mb-8 -mx-4 border-b border-gray-200 dark:border-gray-700 xl:justify-between border-opacity-40">
      <div className="w-full mb-2 lg:mb-0 h-96 md:h-44 md:w-44">
        <img
          src={product_image}
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      <div className="w-full px-4 mb-6 md:w-auto xl:mb-0">
        <a
          className="block mb-5 text-xl font-medium dark:text-gray-400 hover:underline"
          href="#"
        >
          {product_name}
        </a>
        <div className="flex flex-wrap">
          <p className="mr-4 text-sm font-medium">
            <span className="dark:text-gray-400">Quantity:</span>
            <span className="ml-2 text-gray-400 dark:text-gray-400">
              {quantity}
            </span>
          </p>
        </div>
      </div>
      <div className="w-full px-4 mt-6 mb-6 xl:w-auto xl:mb-0 xl:mt-0">
        <span className="text-xl font-medium text-red-500 dark:text-gray-400">
          <span className="text-sm">$</span>
          <span>{product_price}</span>
        </span>
      </div>
    </div>
  );
};

export default MyCart;
