import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const createUser=async(req,res)=>{
    try {

        const {username,email,password,phone,address,answer}=req.body;

        if(!username || !email || !password || !phone || !answer){
            return res.status(400).json({
                message:"Please fill all the fields"
            })
        }

        const existingUser=await User.findOne({email});

        if(existingUser){
            return res.status(400).json({
                message:"User already exists"
            })
        }


        const hashedPassword=await bcrypt.hash(password,10);    

        const user=await User.create({
            username,
            email,
            password:hashedPassword,
            phone,
            address,
            answer
        });

    
        res.status(201).json({
            success:true,
            message:"User created successfully",
            user
        })

        
    } catch (error) {
        res.status(500).json({
            message:"There was an error in server side",
            error:error.message
        })
    }
}

export const login=async(req,res)=>{

    try {

        const {email,password}=req.body;

        if(!email || !password){
            return res.status(400).json({
                message:"Please fill all the fields"
            });
        }

        const user=await User.findOne({email});

        if(!user){
            return res.status(400).json({
                message:"User does not exist"
            });
        }

        const isPasswordCorrect=await bcrypt.compare(password,user.password);

        if(!isPasswordCorrect){
            return res.status(400).json({
                message:"Invalid credentials"
            });
        }

        const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{
            expiresIn:"1d"
        });
        res.status(200).json({
            success:true,
            message:"User logged in successfully",
            token,
            user
        });
        
    } catch (error) {
        res.status(500).json({
            message:"There was an error in server side",
            error:error.message
        });
    }
}

export const getuser=async(req,res)=>{
    try {
        const userId=req.body.id;
        const user=await User.findById(userId).select("-password");
        if(!user){
            return res.status(404).json({
                message:"User not found"
            });
        }       
        res.status(200).json({
            success:true,
            message:"User fetched successfully",
            user
        });
    } catch (error) {
        res.status(500).json({
            message:"There was an error in server side",
            error:error.message
        });
    }
}

export const updateUser=async(req,res)=>{

    try {
        const user =await User.findById(req.body.id);
        if(!user){
            return res.status(404).json({
                message:"User not found"
            });
        }

        const {username,phone,address}=req.body;
        if (username) {
            user.username = username;
        }

        if (phone) {
            user.phone = phone;
        }
        if (address) {
            user.address = address;
        }

        await user.save();
        res.status(200).json({
            success:true,
            message:"User updated successfully",
            user
        });


    } catch (error) {
               res.status(500).json({
            message:"There was an error in server side",
            error:error.message
        }); 
    }

}

export const  resetPassword=async(req,res)=>{
    try {
        const {oldPassword,newPassword}=req.body;

        if(!oldPassword || !newPassword){
            return res.status(400).json({
                message:"Please provide old and new password"
            });
        }


        const user=await User.findById(req.body.id);

        if(!user){
            return res.status(404).json({
                message:"User not found"
            });
        }

        const isPasswordCorrect=await bcrypt.compare(oldPassword,user.password);
        if(!isPasswordCorrect){
            return res.status(400).json({
                message:"Old password is incorrect"
            });
        }

        const hashedPassword=await bcrypt.hash(newPassword,10);
        user.password=hashedPassword;
        await user.save();
        res.status(200).json({
            success:true,
            message:"Password reset successfully"
        });
        
    } catch (error) {
        res.status(500).json({
            message:"There was an error in server side",
            error:error.message
        });
        
    }
}

export const deleteUser=async(req,res)=>{

    try {
        const userId=req.params.id;
        const user=await User.findByIdAndDelete(userId);
        if(!user){
            return res.status(404).json({
                message:"User not found"
            });
        }
        res.status(200).json({
            success:true,
            message:"User deleted successfully"
        });
        
    } catch (error) {
      
        res.status(500).json({
            message:"There was an error in server side",
            error:error.message
        });
    }
}
 