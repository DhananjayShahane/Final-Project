import foodModal from "../models/foodModel.js";
import fs from "fs";

// add food items

const addFood = async (req,res) =>{
  let image_path = `${req.file.filename}`

  const food = new foodModal({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    category: req.body.category,
    image: image_path
  })
  try {
    await food.save()
    res.json({success: true, message: 'food Added successfully'})
  } catch (error) {
    console.log(error,'food error');
    res.json({success: false, message: 'error saving food'});
    
  } 
}

// food list

const listFood = async (req,res)=>{
  try {
    const foods = await foodModal.find({});
    res.json({success: true,data:foods});
  } catch (error) {
    console.log(error);
    res.json({success: false, message: 'error fetching foods'});
    
  } 
}

// remove food

const removeFood = async (req,res)=>{
  try {
    const food = await foodModal.findById(req.body.id);
    fs.unlink(`upload/${food.image}`,()=>{});
    await foodModal.findByIdAndDelete(req.body.id);
    res.json({success:true,message:"food deleted successfully"});
  } catch (error) {
    console.log(error);
    res.json({success:false,message:"food is not deleted"})
    
  }
}

export {addFood,listFood,removeFood} 