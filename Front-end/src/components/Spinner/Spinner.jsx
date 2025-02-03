// Spinner.js
import React from "react";

const Spinner = () => {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-t-4 border-green-500 border-solid rounded-full animate-spin"></div>
          <p className="mt-4 text-xl text-gray-700">
            Loading delicious food...
          </p>
        </div>
      </div>
    </>
  );
};

export default Spinner;
