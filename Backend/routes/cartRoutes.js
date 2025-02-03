import express from 'express';
import { addCart, removeCart, getCart } from '../controllers/cartController.js';
import authmiddleware from '../middleware/auth.js';
const cartRouter = express.Router();

cartRouter.post('/add', authmiddleware,  addCart);
cartRouter.post('/remove', authmiddleware, removeCart);
cartRouter.get('/get', authmiddleware, getCart);


export default cartRouter;