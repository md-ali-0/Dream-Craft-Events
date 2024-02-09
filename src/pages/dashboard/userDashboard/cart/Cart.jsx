import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      <h2 className="text-4xl font-semibold text-center ">My Cart</h2>

      <div className="mt-10">
        <h2  className="text-3xl text-center text-primary font-semibold mb-2 pl-3 outline w-80 mx-auto">My purchase items -0 </h2>

        <p className="text-center mt-10 bg-green-600 text-2xl text-white w-72 mx-auto" ><Link to="/shop">Visit Our Shop</Link></p>
        
      </div>
    </div>
  );
};

export default Cart;
