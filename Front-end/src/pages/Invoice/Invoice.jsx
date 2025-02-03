import React from "react";
import { useLocation } from "react-router-dom";
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const Invoice = () => {
  const { state } = useLocation();
  const { formData, cartData } = state || {};

  const { items, subtotal, deliveryFee, discount, totalAmount } = cartData || {};

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Invoice", 14, 16);
    doc.autoTable({
      startY: 20,
      head: [['Item', 'Quantity', 'Price', 'Total']],
      body: items.map(item => [
        item.name,
        item.quantity,
        item.price,
        item.price * item.quantity
      ]),
    });
    doc.text(`Subtotal: ₹${subtotal}`, 14, doc.lastAutoTable.finalY + 10);
    doc.text(`Delivery Fee: ₹${deliveryFee}`, 14, doc.lastAutoTable.finalY + 20);
    doc.text(`Discount: ₹${discount}`, 14, doc.lastAutoTable.finalY + 30);
    doc.text(`Total Amount: ₹${totalAmount}`, 14, doc.lastAutoTable.finalY + 40);
    doc.text(`Name: ${formData.name}`, 14, doc.lastAutoTable.finalY + 50);
    doc.text(`Mobile Number: ${formData.mobileNumber}`, 14, doc.lastAutoTable.finalY + 60);
    doc.text(`Email: ${formData.email}`, 14, doc.lastAutoTable.finalY + 70);
    doc.text(`Number of Persons: ${formData.numberOfPersons}`, 14, doc.lastAutoTable.finalY + 80);
    doc.text(`Table Number: ${formData.tableNumber}`, 14, doc.lastAutoTable.finalY + 90);
    doc.save('invoice.pdf');
  };

  return (
    <div className="container mx-auto">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Invoice</h1>
        <div className="mb-6 border-b border-gray-300 pb-4">
          <h2 className="text-2xl font-semibold mb-4">Order Details</h2>
          <p className="text-lg"><strong>Name:</strong> {formData.name}</p>
          <p className="text-lg"><strong>Mobile Number:</strong> {formData.mobileNumber}</p>
          <p className="text-lg"><strong>Email:</strong> {formData.email}</p>
          <p className="text-lg"><strong>Number of Persons:</strong> {formData.numberOfPersons}</p>
          <p className="text-lg"><strong>Table Number:</strong> {formData.tableNumber}</p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Cart Summary</h2>
          <div className="bg-gray-100 p-4 rounded-lg">
            {items.map((item, index) => (
              <div key={index} className="flex justify-between mb-2 border-b border-gray-200 pb-2">
                <span className="text-lg font-medium">{item.name}</span>
                <span className="text-lg">₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}</span>
              </div>
            ))}
            <div className="flex justify-between font-bold mt-4">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>Delivery Fee</span>
              <span>₹{deliveryFee}</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>Discount</span>
              <span>₹{discount}</span>
            </div>
            <div className="flex justify-between font-bold mt-4 text-xl">
              <span>Total Amount</span>
              <span>₹{totalAmount}</span>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button 
            onClick={generatePDF} 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Download PDF
          </button>
          {/* Add sharing functionality here if needed */}
        </div>
      </div>
    </div>
  );
};

export default Invoice;
