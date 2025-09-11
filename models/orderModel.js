import mongoose from "mongoose";
const  orderSchema=new mongoose.Schema({
    foods:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"foods",
        }
    ],
payment:{},
buyer:{
 type:mongoose.Schema.Types.ObjectId,
 ref:"users"
},
status:{
type:String,
enum: ["preparing", "prepare", "on the way", "deliverd"],
default: "preparing",
}
},{timestamps:true});

 const Order=mongoose.model("orders", orderSchema);
 export default Order;