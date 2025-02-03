import express from 'express';
import cors from 'cors';
import { connectDB} from './config/db.js';
import foodRouter from './routes/foodRoutes.js';
import userRouter from './routes/userRouters.js';
import cartRouter from './routes/cartRoutes.js';
import orderRouter from './routes/orderRoutes.js';
import categoryRouter from './routes/categoriesRoutes.js';
import "dotenv/config"
import restaurantRouter from './routes/resaurantRoutes.js';

// app config 
const app = express();
const port = process.env.PORT || 4000;


// middleware
app.use(express.json())
app.use(cors());

// DB connections
connectDB();


// api endpoint
app.use("/api/food", foodRouter);
app.use("/images",express.static("upload"))
app.use("/category-images",express.static("upload-category"))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/orders",orderRouter)
app.use("/api/category",categoryRouter)
app.use('/api/restaurant', restaurantRouter);


app.get(("/"),(req,res)=>{
  res.send("Api working")
});


app.listen(port,()=>{
    console.log(`App listening on port ${port}`)
});
