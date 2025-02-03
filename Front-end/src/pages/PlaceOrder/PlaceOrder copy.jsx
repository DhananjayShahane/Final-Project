import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const { cartItems, getTotalCartAmount, food_list, token, URL } =
    useContext(StoreContext);
  const [discount, setDiscount] = useState(0);
  const [data, setData] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    numberOfPersons: "",
    tableNumber: "",
  });
  const navigate = useNavigate();

  const subtotal = getTotalCartAmount();

  // Delivery fee calculation
  const deliveryFee = 50; // Flat delivery fee of 50 INR
  const deliveryFeeApplied = subtotal === 0 ? 0 : deliveryFee;
  const totalAmount = subtotal + deliveryFeeApplied - discount;

  const onChangeHandlers = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const placeOrder = async (event) => {
    event.preventDefault();

    // Validate form data
    if (
      !data.name ||
      !data.mobileNumber ||
      !data.email ||
      !data.numberOfPersons ||
      !data.tableNumber
    ) {
      alert("Please fill in all fields.");
      return;
    }

    // Create an array of order items
    const orderItems = food_list
      .filter((item) => cartItems[item._id] > 0)
      .map((item) => ({
        ...item,
        quantity: cartItems[item._id],
      }));

    // Prepare order data
    const orderData = {
      bookTableInfo: data,
      items: orderItems,
      amount: totalAmount, // Ensure correct total amount calculation
    };

    try {
      // Make the API request to create an order
      const response = await axios.post(
        `${URL}/api/order/place`,
        orderData,
        {
          headers: { token },
        }
      );

      const { id: order_id, currency } = response.data;

      if (order_id) {
        // Load Razorpay script
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.onload = () => {
          const options = {
            key: process.env.REACT_APP_RAZORPAY_KEY_ID, 
            amount: (totalAmount * 100).toString(), // Amount in paise
            currency: currency,
            name: "King Food",
            description: "Test Transaction",
            order_id: order_id,
            handler: async function (response) {
              const paymentData = {
                orderCreationId: order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
                userId: "",  // Add user ID here
                orderId: order_id, // Add order ID here
              };

              try {
                const result = await axios.post(
                  `${URL}/api/order/success`,
                  paymentData,
                  {
                    headers: { token },
                  }
                );
                alert(result.data.msg);

                navigate("/success"); // Redirect to a success page
              } catch (error) {
                alert("Payment verification failed");
              }
            },
            prefill: {
              name: data.name,
              email: data.email,
              contact: data.mobileNumber,
            },
            notes: {
              address: "Your Address",
            },
            theme: {
              color: "#3399cc",
            },
          };

          const paymentObject = new window.Razorpay(options);
          paymentObject.open();
        };
        document.body.appendChild(script);
      } else {
        alert("Error: Unable to create order.");
      }
    } catch (error) {
      console.error("Order placement error:", error);
      alert("An error occurred while placing the order.");
    }
  };

  return (
    <>
      <button className="GoBack w-56" onClick={() => navigate("/cart")}>
        ⬅️ Go Back to Cart Page
      </button>

      <form onSubmit={placeOrder} className="place-order">
        {/* Form Fields */}
        <div className="place-order-left">
          <h2 className="title">Book Table</h2>
          <div className="multi-fields">
            <div className="w-full">
              <input
                type="text"
                onChange={onChangeHandlers}
                value={data.name}
                name="name"
                placeholder="Name"
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                name="mobileNumber"
                onChange={onChangeHandlers}
                value={data.mobileNumber}
                placeholder="Mobile Number"
              />
            </div>
          </div>
          <div className="w-full">
            <input
              type="email"
              name="email"
              onChange={onChangeHandlers}
              value={data.email}
              placeholder="Email Id"
            />
          </div>
          <div className="w-full">
            <input
              type="number"
              name="numberOfPersons"
              onChange={onChangeHandlers}
              value={data.numberOfPersons}
              placeholder="Number of Persons"
            />
          </div>
          <div className="w-full">
            <select
              name="tableNumber"
              onChange={onChangeHandlers}
              value={data.tableNumber}
              className="border border-2 p-2 w-full mb-3"
            >
              <option value="">Select Table Number</option>
              <option value="1">Table 1</option>
              <option value="2">Table 2</option>
              <option value="3">Table 3</option>
            </select>
          </div>
        </div>

        <div className="place-order-right">
          <div className="cart-total">
            <h2 className="title">Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>&#x20b9;{subtotal}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>&#x20b9;{deliveryFeeApplied}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>5% Discount</p>
                <p>&#x20b9;{discount}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>&#x20b9;{totalAmount}</b>
              </div>
            </div>

            <button type="submit" disabled={subtotal === 0}>
              PROCEED TO Payment
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default PlaceOrder;
