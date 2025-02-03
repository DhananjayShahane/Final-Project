import React, { useContext, useEffect, useState } from "react";
import { CalendarDays, ChevronRight } from "lucide-react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const orders = [
  { id: 1, date: "2023-05-15", total: 45.99, status: "Delivered", items: ["Margherita Pizza", "Garlic Bread"] },
  { id: 2, date: "2023-05-10", total: 32.5, status: "Processing", items: ["Chicken Alfredo", "Caesar Salad"] },
];

const MyOrders = () => {
    const {URL, token} = useContext(StoreContext);
    const [data, setData] = useState([]);

    const fetchOrders = async () =>{
        let response = await axios.post(URL+'/api/orders/usersorders',{},{headers:{token}});
        setData(response.data.data); 
        console.log(response.data.data);
    }

    useEffect(()=>{
        if(token){
            fetchOrders();
        }
    },[token])

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">My Orders</h1>
      <div className="space-y-6">
        {data.map((order) => (
          <div key={order._id} className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-3">
                <CalendarDays className="text-gray-500 w-5 h-5" />
                <span className="text-md text-gray-700 font-medium">{new Date(order.date).toLocaleDateString()}</span>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  order.status === "Delivered"
                    ? "bg-green-100 text-green-600"
                    : order.status === "Processing"
                    ? "bg-blue-100 text-blue-600"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {order.status}
              </span>
            </div>
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Order #{order._id.slice(0,5)}</h2>
              <p className="text-sm text-gray-600 mt-1">
                {order.items.map((item,index)=>{
                    if(index === order.items.length - 1){
                        return item.name+" x "+item.quantity 
                    }else{
                        return item.name+" x "+item.quantity+", "
                    }
                    
                })}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-gray-900">Rs.{order.amount}</span>
              <span className="text-lg font-bold text-gray-900">Items: {order.items.length}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
