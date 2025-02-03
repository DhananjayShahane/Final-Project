import React, { useContext, useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons"; // Added user icon
import Logo from "../Logo/Logo";
import { motion, useAnimation } from "framer-motion";

const Navbar = ({ setShowLogin ,setIsOpen , isOpen }) => {
  const { getTotalQuantity, token, setToken } = useContext(StoreContext);
  
  const totalQuantity = getTotalQuantity();
  const [menu, setMenu] = useState("home");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const controls = useAnimation();
  const [isSticky, setIsSticky] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
        controls.start({ opacity: 1, y: 0 });
      } else {
        setIsSticky(false);
        controls.start({ opacity: 0.8, y: -5 });
      }
    };

    document.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [controls])

  const logOut = () => {
    localStorage.removeItem("token");
    setToken("");
    toggleDropdown();
    navigate("/");
  };

  return (
    <motion.div
      className={`p-4 flex items-center justify-between bg-primary transition-all duration-300 ${
        isSticky
          ? "fixed top-0 left-0 w-full z-50 rounded-b-none"
          : "absolute z-50 w-full rounded-b-3xl"
      }`}
      animate={controls}
    >
      <Link to="/">
        <Logo />
      </Link>
      <ul className="flex space-x-6 hidden md:flex">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={`text-white ${
            menu === "home" ? "font-semibold text-yellow-200" : ""
          } transition-colors duration-300`}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={`text-white ${
            menu === "menu" ? "font-semibold text-yellow-200" : ""
          } transition-colors duration-300`}
        >
          Menu
        </a>
        <a
          href="#"
          onClick={() => setMenu("about")}
          className={`text-white ${
            menu === "about" ? "font-semibold text-yellow-200" : ""
          } transition-colors duration-300`}
        >
          About
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={`text-white ${
            menu === "contact-us" ? "font-semibold text-yellow-200" : ""
          } transition-colors duration-300`}
        >
          Contact Us
        </a>
      </ul>
      <div className="flex items-center space-x-4">
        <div onClick={()=>{setIsOpen(true)}} className="flex gap-x-3 cursor-pointer items-center border-r-2 border-white pr-3">
          <FontAwesomeIcon
            icon={faSearch}
            
            className="text-white text-lg hover:text-yellow-200 transition-colors duration-300"
          />
          <span className="text-white hidden md:block">Search</span>
        </div>
        <div className="relative flex items-center">
          <Link to="/cart" className="text-gray-200">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="text-lg hover:text-yellow-200 transition-colors duration-300"
            />
          </Link>
          {totalQuantity > 0 && (
            <div className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold">
              <p>{totalQuantity}</p>
            </div>
          )}
        </div>
        {!token ? (
          <button
            onClick={() => setShowLogin(true)}
            className="bg-black text-white py-2 px-4 rounded-3xl transition-colors duration-300"
          >
            Sign in
          </button>
        ) : (
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-2 p-1 text-gray-200 hover:text-yellow-200 transition-colors duration-300"
            >
              <FontAwesomeIcon
                icon={faUser}
                className="text-lg text-gray-200"
              />{" "}
              <span className="hidden md:block text-white">Account</span>
            </button>
            {isDropdownOpen && (
              <motion.div
                className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg w-48 transition-transform transform scale-95 origin-top-right"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ul className="flex flex-col gap-1">
                  <li className="hover:bg-gray-100 hover:text-default-700">
                    <NavLink
                     to="profile"
                    >
                      <span className="flex items-center gap-3 rounded px-3 py-2 font-normal transition-all">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          height="16"
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <circle cx="12" cy="10" r="3"></circle>
                          <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
                        </svg>
                        Profile
                      </span>
                    </NavLink>
                  </li>
                  <li className="hover:bg-gray-100 hover:text-default-700">
                    <NavLink
                      to="orders"
                    >
                      <span className="flex items-center gap-3 rounded px-3 py-2 font-normal text-default-600 transition-all">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          height="16"
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="8" cy="21" r="1"></circle>
                          <circle cx="19" cy="21" r="1"></circle>
                          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                        </svg>
                        Orders
                      </span>
                    </NavLink>
                  </li>
                  <li className="hover:bg-gray-100 hover:text-default-700">
                    <button
                      className="flex w-full items-center gap-3 rounded px-3 py-2 font-normal text-default-600 transition-all"
                      onClick={logOut}
                    >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        height="16"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                      Log Out
                    </button>
                  </li>
                </ul>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
