import mongoose from "mongoose";
const resturantSchema=new mongoose.Schema({
  
     title:{
        type:String,
        required:[true,"Please provide title"],
        unique:true
     },
     imageUrl:{
        type:String,
     },
     foods:{
        type:Array,
        default:[]
     },
     time:{
        type:String,
     },
     pickup:{
        type:Boolean,
     },
        delivery:{
            type:Boolean,
            default:true
        },

        isOpen:{
            type:Boolean,
            default:true
        },
        logoUrl:{
            type:String,
        },
        rating:{
            type:Number,
            min:1,
            max:5,
            default:1
        },
        ratingCount:{
            type:Number,
            default:0
        },
        code:{
            type:String
        },
        coords:{
            id:{type:String},
            latitude:{type:Number},
            latitudeDelta:{type:Number},
            longitude:{type:Number},
            longitudeDelta:{type:Number},
            address:{type:String},
            title:{type:String},

        }
   
},{timestamps:true});

 const Resturant=mongoose.model("resturants",resturantSchema);
 export default Resturant;