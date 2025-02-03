import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
const CaterogiesList = () => {
  const { categoriesList, removeCategoriesFood, URL } =
    useContext(StoreContext);

  return (
    <>
      <div className="page-content space-y-6">
        <div className="flex w-full items-center justify-between">
          <h4 className="text-xl font-medium">Caterogies List</h4>
          <ol
            aria-label="Breadcrumb"
            className="hidden min-w-0 items-center gap-2 whitespace-nowrap md:flex"
          >
            <li className="text-sm">
              <a
                className="flex items-center gap-2 align-middle text-gray-800 transition-all hover:text-orange-400-500"
                href="./Caterogies.html"
              >
                Caterogies
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
              Caterogies List
            </li>
          </ol>
        </div>
        <div className="grid grid-cols-1">
          <div className="rounded-lg border border-gray-200 bg-white">
            <div className="overflow-hidden px-6 py-4 ">
              <div className="flex flex-wrap items-center justify-between gap-4 md:flex-nowrap">
                <h2 className="text-xl font-semibold text-gray-800">
                  Caterogies List
                </h2>
                <div className="flex flex-wrap items-center gap-4">
                  <NavLink
                    to="/add-categories"
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
                          Image
                        </th>
                        <th className="whitespace-nowrap px-6 py-3 text-start text-sm font-medium text-gray-800">
                          Category Name
                        </th>
                        <th className="whitespace-nowrap px-6 py-3 text-start text-sm font-medium text-gray-800">
                          Date
                        </th>
                        <th className="whitespace-nowrap px-6 py-3 text-start text-sm font-medium text-gray-800">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody
                      className="divide-y divide-gray-200"
                      id="CaterogiesList"
                    >
                      {categoriesList.map((item, index) => {
                        return (
                          <>
                            <tr key={index}>
                              <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                                <a className="flex items-center gap-3">
                                  <div className="h-12 w-12 shrink">
                                    <img
                                      src={
                                        `${URL}/category-images/` + item.image
                                      }
                                      height="48"
                                      width="48"
                                      alt={item.name}
                                      className="h-full max-w-full"
                                    />
                                  </div>
                                </a>
                              </td>
                              <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-500">
                                {item.name}
                              </td>
                              <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-500">
                              {new Date(item.date).toLocaleDateString()}
                              </td>
                              <td className="px-6 py-4">
                                <div className="flex gap-3">
                                  <a href="#">
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
                                  <button
                                    onClick={() => {
                                      removeCategoriesFood(item._id);
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

export default CaterogiesList;
