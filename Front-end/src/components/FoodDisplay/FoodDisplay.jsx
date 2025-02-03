import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category}) => {
  const { food_list } = useContext(StoreContext);

  // Apply filtering based on category and filters
  const filteredFood = food_list.filter((item) => {
    if (category !== "All" && item.category !== category) return false;
    return true;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 foodWrapper">
      {filteredFood.length > 0 ? (
        filteredFood.map((item, index) => (
          <FoodItem
            key={index}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">No food items found.</p>
      )}
    </div>
  );
};


export default FoodDisplay;
