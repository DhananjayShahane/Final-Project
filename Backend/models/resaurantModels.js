import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
  logo: String,
  name: { type: String, required: true },
  openingHours: String,
  address: String,
  description: String,
  ownerName: String,
  contactNumber: String,
  email: String,
  status: String,
  orders: String,
  location: String,
  openingDate: Date,
});

const RestaurantModel = mongoose.model('Restaurant', restaurantSchema);

export default RestaurantModel;
