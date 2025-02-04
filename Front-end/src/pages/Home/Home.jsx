import React, { useState, useContext } from "react";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import { StoreContext } from "../../context/StoreContext";
import HeroSection from "../../components/HeroSection/HeroSection";
import TestimonialSection from "../../components/Testimonial/Testimonial";
import FilterSection from "../../components/FilterSection/FilterSection";
import { FaFilter } from "react-icons/fa"; // Import Filter icon
import FoodFeatures from "../../components/FoodFeatures/FoodFeatures";

const Home = () => {
  const [category, setCategory] = useState("All");
  const { isLoading } = useContext(StoreContext);
  const [isFilterPopupOpen, setIsFilterPopupOpen] = useState(false); // State to toggle popup
  const [filters, setFilters] = useState({
    price: null,
    rating: null,
  }); // State to hold filter criteria

  // Function to toggle the filter popup
  const toggleFilterPopup = () => {
    setIsFilterPopupOpen((prev) => !prev);
  };

  // Function to close the popup
  const closePopup = () => {
    setIsFilterPopupOpen(false);
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      {/* Hero Section */}

      {/* Food Section */}
      <section className="md:my-20 my-10 max-w-7xl mx-auto px-4 min-h-96" id="menu">
        <div className="lg:flex w-full md:mt-6 mt-2 gap-10">
          {/* Filter Section */}
          <ExploreMenu 
            category={category} 
            setCategory={setCategory} 
            isLoading={isLoading}
            setFilters={setFilters} // Pass setFilters to ExploreMenu
          />

          {/* Menu Content Wrapper */}
          <div className="px-0 lg:w-10/12 mainFoodsWrapper">
            {/* Filter Popup Button */}
            <div className="mb-4 flex md:justify-between items-center gap-x-4">
              <h3 className="text-2xl font-semibold text-center">Explore Our Menu</h3>
              <button
                onClick={toggleFilterPopup}
                className="flex items-center gap-2 text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-full shadow-lg transition duration-300"
              >
                <FaFilter className="text-lg" />
                Filter
              </button>
            </div>

            {/* Filter Section Popup */}
            {/* {isFilterPopupOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white p-6 rounded-lg max-w-md w-full">
                  <FilterSection onFilterChange={setFilters} closePopup={closePopup} />
                </div>
              </div>
            )} */}

            {/* Food Section */}
            <FoodDisplay category={category} filters={filters} />
            {/* / Food Section */}
          </div>
        </div>
      </section>
      {/* / Food Section */}

      {/* Testimonial Section */}
      <TestimonialSection />
      {/* Testimonial Section */}

      <FoodFeatures/>
    </>
  );
};

export default Home;
