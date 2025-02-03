import CategoryModel from "../models/categoriesModels.js";
import fs from "fs";
import path from "path";

// add category
const addCategory = async (req, res) => {
  const image_path = req.file ? req.file.filename : null;

  const category = new CategoryModel({
    name: req.body.name,
    image: image_path,
  });
  
  try {
    await category.save();
    res.json({ success: true, message: "Category added successfully" });
  } catch (error) {
    console.error("Error adding category:", error);
    res.status(500).json({ success: false, message: "Error saving category" });
  }
};

// list categories
const listCategories = async (req, res) => {
  try {
    const categories = await CategoryModel.find({});
    res.json({ success: true, data: categories });
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ success: false, message: "Error fetching categories" });
  }
};

// remove category
const removeCategory = async (req, res) => {
  try {
    const category = await CategoryModel.findById(req.body.id);
    
    if (!category) {
      return res.status(404).json({ success: false, message: "Category not found" });
    }
    
    const imagePath = path.join('upload', category.image);
    fs.unlink(imagePath, (err) => {
      if (err) {
        console.error("Error deleting file:", err);
      }
    });
    
    await CategoryModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Category deleted successfully" });
  } catch (error) {
    console.error("Error deleting category:", error);
    res.status(500).json({ success: false, message: "Error deleting category" });
  }
};

export { addCategory, listCategories, removeCategory };
