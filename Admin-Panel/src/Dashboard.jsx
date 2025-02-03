import { StoreContext } from "./context/StoreContext";
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {

  const { resturantsList, categoriesList, URL } = useContext(StoreContext);
  const displayedCategories = categoriesList.slice(0, 3);
  const displayedResturants = resturantsList.slice(0, 6);

  const [orderData, setOrderData] = useState([]);

  const totalFoodDelivered = orderData.length
  // const userBalance = 15300;
  const satisfactionRating = 98;

  // Calculate total balance from the amounts in orderData
  const userBalance = orderData.reduce((total, order) => total + order.amount, 0);

  // Format the total balance (optional)
  const formattedBalance = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(userBalance);

  const fetchOrderList = async () => {
    try {
      const response = await axios.get(`${URL}/api/orders/listorders`);
      setOrderData(response.data.data);
      console.log(response.data.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOrderList();
  }, []);

  return (
    <>
      <div className="page-content space-y-6">
        {/* <!-- top heading --> */}
        <div className="flex w-full items-center justify-between">
          <h4 className="text-xl font-medium">Dashboard</h4>
          <ol
            aria-label="Breadcrumb"
            className="hidden min-w-0 items-center gap-2 whitespace-nowrap md:flex"
          >
            <li className="text-sm">
              <a
                className="flex items-center gap-2 align-middle text-gray-800 transition-all hover:text-orange-500"
                href="#"
              >
                Admin
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  height="16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </a>
            </li>
            <li
              aria-current="page"
              className="truncate text-sm font-medium text-orange hover:text-orange-500"
            >
              Dashboard
            </li>
          </ol>
        </div>
        {/* <!-- top heading --> */}

        {/* <!-- food counts --> */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-6">
          <div className="flex flex-col justify-between overflow-hidden rounded-lg border border-gray-300 p-4 text-center transition-all duration-300 hover:border-orange-500 hover:shadow-orange-300 hover:shadow-md bg-white">
            <h4 className="mb-2 text-2xl font-semibold text-orange">{formattedBalance}</h4>
            <h6 className="mb-4 text-lg font-medium text-gray-950">
              Total Revenue
            </h6>
            <p className="text-sm font-medium text-green-500">10% Increase</p>
          </div>
          <div className="flex flex-col justify-between overflow-hidden rounded-lg border border-gray-300 p-4 text-center transition-all duration-300 hover:border-orange-500 hover:shadow-orange-300 hover:shadow-md bg-white">
            <h4 className="mb-2 text-2xl font-semibold text-orange">{totalFoodDelivered}</h4>
            <h6 className="mb-4 text-lg font-medium text-gray-950">
              New Orders
            </h6>
            <p className="text-sm font-medium text-green-500">50% Increase</p>
          </div>
          <div className="flex flex-col justify-between overflow-hidden rounded-lg border border-gray-300 p-4 text-center transition-all duration-300 hover:border-orange-500 hover:shadow-orange-300 hover:shadow-md bg-white">
            <h4 className="mb-2 text-2xl font-semibold text-orange">12.6K</h4>
            <h6 className="mb-4 text-lg font-medium text-gray-950">
              Received Orders
            </h6>
            <p className="text-sm font-medium text-green-500">34% Increase</p>
          </div>
          <div className="flex flex-col justify-between overflow-hidden rounded-lg border border-gray-300 p-4 text-center transition-all duration-300 hover:border-orange-500 hover:shadow-orange-300 hover:shadow-md bg-white">
            <h4 className="mb-2 text-2xl font-semibold text-orange">476</h4>
            <h6 className="mb-4 text-lg font-medium text-gray-950">Reviews</h6>
            <p className="text-sm font-medium text-red-500">5% Decrease</p>
          </div>
          <div className="flex flex-col justify-between overflow-hidden rounded-lg border border-gray-300 p-4 text-center transition-all duration-300 hover:border-orange-500 hover:shadow-orange-300 hover:shadow-md bg-white">
            <h4 className="mb-2 text-2xl font-semibold text-orange">865</h4>
            <h6 className="mb-4 text-lg font-medium text-gray-950">
              New Reach
            </h6>
            <p className="text-sm font-medium text-green-500">48% Increase</p>
          </div>
          <div className="flex flex-col justify-between overflow-hidden rounded-lg border border-gray-300 p-4 text-center transition-all duration-300 hover:border-orange-500 hover:shadow-orange-300 hover:shadow-md bg-white">
            <h4 className="mb-2 text-2xl font-semibold text-orange">9.2K</h4>
            <h6 className="mb-4 text-lg font-medium text-gray-950">
              Successful Orders
            </h6>
            <p className="text-sm font-medium text-red-500">8% Decrease</p>
          </div>
        </div>
        {/* <!-- food counts --> */}

        <div className="grid grid-cols-1 gap-6 2xl:grid-cols-2">
          <div className="pb-10">
            {/* <!-- category --> */}
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h3 className="text-xl font-semibold text-gray-950">
                  Category
                </h3>
                <NavLink
                  className="inline-flex items-center gap-1 text-sm font-medium text-orange hover:text-orange-500"
                  to="categories-list"
                >
                  View all
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </NavLink>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
                {displayedCategories.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="space-y-4 rounded-lg border border-gray-300 py-4 bg-white text-center transition-colors duration-300 hover:border-orange-500 hover:shadow-orange-300 hover:shadow-md"
                    >
                      <div>
                        <img
                          src={URL + "/category-images/" + item.image}
                          width="56"
                          height="56"
                          className="mx-auto h-full max-w-full"
                          alt="tea"
                        />
                      </div>
                      <h5 className="text-lg text-gray-600">{item.name}</h5>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* <!-- category --> */}

            {/* <!-- best selling products --> */}
            <div className="pt-10">
              <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
                <h3 className="text-xl font-semibold text-gray-950">
                  Best Selling Products
                </h3>
                <NavLink
                  className="inline-flex items-center gap-1 text-sm font-medium text-orange hover:text-orange-500"
                  to="dishesList"
                >
                  View all
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </NavLink>
              </div>
              <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
                {displayedResturants.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="overflow-hidden rounded-lg border border-gray-300 p-4 transition-all duration-300 hover:border-orange-500 hover:shadow-orange-300 hover:shadow-md bg-white"
                    >
                      <div className="relative divide-y divide-gray-200 overflow-hidden rounded-lg">
                        <div className="mx-auto mb-4">
                          <img
                            src={URL + "/images/" + item.image}
                            width="204"
                            height="159"
                            className="h-full w-full"
                            alt="Italian Pizza"
                          />
                        </div>
                        <div className="pt-2">
                          <h4 className="mb-2 line-clamp-1 text-xl font-semibold text-gray-800">
                            {item.name}
                          </h4>
                          <h6 className="text-lg font-semibold text-gray-500">
                            Rs.{item.price}
                          </h6>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* <!-- best selling products --> */}
          </div>

          {/* <!-- Recent Orders --> */}
          <div className="pb-10">
            <div className="rounded-lg border border-gray-300 bg-white">
              <div className="overflow-hidden p-6">
                <div className="flex flex-wrap items-center gap-4 sm:justify-between lg:flex-nowrap">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Recent Orders
                  </h2>
                  <div className="flex flex-wrap items-center justify-end gap-2">
                    <div className="relative inline-flex ul-dropdown"></div>
                    <div className="hs-dropdown relative inline-flex">
                      <button
                        type="button"
                        className="hs-dropdown-toggle flex items-center gap-2 rounded-md bg-gray-100 px-4 py-3 text-sm font-medium text-gray-700 transition-all xl:px-5"
                      >
                        Status : All
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          height="16"
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </button>
                      <div className="hs-dropdown-menu z-20 mt-4 hidden min-w-[200px] rounded-lg border border-gray-100 bg-white p-1.5 opacity-0 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] transition-[opacity,margin] hs-dropdown-open:opacity-100 :bg-gray-50">
                        <ul className="flex flex-col gap-1">
                          <li>
                            <span className="flex items-center gap-3 rounded px-3 py-2 font-normal transition-all hover:bg-gray-100 hover:text-gray-700 bg-gray-100 text-gray-700">
                              All
                            </span>
                          </li>
                          <li>
                            <span className="flex items-center gap-3 rounded px-3 py-2 font-normal transition-all hover:bg-gray-100 hover:text-gray-700 text-gray-600">
                              Paid
                            </span>
                          </li>
                          <li>
                            <span className="flex items-center gap-3 rounded px-3 py-2 font-normal transition-all hover:bg-gray-100 hover:text-gray-700 text-gray-600">
                              Cancelled
                            </span>
                          </li>
                          <li>
                            <span className="flex items-center gap-3 rounded px-3 py-2 font-normal transition-all hover:bg-gray-100 hover:text-gray-700 text-gray-600">
                              Refunded
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative overflow-x-auto">
                <div className="inline-block min-w-full align-middle">
                  <div className="overflow-hidden">
                    <table className="w-full divide-y divide-gray-200">
                      <thead className="bg-gray-100">
                        <tr className="text-start">
                          <th className="whitespace-nowrap px-6 py-3 text-start text-sm font-medium text-gray-800">
                            Order ID
                          </th>
                          <th className="whitespace-nowrap px-6 py-3 text-start text-sm font-medium text-gray-800">
                            Dish
                          </th>
                          <th className="whitespace-nowrap px-6 py-3 text-start text-sm font-medium text-gray-800">
                            Total
                          </th>
                        </tr>
                      </thead>
                      <tbody
                        className="divide-y divide-gray-200"
                        id="resentFoodOrders"
                      >
                        {orderData &&
                          orderData.map((order, index) => (
                            <tr key={index}>
                              <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-500 hover:text-primary-500">
                                <a href="#">#{order._id.slice(0, 6)}</a>
                              </td>
                              <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                              <div className="flex items-center gap-4">
                                    <div className="shrink">
                                      <div className="h-18 w-18">
                                        <img
                                          src={order.image || "./src/assets/img/dishes/margherita_pizza.jpeg"}
                                          className="h-full max-w-full"
                                          width="72"
                                          height="72"
                                          alt={order.name || "Dish Image"}
                                        />
                                      </div>
                                    </div>
                                    <div className="grow">
                                      <p className="text-sm text-gray-600"></p>
                                      <p className="text-xs text-gray-400">₹ each</p>
                                    </div>
                                  </div>
                              </td>
                              <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-500">
                                ₹{order.amount || 0}
                              </td>
                            </tr>
                          ))}

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--/ Recent Orders --> */}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
