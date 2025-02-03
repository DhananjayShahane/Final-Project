import { NavLink } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import { useContext } from "react";
const DishList = () => {

  const {resturantsList,removeRestoruntFood,URL} = useContext(StoreContext)

  return (
    <>
      <div className="page-content space-y-6">
        <div className="flex w-full items-center justify-between">
          <h4 className="text-xl font-medium">Dishes List</h4>
          <ol
            aria-label="Breadcrumb"
            className="hidden min-w-0 items-center gap-2 whitespace-nowrap md:flex"
          >
            <li className="text-sm">
              <a
                className="flex items-center gap-2 align-middle text-gray-800 transition-all hover:text-orange-400-500"
                href="./dishes.html"
              >
                Dishes
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
              className="truncate text-sm font-medium text-orange-400 hover:text-orange-400-500"
            >
              Dishes List
            </li>
          </ol>
        </div>
        <div className="grid grid-cols-1">
          <div className="rounded-lg border border-gray-200 bg-white">
            <div className="overflow-hidden px-6 py-4 ">
              <div className="flex flex-wrap items-center justify-between gap-4 md:flex-nowrap">
                <h2 className="text-xl font-semibold text-gray-800">
                  Dishes List
                </h2>
                <div className="flex flex-wrap items-center gap-4">
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
                    <div className="hs-dropdown-menu z-20 mt-4 hidden min-w-[200px] rounded-lg border border-gray-100 bg-white p-1.5 opacity-0 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-gray-50">
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
                        <li>
                          <span className="flex items-center gap-3 rounded px-3 py-2 font-normal transition-all hover:bg-gray-100 hover:text-gray-700 text-gray-600">
                            Trending
                          </span>
                        </li>
                        <li>
                          <span className="flex items-center gap-3 rounded px-3 py-2 font-normal transition-all hover:bg-gray-100 hover:text-gray-700 text-gray-600">
                            Recent
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <NavLink
                    to="/dishes"
                    className="inline-flex rounded-md bg-orange-400 px-6 py-2.5 text-sm text-white hover:bg-orange-400-500 "
                  >
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="me-2 inline-flex align-middle"
                      height="20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                    Add Dish
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="relative overflow-x-auto">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr className="text-start">
                        <th className="whitespace-nowrap px-6 py-3 text-start text-sm font-medium text-gray-800">
                          Dish Image
                        </th>
                        <th className="whitespace-nowrap px-6 py-3 text-start text-sm font-medium text-gray-800">
                          Dish Name
                        </th>
                        <th className="whitespace-nowrap px-6 py-3 text-start text-sm font-medium text-gray-800">
                          Category
                        </th>
                        <th className="whitespace-nowrap px-6 py-3 text-start text-sm font-medium text-gray-800">
                          Price
                        </th>
                        <th className="whitespace-nowrap px-6 py-3 text-start text-sm font-medium text-gray-800">
                          Description
                        </th>
                        <th className="whitespace-nowrap px-6 py-3 text-start text-sm font-medium text-gray-800">
                          Status
                        </th>
                        <th className="whitespace-nowrap px-6 py-3 text-start text-sm font-medium text-gray-800">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {resturantsList.map((item, index) => {
                        return (
                          <>
                            <tr key={index}>
                              <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                                <a className="flex items-center gap-3">
                                  <div className="h-12 w-12 shrink">
                                    <img
                                      src={`${URL}/images/`+item.image}
                                      height="48"
                                      width="48"
                                      alt={item.name}
                                      className="h-full max-w-full"
                                    />
                                  </div>
                                </a>
                              </td>
                              <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-500">
                                <p className="text-base text-gray-500 transition-all hover:text-orange-400">
                                  {item.name}
                                </p>
                              </td>
                              <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-500">
                                {item.category}
                              </td>
                              <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-500">
                                {item.price}
                              </td>
                              <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-500">
                                {item.description}
                              </td>
                              <td className="px-6 py-4">
                                <span className="rounded-md px-3 py-1 text-xs font-medium bg-green-500/10 text-green-500">
                                  Available
                                </span>
                              </td>
                              <td className="px-6 py-4">
                                <div className="flex gap-3">
                                  <a href="../../pages/dishes/edit-dish.html">
                                    <svg
                                      stroke="currentColor"
                                      fill="none"
                                      strokeWidth="2"
                                      viewBox="0 0 24 24"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="cursor-pointer transition-colors hover:text-orange-400"
                                      height="20"
                                      width="20"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                                      <path d="m15 5 4 4"></path>
                                    </svg>
                                  </a>
                                  <a href="../../pages/dishes/dish-details.html">
                                    <svg
                                      stroke="currentColor"
                                      fill="none"
                                      strokeWidth="2"
                                      viewBox="0 0 24 24"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="cursor-pointer transition-colors hover:text-orange-400"
                                      height="20"
                                      width="20"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                      <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                  </a>
                                  <button
                                    onClick={() => {
                                      removeRestoruntFood(item._id);
                                    }}
                                  >
                                    <svg
                                      stroke="currentColor"
                                      fill="none"
                                      strokeWidth="2"
                                      viewBox="0 0 24 24"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="cursor-pointer transition-colors hover:text-red-500"
                                      height="20"
                                      width="20"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M3 6h18"></path>
                                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                      <line
                                        x1="10"
                                        x2="10"
                                        y1="11"
                                        y2="17"
                                      ></line>
                                      <line
                                        x1="14"
                                        x2="14"
                                        y1="11"
                                        y2="17"
                                      ></line>
                                    </svg>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DishList;
