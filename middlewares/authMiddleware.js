import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; 
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET,(err,decoded)=>{
        if(err){
        return res.status(401).json({message:"Invalid token"});
      }
      return decoded;
    });

    req.body.id = decoded.id; 
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
}