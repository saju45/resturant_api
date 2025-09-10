import express from "express";
import { createFood, deleteFood, getAllFoods, getFoodById, updateFood } from "../controllers/foodController.js";

const foodRoute = express.Router();

foodRoute.post("/create",createFood);
foodRoute.get("/getAll",getAllFoods);
foodRoute.get("/getSingle/:id",getFoodById);
foodRoute.put("/update/:id",updateFood);
foodRoute.delete("/delete/:id",deleteFood);


export default foodRoute;