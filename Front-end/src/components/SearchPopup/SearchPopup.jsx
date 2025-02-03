import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const SearchPopup = ({ setIsOpen, isOpen }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Category");

  const popularSearches = [
    "Fruits",
    "Drink",
    "Juice",
    "Vegetables",
    "Peaches",
    "Meat",
  ];

  const handleSearchSubmit = () => {
    alert(`Search for ${searchQuery} in ${selectedCategory}`);
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div>
            <motion.div
              className="fixed inset-0 bg-gray-100 flex justify-center items-center z-50"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex flex-col items-center p-5">
                <button
                  className="fixed top-20 mt-4 font-bold size-10 rounded-full bg-red-100 text-red-500 text-2xl hover:text-gray-800"
                  onClick={() => setIsOpen(false)}
                >
                  ✕
                </button>
                <div className="flex items-center w-full md:max-w-2xl p-5 md:p-0 md:border-2 border-primary rounded-full">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="text-gray-500 hidden md:block border-none focus:outline-none rounded-l-full px-4 py-3"
                  >
                    <option value="Category">Category</option>
                    <option value="Food">Food</option>
                    <option value="Drinks">Drinks</option>
                    <option value="Desserts">Desserts</option>
                  </select>
                  <input
                    type="text"
                    className="border-none rounded-l-full md:rounded-none focus:outline-none px-4 py-3 flex-grow"
                    placeholder="What are you looking for?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button
                    onClick={handleSearchSubmit}
                    className="bg-primary text-white size-11 p-3 rounded-r-full"
                  >
                    <FaSearch />
                  </button>
                </div>
                <div className="mt-8 w-full">
                  <h3 className="text-gray-700 font-semibold mb-4">
                    Popular Search:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {popularSearches.map((item, index) => (
                      <button
                        key={index}
                        className="bg-white text-gray-700 px-4 py-2 rounded-full hover:bg-primary hover:text-white"
                        onClick={() => setSearchQuery(item)}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchPopup;
