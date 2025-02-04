import React, { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import { FaPlus, FaMinus } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, URL } = useContext(StoreContext);

  // State for loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500); // Simulate API loading
  }, []);

  // Skeleton UI
  if (loading) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg max-w-sm p-4 animate-pulse shadow-lg">
        <div className="h-52 bg-gray-300 rounded-t-lg"></div>
        <div className="p-5">
          <div className="h-6 bg-gray-400 rounded w-3/4 mb-3"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
          <div className="flex justify-between items-center">
            <div className="h-4 bg-gray-400 rounded w-12"></div>
            <div className="h-4 bg-gray-300 rounded w-16"></div>
          </div>
          <div className="h-10 bg-gray-400 rounded w-full mt-4"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-100 rounded-lg max-w-sm transition transform duration-700 hover:shadow-xl hover:scale-105">
      <div className="relative w-full">
        <img className="rounded-t-lg w-full h-52" src={URL + "/images/" + image} alt="food Image" />
      </div>
      <div className="px-5 pb-5 pt-4">
        <h3 className="text-gray-900 font-semibold text-xl tracking-tight">{name}</h3>
        <div className="flex items-center mt-2.5 mb-5 justify-between">
          <span className="inline-flex items-center gap-2">
            <img src={assets.rating_starts} alt="rating_starts" />
          </span>
          <span className="bg-orange-100 text-orange-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">4.0</span>
        </div>
        <div className="mb-4 flex items-end justify-between">
          <h4 className="text-2xl font-semibold leading-9 text-default-900">Rs.{price}</h4>
          {cartItems[id] ? (
            <motion.div
              className="relative z-10 inline-flex items-center justify-between rounded-full border border-default-200 p-1"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <button onClick={() => removeFromCart(id)} className="inline-flex flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-white h-6 w-6 text-sm">
                <FaMinus />
              </button>
              <p className="min-w-[45px] text-center">{cartItems[id]}</p>
              <button onClick={() => addToCart(id)} className="inline-flex flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-white h-6 w-6 text-sm">
                <FaPlus />
              </button>
            </motion.div>
          ) : null}
        </div>
        {!cartItems[id] ? (
          <motion.button
            onClick={() => addToCart(id)}
            className="relative z-10 inline-flex w-full items-center justify-center rounded-lg bg-primary px-6 py-3 text-center text-sm font-medium text-white shadow-sm"
            transition={{ duration: 0.3 }}
          >
            <MdShoppingCart className="me-2" />
            Add to Cart
          </motion.button>
        ) : (
          <motion.button
            onClick={() => removeFromCart(id)}
            className="relative z-10 inline-flex w-full items-center justify-center rounded-lg bg-red-100 px-6 py-3 text-center text-sm font-medium text-red-500 shadow-sm"
            transition={{ duration: 0.3 }}
          >
            <MdShoppingCart className="me-2" />
            Remove from Cart
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default FoodItem;
