import React from 'react';

const NoItemsFound = () => {
  return (
    <div className="flex items-center justify-center h-64">
      <p className="text-lg text-gray-500">No food items found for this category.</p>
    </div>
  );
};

export default NoItemsFound;
