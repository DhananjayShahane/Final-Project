import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const CategoryModel = mongoose.models.category || mongoose.model('category', categorySchema);

export default CategoryModel;
