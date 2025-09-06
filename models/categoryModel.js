import mongoose from "mongoose";
const categorySchema=new mongoose.Schema({
  
    title:{
       type:String,
       required:[true,"Please provide title"],
       unique:true
    },
    imageUrl:{
       type:String,
    },

   
},{timestamps:true});

 const Category=mongoose.model("categories",categorySchema);
 export default Category;