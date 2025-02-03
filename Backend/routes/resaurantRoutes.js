import express from 'express';
import { addRestaurant, listRestaurants, removeRestaurant } from '../controllers/restaurantController.js';
import multer from 'multer';

const restaurantRouter = express.Router();

// Image storage engine 
const storage = multer.diskStorage({
    destination: "upload-restaurant",
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

restaurantRouter.post("/add", upload.single("logo"), addRestaurant);
restaurantRouter.get("/list", listRestaurants);
restaurantRouter.post("/remove", removeRestaurant);

export default restaurantRouter;
