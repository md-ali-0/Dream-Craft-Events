// ShopCard.jsx file

import toast from "react-hot-toast";
import { FaDollarSign } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";
import { TiShoppingCart } from "react-icons/ti";

const ShopCard = ({ shopItem, updateCartItemCount }) => {
  const { product_image, product_name, product_description, product_price } =
    shopItem;

  const addToCart = () => {
    // Add your logic to add the product to the cart here
    toast.success(
      <div className="flex items-center">
        <span>{product_name} added to cart</span>

        <span className="mt-1 ml-2 text-primary">
          <TiShoppingCart />
        </span>
      </div>
    );

    // Call the function passed as prop to update cart item count
    updateCartItemCount(shopItem); // Pass the shopItem object to updateCartItemCount
  };

  return (
    <div className="rounded-md shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg bg-white hover:bg-gray-100">
      <div className="rounded-t-md shadow-lg h-60 relative overflow-hidden ">
        <img
          src={product_image}
          alt=""
          className="rounded-t-md h-full w-full object-cover transform transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute bg-gradient-to-r from-rose-700 to-pink-600   hover:bg-gradient-to-br bottom-0 left-0 px-6 py-3 text-white font-semibold rounded-tr-md flex items-center gap-3">
          {" "}
          <FaDollarSign /> {product_price}
        </div>
      </div>
      <div className="px-4 py-4">
        <h2 className="text-2xl mt-2 font-semibold text-secondary">
          {product_name}
        </h2>
        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-2 items-center">
            <p className="text-sm text-secondary font-medium flex gap-2">
              <TbListDetails className="text-primary text-base" />
              {product_description}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-2">
        <button
          type="button"
          className=" text-white bg-gradient-to-r from-rose-700 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg lg:text-lg px-5 py-2.5 text-center me-2 mb-2 mt-2"
          onClick={addToCart}
        >
          <span className="flex gap-2">
            <span>Add To Cart</span>{" "}
            <span className="mt-1">
              <TiShoppingCart />
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default ShopCard;
