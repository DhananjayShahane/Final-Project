import React, { useContext } from "react";
import { motion } from "framer-motion";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import { FaPlus, FaMinus } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";

const FoodItem = ({ id, name, price, description, image }) => {

  const { cartItems, addToCart, removeFromCart, URL } =
    useContext(StoreContext);

  const truncatedDescription =
    description.length > 80 ? `${description.slice(0, 80)}...` : description;

  return (
    <div
      class="bg-white border border-gray-100 rounded-lg max-w-sm transition transform duration-700 hover:shadow-xl hover:scale-105">
      <div class="relative w-full">
        <img class="rounded-t-lg w-full h-52"
          src={URL + "/images/" + image}
          alt="food Image" />
      </div>
      <div class="px-5 pb-5 pt-4">
        <h3
          class="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
          {name}
        </h3>
        <div class="flex items-center mt-2.5 mb-5 justify-between">
          <span className="inline-flex items-center gap-2">
            <img src={assets.rating_starts} alt="rating_starts" />
          </span>
          <span
            class="bg-orange-100 text-orange-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">4.0</span>
        </div>
        <div className="mb-4 flex items-end justify-between">
          <h4 className="text-2xl font-semibold leading-9 text-default-900">
            Rs.{price}
          </h4>

          {cartItems[id] ? (
            <motion.div
              className="relative z-10 inline-flex items-center justify-between rounded-full border border-default-200 p-1"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => removeFromCart(id)}
                type="button"
                className="inline-flex flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-white h-6 w-6 text-sm"
              >
                <FaMinus />
              </button>

              <p className="min-w-[45px] text-center"> {cartItems[id]} </p>
              <button
                onClick={() => addToCart(id)}
                type="button"
                className="inline-flex flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-white h-6 w-6 text-sm"
              >
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
