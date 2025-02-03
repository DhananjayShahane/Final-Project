import React, { useState, useEffect } from "react";
import image from "../../assets/interneSVG.svg"

const InternetStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    !isOnline && (
      <div className="fixed z-10 flex justify-center items-center left-0 right-0 bg-white text-white text-center py-2">
        <div className="flex flex-col justify-items-center justify-center">
          <img className="w-100 mb-5" src={image} alt="" />
          <h1 className="text-5xl font-extrabold text-red-500">No Internet</h1>
          <p className="text-2xl font-medium text-gray-800">Connection Lost</p>
          <p className="text-xl text-gray-800 mt-4">
            Please check your network settings and try again.
          </p>
        </div>
      </div>
    )
  );
};

export default InternetStatus;
