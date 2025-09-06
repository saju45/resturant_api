import express from "express";
import { createCategory, deleteCategory, getAllCategories, getCategoryById, updateCategory } from "../controllers/categoryController.js";

const categoryRouter = express.Router();

categoryRouter.post("/create",createCategory);
categoryRouter.get("/getAll",getAllCategories);
categoryRouter.get("/getSingle/:id",getCategoryById);
categoryRouter.put("/update/:id",updateCategory);
categoryRouter.delete("/delete/:id",deleteCategory);


export default categoryRouter;