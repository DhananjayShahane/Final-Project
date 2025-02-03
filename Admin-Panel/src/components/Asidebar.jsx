import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Asidebar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (item) => {
    if (item !== activeItem) {
      setActiveItem(item);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    handleDocumentClick
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };

  }, []);

  const handleDocumentClick = (event) => {
    if (!event.target.closest('.secondary-sidebar') && !event.target.closest('.nav-item')) {
      setActiveItem(null);
    }
  };

  return (
    <>
      <div className="flex">
        <div className="side-content-wrap overflow-auto hidden md:block">
          <div
            className="sidebar-left open bg-gray-800 text-white h-screen"
            data-perfect-scrollbar=""
            data-suppress-scroll-x="true"
          >
            <ul className="navigation-left">
              <li className="nav-item" onMouseEnter={() => handleMouseEnter(null)}>
                <NavLink
                  className="nav-item-hold nav-item text-black"
                  activeclassname="active"
                  exact="true"
                  to="/"
                >
                  <i className="i-Bar-Chart text-3xl"></i>
                  <p className="ml-2">Dashboard</p>
                </NavLink>
              </li>

              <li className="nav-item" onMouseEnter={() => handleMouseEnter(null)}>
                <NavLink
                  className="nav-item-hold nav-item flex items-center p-4 transition-all text-black hover:bg-orange-50 hover:text-orange-500"
                  to="orders"
                >
                  <i className="i-File-Chart text-3xl"></i>
                  <p className="ml-2">Orders</p>
                </NavLink>
              </li>

              <li
                className="nav-item"
                onMouseEnter={() => handleMouseEnter("dishes")}
              >
                <div
                  className="nav-item-hold flex items-center p-4 transition-all text-black hover:bg-orange-50 hover:text-orange-500"
                >
                  <div className="icons-wrapper flex justify-center items-center">
                    <img
                      src="./src/assets/images/svg/dishes.svg"
                      className="w-12 h-12"
                      alt="dish-icon"
                    />
                  </div>
                  <p className="ml-2">Dishes</p>
                </div>
              </li>

              {/* <li
                className="nav-item"
                onMouseEnter={() => handleMouseEnter("customers")}
              >
                <div className="nav-item-hold flex items-center p-4 transition-all text-black hover:bg-orange-50 hover:text-orange-500 cursor-pointer">
                  <i className="i-Find-User text-3xl"></i>
                  <p className="ml-2">Customers</p>
                </div>
              </li> */}

              {/* <li
                className="nav-item"
                onMouseEnter={() => handleMouseEnter("branch")}
              >
                <div className="nav-item-hold flex items-center p-4 transition-all text-black hover:bg-orange-50 hover:text-orange-500 cursor-pointer">
                  <i className="i-Shop text-3xl"></i>
                  <p className="ml-2">Branch</p>
                </div>
              </li> */}

              {/* <li className="nav-item" onMouseEnter={() => handleMouseEnter(null)}>
                <NavLink
                  className="nav-item-hold flex items-center p-4 transition-all text-black hover:bg-orange-50 hover:text-orange-500"
                  to="/wallet"
                >
                  <i className="i-Wallet text-3xl"></i>
                  <p className="ml-2">Wallet</p>
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>

        <div
          className={`secondary-sidebar mt-10 fixed top-10 z-10 shadow w-full max-w-[200px] bg-white text-white h-screen transition-all ${activeItem ? "" : "hidden"
            }`}
          data-perfect-scrollbar=""
          data-suppress-scroll-x="true"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
        >
          {activeItem === "customers" && (
            <ul className="mb-4 childNav">
              <li>
                <a
                  href="./pages/customers/customers.html"
                  className="flex items-center p-4 transition-all text-black hover:bg-orange-50 hover:text-orange-500"
                >
                  <i className="nav-icon i-Basket-Items text-base mr-2"></i>
                  <span className="item-name">Customers List</span>
                </a>
              </li>
              <li>
                <a
                  href="./pages/customers/add-customer.html"
                  className="flex items-center p-4 transition-all text-black hover:bg-orange-50 hover:text-orange-500"
                >
                  <i className="nav-icon i-Add-User text-base mr-2"></i>
                  <span className="item-name">Add Customer</span>
                </a>
              </li>
            </ul>
          )}
          {activeItem === "branch" && (
            <ul className="mb-4 childNav">
              <li>
                <NavLink
                  to="add-branch"
                  className="flex items-center p-4 transition-all text-black hover:bg-orange-50 hover:text-orange-500"
                >
                  <i className="nav-icon i-Add-File text-base mr-2"></i>
                  <span className="item-name">Add Branch</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="branch-list"
                  className="flex items-center p-4 transition-all text-black hover:bg-orange-50 hover:text-orange-500"
                >
                  <i className="nav-icon i-Add-File text-base mr-2"></i>
                  <span className="item-name">Branch List</span>
                </NavLink>
              </li>

            </ul>
          )}
          {activeItem === "dishes" && (
            <ul className="mb-4 childNav">

              <li>
                <NavLink
                  to="dishesList"
                  className="flex items-center p-4 transition-all text-black hover:bg-orange-50 hover:text-orange-500"
                >
                  <i className="nav-icon i-Food text-base mr-2"></i>
                  <span className="item-name">Dishes List</span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="add-dish"
                  className="flex items-center p-4 transition-all text-black hover:bg-orange-50 hover:text-orange-500 hover:bg-orange-50 hover:text-orange-500"
                >
                  <i className="nav-icon mr-2"></i>
                  <span className="item-name">Add Dish</span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/categories-list"
                  className="flex items-center p-4 transition-all text-black hover:bg-orange-50 hover:text-orange-500"
                >
                  <i className="nav-icon fa fa-cogs text-base mr-2"></i>
                  <span className="item-name">Category List</span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/add-categories"
                  className="flex items-center p-4 transition-all text-black hover:bg-orange-50 hover:text-orange-500"
                >
                  <i className="nav-icon fa fa-cogs text-base mr-2"></i>
                  <span className="item-name">Add Category</span>
                </NavLink>
              </li>
              
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Asidebar;
