import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import Pagination from "../components/Pagination";
import useNotAvailable from "../helper/useNotAvailable";
import foodListSvg from "../assets/images/svg/foodList.svg"
 
const RestaurantsList = () => {
  const { reactorsList, removeRestoruntSroreList, URL } =
    useContext(StoreContext);

  const restaurantListUi = useNotAvailable(
    reactorsList,
    "No available restaurant, Please add a restaurant",
    foodListSvg
  );

  return (
    <>
      <div className="page-content">
        {/* top header */}
        <div className="flex w-full items-center justify-between">
          <h4 className="text-xl font-medium">Restaurants List</h4>
          <ol
            aria-label="Breadcrumb"
            className="hidden min-w-0 items-center gap-2 whitespace-nowrap md:flex"
          >
            <li className="text-sm">
              <a
                className="flex items-center gap-2 align-middle text-default-800 transition-all hover:text-primary-500"
                href="/yum_b/admin/restaurants"
              >
                Restaurants
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
              className="truncate text-sm font-medium text-primary hover:text-primary-500"
            >
              Restaurants List
            </li>
          </ol>
        </div>
        {/* top header */}

        {restaurantListUi || (
          <>
            <div className="mb-6 grid gap-6 md:grid-cols-2 2xl:grid-cols-4">
              {/* cards */}
              {reactorsList.map((info) => {
                return (
                  <div
                    key={info._id}
                    className="relative rounded-lg border bg-white border-default-200 p-6"
                  >
                    <img
                      src={`${URL}/restaurant-images/` + info.logo}
                      width="56"
                      height="56"
                      className="mx-auto mb-4 h-14 w-14"
                      alt="restaurant"
                    />
                    <div className="flex absolute top-5 right-5 items-center">
                      <button
                        onClick={() => {
                          removeRestoruntSroreList(info._id);
                        }}
                        className="bg-gray-100 p-2 rounded-full text-red-500 hover:bg-red-400 hover:text-white cursor-pointer transition-colors"
                      >
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          height="20"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M3 6h18"></path>
                          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                          <line x1="10" x2="10" y1="11" y2="17"></line>
                          <line x1="14" x2="14" y1="11" y2="17"></line>
                        </svg>
                      </button>
                    </div>

                    <h4 className="text-center text-base font-medium uppercase text-default-900">
                      {info.name}
                    </h4>
                    <h4 className="mb-10 text-center text-base font-medium text-default-600">
                      {info.ownerName}
                    </h4>
                    <div className="mb-8 flex justify-around">
                      <div className="text-center">
                        <h4 className="mb-2.5 text-lg font-medium text-primary">
                          {info.openingHours}
                        </h4>
                        <h5 className="text-sm text-default-800">
                          opening Hours
                        </h5>
                      </div>
                      <div className="border-s border-default-200"></div>
                      <div className="text-center">
                        <h4 className="mb-2.5 text-lg font-medium text-primary">
                          {info.status}
                        </h4>
                        <h5 className="text-sm text-default-800">Status</h5>
                      </div>
                    </div>
                    <div className="mb-6 space-y-5">
                      <div className="flex gap-3">
                        <div className="flex-shrink">
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-default-800"
                            height="20"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                        </div>
                        <p className="d text-sm text-default-700">
                          {info.description}
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <div className="flex-shrink">
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-default-800"
                            height="20"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="20"
                              height="16"
                              x="2"
                              y="4"
                              rx="2"
                            ></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                          </svg>
                        </div>
                        <p className="d text-sm text-default-700">
                          {info.email}
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <div className="flex-shrink">
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-default-800"
                            height="20"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                          </svg>
                        </div>
                        <p className="d text-sm text-default-700">
                          {info.contactNumber}
                        </p>
                      </div>
                    </div>
                    <div className="text-center">
                      <a
                        className="inline-flex rounded-lg bg-primary px-8 py-2.5 font-medium text-white transition-all hover:bg-primary-500"
                        href="#"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                );
              })}
              {/* cards */}
            </div>
            <Pagination />
          </>
        )}
      </div>
    </>
  );
};

export default RestaurantsList;
