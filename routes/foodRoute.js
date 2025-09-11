import express from "express";
import { createFood, deleteFood, getAllFoods, getFoodById, orderStatus, placeOrder, updateFood } from "../controllers/foodController.js";
import { adminAuthMiddleware } from "../middlewares/adminMiddleware.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const foodRoute = express.Router();

foodRoute.post("/create",createFood);
foodRoute.get("/getAll",getAllFoods);
foodRoute.get("/getSingle/:id",getFoodById);
foodRoute.put("/update/:id",updateFood);
foodRoute.delete("/delete/:id",deleteFood);

//place order
foodRoute.post("/placeOrder",authMiddleware,placeOrder);
foodRoute.put("/updateStatus/:id",authMiddleware,adminAuthMiddleware,orderStatus);


export default foodRoute;