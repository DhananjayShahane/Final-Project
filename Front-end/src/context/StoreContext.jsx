import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const URL = "https://restaurant-backend-5vmn.onrender.com"
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState("");
  const [food_list, setFoodList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);

  const fetchFoodCategoryList = async () => {
    try {
      const response = await axios.get(`${URL}/api/category/list`);
      if (response.data.success) {
        setCategoriesList(response.data.data);
      } else {
        toast.error("Failed to fetch categories");
      }
    } catch (error) {
      toast.error("Error fetching categories");
    }
  };

  // fetch food list
  const fetchFoodList = async () => {
    const response = await axios.get(URL + "/api/food/list-food");
    setFoodList(response.data.data);
  };

  // add to cart functionality
  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      await axios.post(
        URL + "/api/cart/add",
        { itemId },
        { headers: { token } }
      );
    }
  };

  // remove from cart items functionality
  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      await axios.post(
        URL + "/api/cart/remove",
        { itemId },
        { headers: { token } }
      );
    }
  };

  // get cart items functionality
  const loadCardData = async (token) => {
    const response = await axios.get(`${URL}/api/cart/get`, {
      headers: { token },
    });
    setCartItems(response.data.cartData);
  };

  // get total quantity of items in cart functionality
  const getTotalQuantity = () => {
    let totalQuantity = 0;
    for (const itemId in cartItems) {
      totalQuantity += cartItems[itemId];
    }
    return totalQuantity;
  };

  // get total amount of items in cart functionality
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  // load all functionality when page loads
  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      await fetchFoodCategoryList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCardData(localStorage.getItem("token"));
      }
    }
    loadData();
  }, []);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalQuantity,
    URL,
    token,
    setToken,
    categoriesList,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
