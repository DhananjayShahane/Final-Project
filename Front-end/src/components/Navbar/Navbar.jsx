import { Menu, Search, ShoppingCart, X } from "lucide-react"
import { Link } from "react-router-dom"

import React, { useContext, useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { motion, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons"

export default function Navbar({ setShowLogin, setIsOpen, isOpen }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalQuantity, token, setToken } = useContext(StoreContext);

  const totalQuantity = getTotalQuantity();
  const [menu, setMenu] = useState("home");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const controls = useAnimation();
  const [isSticky, setIsSticky] = useState(false);

  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

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
    <nav className="w-full bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to={'/'} className="flex items-center">
              <span className="ml-2 text-2xl font-bold text-orange-500">FRESH</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to={'/'} className="text-gray-700 hover:text-orange-600 font-medium">
              Home
            </Link>
            <button onClick={() => scrollToSection('menu')} className="text-gray-700 hover:text-orange-600 font-medium">
             Menu
            </button>
            <Link onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-orange-600 font-medium">
              Features
            </Link>
            <Link onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-orange-600 font-medium">
              Contact
            </Link>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <div className="relative flex items-center">
              <Link to={'/cart'} className="p-2 hover:bg-gray-100 rounded-full">
                <ShoppingCart className="h-6 w-6 text-gray-700" />
              </Link>
              {totalQuantity > 0 && (
                <div className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold">
                  <p>{totalQuantity}</p>
                </div>
              )}

            </div>


            {!token ? (<button onClick={() => setShowLogin(true)} className="hidden md:block bg-orange-600 hover:bg-orange-700 text-white px-3 py-2 rounded-full">Sign Up</button>
            ) : (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={toggleDropdown}
                  className="flex items-center space-x-2 p-1 text-gray-200 hover:text-yellow-200 transition-colors duration-300"
                >
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-lg text-gray-700"
                  />{" "}
                  <span className="hidden md:block text-gray-700">Account</span>
                </button>
                {isDropdownOpen && (
                  <motion.div
                    className="absolute right-0 mt-2 z-50 bg-white border border-gray-200 rounded-lg shadow-lg w-48 transition-transform transform scale-95 origin-top-right"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ul className="flex flex-col gap-1">
                      <li className="hover:bg-gray-100 hover:text-default-700">
                        <NavLink
                          to="myorders"
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

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-full" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <div className="px-4 pb-4">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500"
                />
              </div>
              <Link href="/" className="px-4 py-2 text-gray-700 hover:bg-gray-100 font-medium">
                Home
              </Link>
              <Link href="/catalog" className="px-4 py-2 text-gray-700 hover:bg-gray-100 font-medium">
               Menu
              </Link>
              <Link href="/shop" className="px-4 py-2 text-gray-700 hover:bg-gray-100 font-medium">
                Features
              </Link>
              <Link href="/contact" className="px-4 py-2 text-gray-700 hover:bg-gray-100 font-medium">
                Contact
              </Link>
              {!token ? (<div className="px-4 pt-2">
                    <button className="w-full text-white bg-orange-600 hover:bg-orange-700 px-3 py-2 rounded-xl">Sign Up</button>
                  </div> ) : (<div className="px-4 pt-2 hidden">
                    <button className="w-full text-white bg-orange-600 hover:bg-orange-700 px-3 py-2 rounded-xl">Sign Up</button>
                  </div> )
                }
              
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

