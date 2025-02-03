import React from "react";

const BookTabe = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 p-8">
    {/* Main Heading */}
    <h1 className="text-3xl font-bold text-gray-800 mb-4">Want to reserve a table?</h1>

    {/* Subheading */}
    <p className="text-gray-600 text-center max-w-3xl mb-8">
      Remember that reservation policies can vary from one restaurant to another, 
      so it’s important to read and understand our terms before making a reservation...
    </p>

    {/* Button */}
    <button className="bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition">
      Book a Table
    </button>

    {/* Horizontal Line Divider */}
    <div className="w-full border-t border-gray-200 my-10"></div>
  </div>
  );
};

export default BookTabe;
