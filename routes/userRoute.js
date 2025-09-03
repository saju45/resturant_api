import express from "express";
import { createUser, deleteUser, getuser, login, resetPassword, updateUser } from "../controllers/userController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
const userRouter = express.Router();

userRouter.post("/register",createUser);
userRouter.post("/login",login);
userRouter.get("/getUser",authMiddleware,getuser);
userRouter.put("/updateUser",updateUser);
userRouter.put("/resetPassword",authMiddleware,resetPassword);
userRouter.delete("/deleteUser/:id",authMiddleware,deleteUser)

export default userRouter;