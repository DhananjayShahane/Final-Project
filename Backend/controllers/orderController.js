import orderModel from "../models/orderModal.js";
import userModel from "../models/userModels.js";
import Stripe from "stripe";
import "dotenv/config";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const frontend_url = "http://localhost:5173";

// Place Order Controller
const placeOrder = async (req, res) => {
  try {
    // Save order details to the database
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });
    await newOrder.save();
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

    const line_items = req.body.items.map((item) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.name,
        },
        unit_amount: Math.round(item.price * 100), // Convert INR to paise
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      mode: "payment",
      success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
    });

    res.json({ success: true, session_url: session.url });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ error: "Error creating order" });
  }
};

const verifyOrder = async (req, res) => {
  const { orderId, success } = req.body;
  try {
    if (success === "true") {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      res.json({ success: true, message: "Paid" });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      res.json({ success: false, message: "Not Paid" });
    }
  } catch (error) {
    console.error("Order verification error:", error);
    res.status(500).json({ success: false, message: "Error" });
  }
};

// Users Orders Controller
const usersOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({ userId: req.body.userId });
    res.json({ success: true, data: orders });
  } catch (error) {
    console.error("Error fetching user orders:", error);
    res.json({ success: false, message: "Error fetching user orders" });
  }
};

// Success Order Controller (Can be used for manual status update)
// const successOrder = async (req, res) => {
//   try {
//     const { orderId, paymentDetails } = req.body;

//     // Update order status to paid
//     const updatedOrder = await orderModel.findOneAndUpdate(
//       { _id: orderId },
//       { status: "paid", paymentDetails },
//       { new: true }
//     );

//     res.json({ msg: "Order updated successfully", order: updatedOrder });
//   } catch (error) {
//     console.error("Error updating order:", error);
//     res.status(500).json({ error: "Error updating order" });
//   }
// };

const listOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, data: orders });
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ success: false, message: "Error fetching orders" });
  }
};

const updateStatus = async (req, res) => {
  try {
    await orderModel.findOneAndUpdate(req.body.orderId, {
      status:req.body.status,
    });
    res.json({ success: true, message: "Status updated successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error updating status" });
  }
};

export { verifyOrder, placeOrder, usersOrders, listOrders, updateStatus };
