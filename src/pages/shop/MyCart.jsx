// MyCart.jsx file
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import Container from "../../components/container/Container";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from 'react-router-dom';


// eslint-disable-next-line no-unused-vars
const MyCart = ({ cartItems: propCartItems }) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosPublic();
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Retrieve cart items from local storage when the component mounts
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  // Function to remove an item from the cart
  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1); // Remove the item at the specified index
    setCartItems(newCartItems);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems)); // Update local storage
    toast.success("Item removed from cart");
  };

  // Calculate subtotal and total
  const subtotal = cartItems.reduce(
    (acc, cartItem) => acc + cartItem.product_price,
    0
  );
  const shipping = 10.0; // Assuming static shipping cost
  const total = subtotal + shipping;

  // Check if cartItems is undefined or null, and render a message if it is
  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="text-center mt-10 mb-10">
        <p className="text-gray-600">Add products to your cart.</p>
      </div>
    );
  }

  // const placeMyOrder = async (data) => {
  //   toast.success(
  //     <div className="flex items-center">
  //       <span>Your order has been placed successfully.</span>
  //     </div>
  //   );
  //   //console.log(cartItems);
  //   //console.log(cartItems[1]);

  // };

  const placeMyOrder = async (data) => {

    //console.log(cartItems);

    if (!user) {
      // If user is not logged in, redirect to login page
      // navigate('/login');
      toast.error(
        "Please Log in first!"
      );
      return;
    }

    if (data && cartItems.length > 0) {
      const userId = user._id;
      const userName = user.name;
      const userImage = user.image;
      const userEmail = user.email;
      const status = "pending";

      try {
        // Iterate over each item in the cart
        for (const cartItem of cartItems) {
          const order = {
            user_id: userId,
            user_name: userName,
            user_image: userImage,
            user_email: userEmail,
            product_id: cartItem.id, // Assuming cartItem has id property
            product_image: cartItem.product_image,
            product_name: cartItem.product_name,
            product_description: cartItem.product_description,
            product_price: cartItem.product_price,
            status: status,
          };

          // Save the order to the database

          const ordersRes = await axiosSecure.post("/product-orders", order);
          //console.log(ordersRes);
        }

        // toast.success("Your orders have been placed.");
        // Swal.fire({
        //   title: "Order placed!",
        //   text: "Your order has been placed successfully.",
        //   icon: "success",
        //   confirmButtonText: "Ok",
        // });

        Swal.fire({
          title: "Order placed!",
          text: "Your order has been placed successfully!",
          icon: "success",
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/dashboard/cart'); // Directly navigate to the home page
          }
        });

      } catch (error) {
        console.error("Error placing orders:", error);
        toast.error(
          "An error occurred while placing your orders. Please try again."
        );
      }
    } else {
      console.warn("No data or cart items found to place orders.");
    }
  };

  return (
    <div className="">
      <Container>
        <section className="flex items-center bg-gray-50 font-poppins dark:bg-gray-700 ">
          <div className="justify-center flex-1 px-1 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
            <h2 className=" mb-10 text-4xl font-bold text-center dark:text-gray-400">
              Your Cart
            </h2>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-8/12">
                <div className="px-10">
                  {/* card 1 start  */}
                  {cartItems.map((cartItem, index) => (
                    <CartItem
                      key={index}
                      cartItem={cartItem}
                      removeFromCart={() => removeFromCart(index)}
                    />
                  ))}
                  {/* card 1 end */}
                </div>
              </div>

              <div className="w-full lg:w-4/12">
                <div className="px-6 mb-14">
                  <div className="mb-10">
                    <span className="mb-6 text-3xl font-bold text-gray-700 dark:text-gray-400">
                      Apply Coupon
                    </span>
                    <input
                      type="text"
                      className="flex-1 w-full px-8 py-4 mt-4 font-normal placeholder-gray-400 border dark:bg-gray-800 rounded-xl dark:border-gray-700 dark:placeholder-gray-500 md:flex-none md:mr-6 dark:text-gray-400"
                      placeholder="x304k45"
                      required=""
                    />
                    <a
                      className="inline-block w-full px-6 py-4 mt-4 text-lg font-medium leading-6  text-center text-white bg-gradient-to-r from-rose-700 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 focus:ring-opacity-50 rounded-xl"
                      href="#"
                    >
                      Apply
                    </a>
                  </div>
                  {/* Cart totals Section  */}

                  <div>
                    <h2 className="mb-6 text-3xl font-bold dark:text-gray-400">
                      Cart totals
                    </h2>
                    <div className="flex items-center justify-between px-10 py-4 mb-3 font-medium leading-8 bg-gray-100 bg-opacity-50 border dark:text-gray-400 dark:bg-gray-800 dark:border-gray-800 rounded-xl">
                      <span>Subtotal</span>
                      <span className="flex items-center text-xl">
                        <span className="mr-2 text-base">$</span>
                        <span>{subtotal.toFixed(2)}</span>
                      </span>
                    </div>
                    <div className="flex items-center justify-between px-10 py-4 mb-3 font-medium leading-8 bg-gray-100 bg-opacity-50 border dark:text-gray-400 dark:bg-gray-800 dark:border-gray-800 rounded-xl">
                      <span>Shipping</span>
                      <span className="flex items-center text-xl">
                        <span className="mr-2 text-base">$</span>
                        <span>{shipping.toFixed(2)}</span>
                      </span>
                    </div>
                    <div className="flex items-center justify-between px-10 py-4 mb-6 font-medium leading-8 bg-gray-100 border dark:text-gray-400 dark:bg-gray-800 dark:border-gray-800 rounded-xl">
                      <span>Total</span>
                      <span className="flex items-center text-xl text-red-500 dark:text-red-400">
                        <span className="mr-2 text-base">$</span>
                        <span>{total.toFixed(2)}</span>
                      </span>
                    </div>
                    <button
                      onClick={placeMyOrder}
                      className="inline-block w-full px-6 py-4 text-lg font-medium leading-6  text-center text-white bg-gradient-to-r from-rose-700 to-pink-600 hover:bg-gradient-to-br focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80  lg:w-auto hover:bg-red-600 focus:ring-4 focus:ring-opacity-50 rounded-xl"
                      href="#"
                    >
                      {/* Checkout */}
                      Place My Order
                    </button>
                  </div>
                  {/* Cart totals Section end */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

const CartItem = ({ cartItem, removeFromCart }) => {
  const { product_image, product_name, product_price } = cartItem;

  return (
    <div>
      {/* card 1 start  */}
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
        </div>

        <div className="w-full px-4 xl:w-auto">
          <span className="text-xl font-medium text-red-500 dark:text-gray-400 ">
            <span className="text-sm">$</span>
            <span>{product_price}</span>
          </span>
        </div>

        {/* remove items from cart button  */}
        <button
          className="absolute top-0 right-0 text-gray-300 lg:mt-6 lg:-mr-4 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200"
          onClick={removeFromCart}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="w-6 h-6 bi bi-x-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>
        {/* remove items from cart button end */}
      </div>
      {/* card 1 end */}
    </div>
  );
};

export default MyCart;
