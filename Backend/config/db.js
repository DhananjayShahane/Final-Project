import mongoose from "mongoose";
import "dotenv/config";

export const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("Connected Db");
    })
    .catch((err) => {
      console.error("Connection failed", err);
    });
};
 
