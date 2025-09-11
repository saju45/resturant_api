import User from "../models/userModel.js";
export const adminAuthMiddleware = async(req, res, next) => {

  try {
    const user=await  User.findById(req.body.id);
    console.log(req.body);
    
    if(!user){
        return res.status(401).json({ message: "UnAuthorize user" });
    }
    if(user.userType !== "admin"){
        return res.status(401).json({ message: "only admin can access" });
    }

    next();
  } catch (error) {
    return res.status(401).json({ message: "UnAuthorize token" });
  }
}