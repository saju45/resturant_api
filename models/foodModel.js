// import mongoose from "mongoose";
// const foodSchema=new mongoose.Schema({
  
//     title:{
//        type:String,
//        required:[true,"Please provide title"],
//        unique:true
//     },
//     description:{
//          type:String,
//          required:[true,"Please provide description"],
//     },
//     category:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"categories",
//         required:[true,"Please provide category"],
//     },
//     price:{
//          type:Number,
//          required:[true,"Please provide price"],
//     },
//      imageUrl:{
//          type:String,
//         },
//     foodTags:{
//        type:String,
//     },
//     Food:{
//         type:String
//     },
//     code:{
//         type:String
//     },
//     isAvailable:{
//         type:Boolean,
//         default:true
//     },
//     resturant:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"resturants",
//     },
//     rating:{
//         type:Number,
//         min:1,
//         max:5,
//         default:5
//     },
//     ratingCount:{
//         type:String,
//     },

   
// },{timestamps:true});

//  const Food=mongoose.model("foods",foodSchema);
//  export default Food;





import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide title"],
    unique: true,
  },
  description: {
    type: String,
    required: [true, "Please provide description"],
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categories",
    required: [true, "Please provide category"],
  },
  price: {
    type: Number,
    required: [true, "Please provide price"],
  },
  imageUrl: String,
  foodTags: String,
  Food: String,
  code: String,
  isAvailable: {
    type: Boolean,
    default: true,
  },
  resturant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "resturants",
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5,
  },
  ratingCount: String,
}, { timestamps: true });

const Food = mongoose.model("foods", foodSchema);

export default Food;
