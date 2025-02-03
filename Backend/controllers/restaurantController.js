import RestaurantModel from "../models/resaurantModels.js";
import fs from "fs";
import path from "path";

// Add restaurant

const addRestaurant = async (req, res) => {
    try {
      console.log("Request body:", req.body);
      console.log("Uploaded file:", req.file);
  
      // Validate file and form data
      if (!req.file) {
        return res.status(400).json({ success: false, message: "Logo file is required." });
      }
  
      const { restaurantName, openingHours, address, description, ownerName, contactNumber, emails, status, orders, location, openingDate } = req.body;
      
      if (!restaurantName || !openingHours || !address || !description || !ownerName || !contactNumber || !emails || !status || !orders || !location || !openingDate) {
        return res.status(400).json({ success: false, message: "All form fields are required." });
      }
  
      const logo_path = req.file ? req.file.filename : null;
  
      const newRestaurant = new RestaurantModel({
        logo: logo_path,
        name: restaurantName,
        openingHours,
        address,
        description,
        ownerName,
        contactNumber,
        email: emails,
        status,
        orders,
        location,
        openingDate,
      });
  
      await newRestaurant.save();
  
      res.json({ success: true, message: "Restaurant added successfully" });
    } catch (error) {
      console.error("Error adding restaurant:", error);
      res.status(500).json({ success: false, message: "Error saving restaurant" });
    }
  };

// List restaurants
const listRestaurants = async (req, res) => {
  try {
    const restaurants = await RestaurantModel.find({});
    res.json({ success: true, data: restaurants });
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    res.status(500).json({ success: false, message: "Error fetching restaurants" });
  }
};

// Remove restaurant
const removeRestaurant = async (req, res) => {
  try {
    const restaurant = await RestaurantModel.findById(req.body.id);

    if (!restaurant) {
      return res.status(404).json({ success: false, message: "Restaurant not found" });
    }

    const logoPath = path.join('upload', restaurant.logo);
    fs.unlink(logoPath, (err) => {
      if (err) {
        console.error("Error deleting file:", err);
        return res.status(500).json({ success: false, message: "Error deleting file" });
      }
    });

    await RestaurantModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Restaurant deleted successfully" });
  } catch (error) {
    console.error("Error deleting restaurant:", error);
    res.status(500).json({ success: false, message: "Error deleting restaurant" });
  }
};

export { addRestaurant, listRestaurants, removeRestaurant };
