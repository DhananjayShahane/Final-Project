import React, { useRef, useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const ExploreMenu = ({ category, setCategory }) => {
  const { URL, categoriesList } = useContext(StoreContext);
  const scrollRef = useRef(null);

  return (
    <div className="w-full lg:w-2/12 md:sticky top-16">
      <div className="flex flex-col lg:flex-row lg:h-full">
        <div
          ref={scrollRef}
          className="custom-scroll w-full overflow-x-auto lg:overflow-y-auto flex lg:flex-col space-x-4 lg:space-x-0 lg:space-y-2 p-2"
        >
          <h2 className="text-xl font-semibold mb-4">
            {category === "All" ? "Explore Categories" : category}
          </h2>

          {categoriesList ? (
            <nav className="flex flex-row lg:flex-col gap-2 mb-6" aria-label="Category Tabs">
              <button
                onClick={() => setCategory("All")}
                className={`flex items-center gap-3 p-3 rounded-lg transition duration-300 min-w-[150px] lg:min-w-full
                  ${category === "All" ? "border-orange-400 border bg-orange-50" : "bg-gray-100 hover:bg-gray-200"}`}
              >
                <p className="text-md font-medium">View All</p>
              </button>

              {categoriesList.map((item) => {
                const isActive = category === item.name;
                return (
                  <button
                    key={item.name}
                    onClick={() => setCategory(item.name)}
                    className={`flex items-center gap-3 p-3 rounded-lg transition duration-300 min-w-[150px] lg:min-w-full
                      ${isActive ? "border-orange-400 border bg-orange-50" : "bg-gray-100 hover:bg-gray-200"}`}
                  >
                    <img
                      src={`${URL}/category-images/${item.image}`}
                      className="w-12 h-12 rounded-full object-cover"
                      alt={item.name}
                    />
                    <p className="text-md font-medium">{item.name}</p>
                  </button>
                );
              })}
            </nav>
          ) : (
            <div className="flex flex-row lg:flex-col gap-2 mb-6 animate-pulse">
              {/* View All Skeleton */}
              <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-200 min-w-[150px] lg:min-w-full h-14"></div>

              {/* Category Skeletons */}
              {[...Array(5)].map((_, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gray-200 min-w-[150px] lg:min-w-full h-14">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div className="h-4 bg-gray-400 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExploreMenu;
