import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  
  const URL = "http://localhost:4000";

  const [categoriesList, setCategoriesList] = useState([]);
  const [resturantsList, setResturantsList] = useState([]);
  const [reactorsList, setReactorsList] = useState([]);

  // Get categories list
  const fetchCategoriesList = async () => {
    try {
      const response = await axios.get(`${URL}/api/category/list`);
      if (response.data.success) {
        setCategoriesList(response.data.data);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Remove categories food
  const removeCategoriesFood = async (categoryId) => {
    try {
      const response = await axios.post(`${URL}/api/category/remove/`, {
        id: categoryId,
      });
      await fetchCategoriesList();
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error("Error removing category");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Restaurant list
  const fetchRestoruntList = async () => {
    try {
      const response = await axios.get(`${URL}/api/food/list-food`);
      if (response.data.success) {
        setResturantsList(response.data.data);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message); 
    }
  };

  // Restaurant food items remove
  const removeRestoruntFood = async (foodId) => {
    try {
      const response = await axios.post(`${URL}/api/food/remove/`, {
        id: foodId,
      });
      await fetchRestoruntList();
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error("Error removing food item");
      }
    } catch (error) {
      toast.error(error.message); 
    }
  };

  const fetchRestoruntSroreList = async () => {
    try {
      const response = await axios.get(`${URL}/api/restaurant/list`);
      if (response.data.success) {
        setReactorsList(response.data.data);
      } else {
        toast.error(error);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const removeRestoruntSroreList = async (restoStoreId) => {
    const response = await axios.post(`${URL}/api/restaurant/remove/`, {
      id: restoStoreId,
    });
    await fetchRestoruntSroreList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("error");
    }
  };

  useEffect(() => {
    const loadData = async () => {
      await fetchRestoruntList();
      await fetchCategoriesList();
      await fetchRestoruntSroreList();
    };

    loadData();
  }, []);

  const contextValue = {
    URL,
    categoriesList,
    resturantsList,
    reactorsList,
    removeCategoriesFood,
    removeRestoruntFood,
    removeRestoruntSroreList,
    fetchRestoruntList
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
