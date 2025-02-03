import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Asidebar from "./components/Asidebar";
import StoreContextProvider from "./context/StoreContext.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import { ToastContainer } from "react-toastify";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Loader from "./components/Loader.jsx";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import "./App.css";

const Restaurants = lazy(() => import("./pages/RestaurantsList"));
const CaterogiesList = lazy(() => import("./pages/CategoriesList"));
const AddCategories = lazy(() => import("./pages/AddCategories"));
const DishList = lazy(() => import("./pages/DishList"));
const AddRestaurant = lazy(() => import("./pages/AddRestaurant"));
const RestaurantDishForm = lazy(() => import("./pages/Dishes.jsx"));
const Dashboard = lazy(() => import("./Dashboard"));
const Orders = lazy(() => import("./pages/Orders"));

const AppLayout = () => {
  return (
    <>
      <ToastContainer />
      <div className="app-admin-wrap-layout-2 layout-sidebar-large subheader-none">
        {/* <!-- header --> */}
        <Header />
        {/* <!--/ header --> */}

        <div className="main-content-wrap">
          {/* <!-- asidebar  --> */}
          <Asidebar />
          {/* <!-- asidebar  --> */}

          {/* <!-- Start:: content body--> */}
          <div className="main-content-body relative pt-10 px-4 flex flex-col sm:px-8">
            <Outlet />
          </div>
          {/* <!-- End:: content body--> */}
        </div>
      </div>
      <div className="ul-sidebar-panel-overlay"></div>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loader />}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: "add-dish",
        element: (
          <Suspense fallback={<Loader />}>
            <RestaurantDishForm />
          </Suspense>
        ),
      },
      {
        path: "orders",
        element: (
          <Suspense fallback={<Loader />}>
            <Orders />
          </Suspense>
        ),
      },
      {
        path: "dishesList",
        element: (
          <Suspense fallback={<Loader />}>
            <DishList />
          </Suspense>
        ),
      },
      {
        path: "add-categories",
        element: (
          <Suspense fallback={<Loader />}>
            <AddCategories />
          </Suspense>
        ),
      },
      {
        path: "categories-List",
        element: (
          <Suspense fallback={<Loader />}>
            <CaterogiesList />
          </Suspense>
        ),
      },
      {
        path: "add-branch",
        element: (
          <Suspense fallback={<Loader />}>
            <AddRestaurant />
          </Suspense>
        ),
      },
      {
        path: "branch-list",
        element: (
          <Suspense fallback={<Loader />}>
            <Restaurants />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <ThemeProvider>
      <StoreContextProvider>
        <RouterProvider router={appRouter} />
      </StoreContextProvider>
    </ThemeProvider>
  </>
);
