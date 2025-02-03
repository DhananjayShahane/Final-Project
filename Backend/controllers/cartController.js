import useModal from "../models/userModels.js";

const addCart = async (req, res) => {
  try {
    // Fetch user data from the database
    let userData = await useModal.findById(req.body.userId);

    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Initialize cartData if it doesn't exist
    let cartData = userData.cartData || {};

    // Update cart data
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }

    // Save updated cart data back to the database
    await useModal.findByIdAndUpdate(req.body.userId, { cartData }, { new: true });

    res.json({ success: true, message: "Added to cart" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error occurred" });
  }
};

const removeCart = async (req, res) => {
    try {
      // Fetch user data from the database
      let userData = await useModal.findById(req.body.userId);
  
      if (!userData) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
  
      // Initialize cartData if it doesn't exist
      let cartData = userData.cartData || {};
  
      // Check if item exists in the cart and update its quantity
      if (cartData[req.body.itemId] > 0) {
        cartData[req.body.itemId] -= 1;
  
        // If quantity becomes zero, remove the item from the cart
        if (cartData[req.body.itemId] === 0) {
          delete cartData[req.body.itemId];
        }
  
        // Save updated cart data back to the database
        await useModal.findByIdAndUpdate(req.body.userId, { cartData }, { new: true });
  
        res.json({ success: true, message: "Item removed from cart" });
      } else {
        res.status(404).json({ success: false, message: "Item not found in cart" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Error occurred" });
    }
  };
  

const getCart = async (req, res) => {
  try {
    // Fetch user data from the database
    let userData = await useModal.findById(req.body.userId);
    let cartData = await userData.cartData;
    res.json({success: true, cartData});

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error occurred" });
  }
};

export { addCart, removeCart, getCart };
