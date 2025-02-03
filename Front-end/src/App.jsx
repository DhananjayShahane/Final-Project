import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import Payment from "./pages/Payment/Payment";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InternetStatus from "./components/InternetStatus/InternetStatus";
import SearchPopup from "./components/SearchPopup/SearchPopup";
import useIsOnline from "./helper/useIsOnline";
import Verify from "./pages/Verify/Verify";
import MyOrders from "./pages/MyOders/MyOrders";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const isOnline = useIsOnline();

  return (
    <>
      <ToastContainer />
      {isOnline ? (
        <>
          {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
          {isOpen && <SearchPopup setIsOpen={setIsOpen} isOpen={isOpen} />}
          <>
            <div>
              <Navbar
                setShowLogin={setShowLogin}
                setIsOpen={setIsOpen}
                isOpen={isOpen}
              />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart setShowLogin={setShowLogin} />} />
                <Route
                  path="/order"
                  element={<PlaceOrder />}
                />
                <Route path="/payment" element={<Payment />} />
                <Route path="/verify" element={<Verify/>} />
                <Route path="/myorders" element={<MyOrders/>} />
              </Routes>
            </div>
            <Footer />
          </>
        </>
      ) : (
        <div className="flex justify-center text-center items-center w-full">
          <InternetStatus />
        </div>
      )}
    </>
  );
};

export default App;
