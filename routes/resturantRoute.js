import express from "express";
import { createResturant, deleteResturant, getAllResturants, getResturantById } from "../controllers/resturantController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
const resturantRouter = express.Router();

resturantRouter.post("/create",createResturant);
resturantRouter.get("/getAll",getAllResturants);
resturantRouter.get("/getSingle/:id",getResturantById);
resturantRouter.delete("/delete/:id",authMiddleware,deleteResturant);
export default resturantRouter;