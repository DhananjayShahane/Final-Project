import React from 'react';
import { useLocation } from 'react-router-dom';

const Payment = () => {
  const location = useLocation();
  const { orderData } = location.state || {};

  if (!orderData) {
    return <div>No order data available</div>;
  }

  const { cartItems, name, mobileNumber, email, numberOfPersons, tableNumber, totalAmount } = orderData;

  return (
    <div>
      <h2>Payment Summary</h2>
      <div>
        <h3>Personal Details</h3>
        <p>Name: {name}</p>
        <p>Mobile Number: {mobileNumber}</p>
        <p>Email: {email}</p>
        <p>Number of Persons: {numberOfPersons}</p>
        <p>Table Number: {tableNumber}</p>
      </div>
      <div>
        <h3>Cart Details</h3>
        {cartItems.items.map(item => (
          <div key={item._id}>
            <p>{item.name} - {item.quantity} x &#x20b9;{item.price} = &#x20b9;{item.total}</p>
          </div>
        ))}
        <p>Subtotal: &#x20b9;{cartItems.subtotal}</p>
        <p>Delivery Fee: &#x20b9;{cartItems.deliveryFee}</p>
        <p>Discount: &#x20b9;{cartItems.discount}</p>
        <p>Total Amount: &#x20b9;{totalAmount}</p>
      </div>
      {/* Add payment processing here */}
    </div>
  );
};

export default Payment;
