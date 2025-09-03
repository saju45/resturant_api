import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please provide username"],
    },
     email:{
        type:String,
        required:[true,"Please provide email"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Please provide password"],
        minLength:6,
    },
    address:{
        type:Array,
        default:[]
    },
    phone: {
        type: String,
        required: [true, "Please provide phone number"],
        unique: true,
        minLength: 10,
        maxLength: 15,
    },
    
    userType:{
        type:String,
        required:true,
        enum:["admin","user"],
        default:"user"
    },
    profile:{
        type:String,
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH87TKQrWcl19xly2VNs0CjBzy8eaKNM-ZpA&s"
    },
    answer:{
        type:String,
        required:[true,"Please provide answer for security question"]
    }
   
},{timestamps:true});

 const User=mongoose.model("users",userSchema);
 export default User;