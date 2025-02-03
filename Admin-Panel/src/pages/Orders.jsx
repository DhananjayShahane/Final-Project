import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { StoreContext } from "../context/StoreContext";
const Orders = () => {
  const { URL } = useContext(StoreContext);
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
    } catch (error) {
      console.log(error);
    }
  };

  const handleStatusChange = async (status, orderId) => {
    try {
      console.log("Selected Status:", status); // Debugging
      console.log("Order ID:", orderId); // Debugging

      const response = await axios.post(URL + "/api/orders/updatestatus", {
        orderId,
        status,
      });

      if (response.data.success) {
        await fetchOrderList();
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };


  useEffect(() => {
    fetchOrderList();
  }, []);
  return (
    <>
      <div className="page-content space-y-6">
        <div className="flex w-full items-center justify-between">
          <h4 className="text-xl font-medium">Orders List</h4>
          <ol
            aria-label="Breadcrumb"
            className="hidden min-w-0 items-center gap-2 whitespace-nowrap md:flex"
          >
            <li className="text-sm">
              <a
                className="flex items-center gap-2 align-middle text-gray-800 transition-all hover:text-orange-500-500"
                href="./orders.html"
              >
                Orders
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </a>
            </li>
            <li
              aria-current="page"
              className="truncate text-sm font-medium text-orange-500 hover:text-orange-500-500"
            >
              Orders List
            </li>
          </ol>
        </div>
        <div className="grid gap-6 xl:grid-cols-12">
          <div className="xl:col-span-12">
            <div className="space-y-6">
              {/* top section */}

              <div className="grid gap-6 sm:grid-cols-2 2xl:grid-cols-3">
                <div className="overflow-hidden rounded-lg border border-gray-200 p-6 bg-white">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/20 text-orange-500">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        height="32"
                        width="32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="20" height="12" x="2" y="6" rx="2"></rect>
                        <circle cx="12" cy="12" r="2"></circle>
                        <path d="M6 12h.01M18 12h.01"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="mb-1 text-base font-medium text-gray-500">
                        Food Delivered
                      </p>
                      <h4 className="mb-2 text-2xl font-semibold text-gray-950">
                        {totalFoodDelivered} {/* Dynamic total food delivered */}
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden rounded-lg border border-gray-200 p-6 bg-white">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500/20 text-yellow-500">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        height="32"
                        width="32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                        <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
                        <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="mb-1 text-base font-medium text-gray-500">
                        Your Balance
                      </p>
                      <h4 className="mb-2 text-2xl font-semibold text-gray-950">
                        ₹{userBalance} {/* Dynamic user balance */}
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden rounded-lg border border-gray-200 p-6 bg-white">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 text-green-500">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 576 512"
                        height="32"
                        width="32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="mb-1 text-base font-medium text-gray-500">
                        Satisfaction Rating
                      </p>
                      <h4 className="mb-2 text-2xl font-semibold text-gray-950">
                        {satisfactionRating}% {/* Dynamic satisfaction rating */}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              {/* top section */}

              {/* table section */}
              <div className="grid grid-cols-1">
                <div className="rounded-lg border border-gray-200">
                  <div className="overflow-hidden p-6 bg-white">
                    <div className="flex flex-wrap items-center gap-4 sm:justify-between lg:flex-nowrap">
                      <h2 className="text-xl font-semibold text-gray-800">
                        Order History
                      </h2>
                      <div className="flex flex-wrap items-center justify-end gap-2">
                        <div className="hs-dropdown relative inline-flex">
                          <button
                            type="button"
                            className="hs-dropdown-toggle flex items-center gap-2 rounded-md bg-gray-100 px-4 py-3 text-sm font-medium text-gray-700 transition-all xl:px-5"
                          >
                            Sort : Ascending{" "}
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
                              <path d="m6 9 6 6 6-6"></path>
                            </svg>
                          </button>
                          <div className="hs-dropdown-menu z-20 mt-4 hidden min-w-[200px] rounded-lg border border-gray-100 bg-white p-1.5 opacity-0 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] transition-[opacity,margin] hs-dropdown-open:opacity-100 ">
                            <ul className="flex flex-col gap-1">
                              <li>
                                <span className="flex items-center gap-3 rounded px-3 py-2 font-normal transition-all hover:bg-gray-100 hover:text-gray-700 bg-gray-100 text-gray-700">
                                  Ascending
                                </span>
                              </li>
                              <li>
                                <span className="flex items-center gap-3 rounded px-3 py-2 font-normal transition-all hover:bg-gray-100 hover:text-gray-700 text-gray-600">
                                  Descending
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="hs-dropdown relative inline-flex">
                          <button
                            type="button"
                            className="hs-dropdown-toggle flex items-center gap-2 rounded-md bg-gray-100 px-4 py-3 text-sm font-medium text-gray-700 transition-all xl:px-5"
                          >
                            Status : All{" "}
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
                              <path d="m6 9 6 6 6-6"></path>
                            </svg>
                          </button>
                          <div className="hs-dropdown-menu z-20 mt-4 hidden min-w-[200px] rounded-lg border border-gray-100 bg-white p-1.5 opacity-0 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] transition-[opacity,margin] hs-dropdown-open:opacity-100 ">
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
                  <div className="relative overflow-x-auto bg-white">
                    <div className="inline-block min-w-full align-middle">
                      <div className="overflow-hidden rounded-lg shadow-lg bg-white">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr className="text-start">
                              <th className="whitespace-nowrap px-6 py-3 text-sm font-semibold text-gray-700">
                                Date
                              </th>
                              <th className="whitespace-nowrap px-6 py-3 text-sm font-semibold text-gray-700">
                                Order ID
                              </th>
                              <th className="whitespace-nowrap px-6 py-3 text-sm font-semibold text-gray-700">
                                Dish
                              </th>
                              <th className="whitespace-nowrap px-6 py-3 text-sm font-semibold text-gray-700">
                                Total
                              </th>
                              <th className="whitespace-nowrap px-6 py-3 text-sm font-semibold text-gray-700">
                                Status
                              </th>
                              <th className="whitespace-nowrap px-6 py-3 text-sm font-semibold text-gray-700">
                                Table No
                              </th>
                              <th className="whitespace-nowrap px-6 py-3 text-sm font-semibold text-gray-700">
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {orderData &&
                              orderData.map((order) => (

                                <tr key={order._id} className="hover:bg-gray-50">
                                  {/* Date */}
                                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-600">
                                    {new Date(order.date).toLocaleDateString()} {/* Format Date */}
                                  </td>

                                  {/* Order ID */}
                                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-blue-600 hover:text-blue-800">
                                    <a href={`/yum_r/admin/orders/${order._id}`}>{order._id}</a>
                                  </td>

                                  {/* Dish Details */}
                                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">

                                    <div className="flex items-center gap-4 mb-2">
                                      <div className="shrink-0">
                                        <img
                                          src={`/yum_r/assets/`}
                                          className="h-12 w-12 rounded-md"
                                          width="48"
                                          height="48"
                                          alt={"order"}
                                        />
                                      </div>
                                      <div>
                                        {order.items.map((item, index) => (
                                          <p className="text-sm text-gray-600">{item.name} (₹ {item.price}) (x{item.quantity}) </p>
                                        ))}
                                      </div>
                                    </div>
                                  </td>

                                  {/* Total Amount */}
                                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-600">
                                    ₹{order.amount}
                                  </td>

                                  {/* Status */}
                                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                                    <span
                                      className={`px-3 py-1 text-xs font-semibold rounded-full ${order.status === "Food Processing"
                                        ? "bg-yellow-100 text-yellow-800"
                                        : order.status === "Completed"
                                          ? "bg-green-200 text-green-700"
                                          : "bg-gray-200 text-gray-700"
                                        }`}
                                    >
                                      {order.status}
                                    </span>
                                  </td>
                                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">

                                    {/* {order.address.map((item, index) => (
                                        <p>{item.tableNumber}</p>
                                      ))} */}
                                  </td>

                                  {/* Action */}
                                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                                    <select
                                      onChange={(event) => {
                                        handleStatusChange(event.target.value, order._id);
                                      }}
                                      value={order.status}
                                      className="bg-gray-100 text-gray-700 border border-gray-300 rounded-md px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    >
                                      <option value="Food Processing">Food Processing</option>
                                      <option value="Completed">Completed</option>
                                      <option value="Pending">Pending</option>
                                      <option value="Cancelled">Cancelled</option>
                                    </select>
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
              {/* table section */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
