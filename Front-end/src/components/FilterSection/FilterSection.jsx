import React, { useState, useEffect } from "react";

const FilterSection = ({ filters, onFilterChange, closePopup }) => {
  // Initialize minPrice and maxPrice from the filters prop or set defaults
  const [minPrice, setMinPrice] = useState(filters?.minPrice || 0);
  const [maxPrice, setMaxPrice] = useState(filters?.maxPrice || 500);
  const [isApplyDisabled, setIsApplyDisabled] = useState(true);

  // Check if the Apply Filters button should be disabled
  useEffect(() => {
    // Disable button if values are the same as initial filters
    setIsApplyDisabled(
      minPrice === filters?.minPrice && maxPrice === filters?.maxPrice
    );
  }, [minPrice, maxPrice, filters]);

  const handleApplyFilters = () => {
    // Apply the filter changes and close the popup
    onFilterChange({ minPrice, maxPrice });
    closePopup();
  };

  return (
    <div className="p-4 z-50">
      <h2 className="text-lg font-semibold mb-4">Apply Filters</h2>

      {/* Price Range Filter */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Price Range</label>

        <div className="flex space-x-4">
          {/* Min Price */}
          <div className="w-1/2">
            <label htmlFor="min-price" className="block text-sm font-medium">Min Price</label>
            <input
              id="min-price"
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              min="0"
              placeholder="Min Price"
            />
          </div>

          {/* Max Price */}
          <div className="w-1/2">
            <label htmlFor="max-price" className="block text-sm font-medium">Max Price</label>
            <input
              id="max-price"
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              min="0"
              placeholder="Max Price"
            />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        <button
          onClick={handleApplyFilters}
          className={`bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg ${isApplyDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={isApplyDisabled}
        >
          Apply Filters
        </button>
        <button
          onClick={closePopup}
          className="bg-gray-400 hover:bg-gray-500 text-white font-semibold px-4 py-2 rounded-lg"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default FilterSection;
