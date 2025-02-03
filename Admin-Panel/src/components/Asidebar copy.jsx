import { NavLink } from "react-router-dom";

const Asidebar = () => {
  return (
    <>
      <div className="side-content-wrap overflow-auto hidden md:block">
        <div
          className="sidebar-left open"
          data-perfect-scrollbar=""
          data-suppress-scroll-x="true"
        >
          <ul className="navigation-left">
            <li className="nav-item">
              <NavLink
                className="nav-item-hold nav-item"
                activeclassname="active"
                exact="true"
                to="/"
              >
                <i className="i-Bar-Chart text-3xl"></i>
                <p>Dashboard</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-item-hold nav-item" to="orders">
                <i className="i-File-Chart text-3xl"></i>
                <p>Orders</p>
              </NavLink>
            </li>
            <li className="nav-item" data-item="dishes">
              <NavLink className="nav-item-hold nav-item" to="dishes">
                <div className="icons-wrapper flex justify-center items-center">
                  <img
                    src="./src/assets/images/svg/dishes.svg"
                    className="w-12 h-12"
                    alt="dish-icon"
                  />
                </div>
                <p>Dishes</p>
              </NavLink>
            </li>
            <li className="nav-item" data-item="dishesList">
              <NavLink className="nav-item-hold nav-item" to="/dishesList">
                <i className="i-Gear text-3xl"></i>
                <p>Manage List</p>
              </NavLink>
            </li>

            <li className="nav-item nav-item-hold py-3" data-item="customers">
              <i className="i-Find-User text-3xl"></i>
              <p>Customers</p>
            </li>
            <li className="nav-item nav-item-hold py-3" data-item="branch">
              <i className="i-Shop text-3xl"></i>
              <p>Branch</p>
            </li>

            <li className="nav-item nav-item-hold py-3" data-item="sellers">
              <i className="i-Truck text-3xl"></i>
              <p>Sellers</p>
            </li>
            <li className="nav-item">
              <NavLink className="nav-item-hold" to="/">
                <i className="i-Wallet text-3xl"></i>
                <p>Wallet</p>
              </NavLink>
            </li>
          </ul>
        </div>
        <div
          className="sidebar-left-secondary shadow"
          data-perfect-scrollbar=""
          data-suppress-scroll-x="true"
        >
          {/* <!-- customer list --> */}
          <ul
            className="mb-4 childNav"
            data-parent="customers"
            style={{ display: "none" }}
          >
            <li>
              <a href="./pages/customers/customers.html">
                <i className="nav-icon i-Basket-Items text-base mr-2"></i>
                <span className="item-name">Customers List</span>
              </a>
            </li>
            <li>
              <a href="./pages/customers/add-customer.html">
                <i className="nav-icon i-Add-User text-base mr-2"></i>
                <span className="item-name">Add Customer</span>
              </a>
            </li>
          </ul>
          {/* <!-- / customer list --> */}

          {/* <!-- branch list --> */}
          <ul
            className="mb-4 childNav"
            data-parent="branch"
            style={{ display: "none" }}
          >
            <li>
              <a href="./pages/branch/branch.html">
                <i className="nav-icon i-Add-File text-base mr-2"></i>
                <span className="item-name">Branch List</span>
              </a>
            </li>
            <li>
              <a href="./pages/branch/add-branch.html">
                <i className="nav-icon i-Add-File text-base mr-2"></i>
                <span className="item-name">Add Branch</span>
              </a>
            </li>
          </ul>
          {/* <!-- / branch list --> */}

          {/* <!-- dishes list --> */}
          <ul
            className="mb-4 childNav"
            data-parent="dishes"
            style={{ display: "none" }}
          >
            <li>
              <a href="./pages/dishes/dishes.html">
                <i className="nav-icon i-Food text-base mr-2"></i>
                <span className="item-name">Dishes List</span>
              </a>
            </li>
            <li>
              <a href="./pages/dishes/add-dish.html">
                <i className="nav-icon mr-2"></i>
                <span className="item-name">Add Dish</span>
              </a>
            </li>
            <li>
              <a href="./pages/dishes/manage-categories.html">
                <i className="nav-icon fa fa-cogs text-base mr-2"></i>
                <span className="item-name">Manage Category</span>
              </a>
            </li>
          </ul>
          {/* <!-- / dishes list --> */}

          {/* <!-- seller list --> */}
          <ul
            className="mb-4 childNav"
            data-parent="sellers"
            style={{ display: "none" }}
          >
            <li>
              <a href="./pages/seller/serllers.html">
                <i className="nav-icon i-Administrator text-base mr-2"></i>
                <span className="item-name">Sellers List</span>
              </a>
            </li>
            <li>
              <a href="./pages/seller/add-seller.html">
                <i className="nav-icon i-Add-User text-base mr-2"></i>
                <span className="item-name">Add Seller</span>
              </a>
            </li>
          </ul>
          {/* <!--/ seller list --> */}
        </div>
      </div>
    </>
  );
};

export default Asidebar;
