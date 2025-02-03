import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { FaHome, FaShoppingCart, FaChevronRight, } from "react-icons/fa";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const {getTotalCartAmount,token,food_list,cartItems,URL} = useContext(StoreContext);

  const [data, setData] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    numberOfPersons: "",
    tableNumber: "",
  });


  const [subtotal, setSubtotal] = useState(0);
  const [deliveryFee, setDeliveryFee] = useState(50);
  const [discount, setDiscount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  React.useEffect(() => {
    const calculateSubtotal = () => {
      return food_list.reduce((total, item) => {
        if (cartItems[item._id] > 0) {
          total += item.price * cartItems[item._id];
        }
        return total;
      }, 0);
    };

    const calculatedSubtotal = calculateSubtotal();
    setSubtotal(calculatedSubtotal);
    setTotalAmount(calculatedSubtotal + deliveryFee - discount);
  }, [cartItems, food_list, deliveryFee, discount]);

  const onChangeHandlers = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const placeOrder = async (e) => {
    e.preventDefault();

    if (!data.name || !data.mobileNumber || !data.email || !data.numberOfPersons || !data.tableNumber) {
      toast.error("Please fill in all fields.");
      return;
    }

    let orderItems = [];

    food_list.map((item)=>{
      if(cartItems[item._id]>0){
        let itemInfo = item;
        itemInfo['quantity'] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    })

    const orderData = {
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+2,
    }

    let response = await axios.post(URL+'/api/orders/place',orderData,{headers:{token}});

    if(response.data.success){
      const {session_url} = response.data;
      window.location.replace(session_url);
    }else{
      alert("Error: ");
    }

    const navigation = useNavigate();
    useEffect(()=>{
      if(!token){
        navigation("/cart");
      }else if(getTotalCartAmount()===0){
           navigation("/cart");
      }
    },[token])
  };

  return (
    <div>
      <div className="h-14 flex items-center bg-orange-50 justify-center px-2">
        <div className="flex items-center">
          <ol className="flex min-w-0 items-center gap-2 whitespace-nowrap">
            <li className="text-sm">
              <Link className="flex items-center gap-2 text-default-800 hover:text-primary-500" to="/">
                <FaHome className="text-lg text-primary-500" /> Home
                <FaChevronRight size={16} />
              </Link>
            </li>
            <li className="text-sm">
              <Link className="flex items-center gap-2 text-default-800 hover:text-primary-500" to="/cart">
                <FaShoppingCart className="text-lg text-primary-500" /> Cart
                <FaChevronRight size={16} />
              </Link>
            </li>
            <li className="text-sm font-medium text-black hover:text-orange-500 flex items-center gap-2">
              Checkout
            </li>
          </ol>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4">
        <div className="py-6 lg:py-10">
          <form onSubmit={placeOrder} className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="place-order-left">
              <h2 className="title">Book Table</h2>
              <div className="multi-fields">
                <input type="text" name="name" placeholder="Name" value={data.name} onChange={onChangeHandlers} />
                <input type="text" name="mobileNumber" placeholder="Mobile Number" value={data.mobileNumber} onChange={onChangeHandlers} />
              </div>
              <input type="email" name="email" placeholder="Email Id" value={data.email} onChange={onChangeHandlers} />
              <input type="number" name="numberOfPersons" placeholder="Number of Persons" value={data.numberOfPersons} onChange={onChangeHandlers} />
              <select name="tableNumber" value={data.tableNumber} onChange={onChangeHandlers} className="border p-2 w-full mb-3">
                <option value="">Select Table Number</option>
                {[1, 2, 3].map((num) => (
                  <option key={num} value={num}>
                    Table {num}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-5 rounded-lg border border-default-200 p-5">
              <h4 className="mb-5 text-lg font-semibold">Cart Total</h4>
              <div className="mb-6">
                <div className="mb-3 flex justify-between">
                  <p className="text-sm">Sub-total</p>
                  <p className="text-sm font-medium">&#x20b9;{subtotal}</p>
                </div>
                <div className="mb-3 flex justify-between">
                  <p className="text-sm">Delivery</p>
                  <p className="text-sm font-medium">&#x20b9;{deliveryFee}</p>
                </div>
                <div className="mb-3 flex justify-between">
                  <p className="text-sm">Discount (20%)</p>
                  <p className="text-sm font-medium">&#x20b9;{discount.toFixed(2)}</p>
                </div>
                <div className="border-b my-4"></div>
                <div className="mb-3 flex justify-between">
                  <p className="text-base">Total</p>
                  <p className="text-base font-medium">&#x20b9;{totalAmount.toFixed(2)}</p>
                </div>
              </div>
              <button disabled={subtotal === 0} type="submit" className="w-full bg-orange-400 text-white py-3 rounded-lg">
                Place Order
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default PlaceOrder;
