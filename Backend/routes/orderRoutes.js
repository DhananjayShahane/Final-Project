import express from 'express';
import authmeddleware from '../middleware/auth.js';
import { placeOrder,usersOrders,verifyOrder,listOrders,updateStatus } from '../controllers/orderController.js';

const orderRouter = express.Router();

orderRouter.post('/place', authmeddleware, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/usersorders", authmeddleware, usersOrders);
// orderRouter.post("/success", authmeddleware, successOrder);
orderRouter.get("/listorders", listOrders);
orderRouter.post("/updatestatus", updateStatus)



export default orderRouter;
